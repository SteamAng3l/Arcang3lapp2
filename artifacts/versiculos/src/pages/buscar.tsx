import { useState, useMemo, useRef } from "react";
import { Search } from "lucide-react";
import { Heart, HeartOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllVerses, type VerseResponse } from "@/lib/data";
import { useFavorites } from "@/hooks/use-favorites";

const ALL = getAllVerses();

export default function Buscar() {
  const [q, setQ] = useState("");
  const [listening, setListening] = useState(false);
  const recRef = useRef<InstanceType<typeof window.SpeechRecognition> | null>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const startMic = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    recRef.current = rec;
    rec.lang = "es-ES";
    rec.onstart = () => setListening(true);
    rec.onresult = (e: any) => setQ(e.results[0][0].transcript);
    rec.onend = () => setListening(false);
    rec.start();
  };

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return ALL.filter(
      (v) =>
        v.verse_text.toLowerCase().includes(t) ||
        v.verse_reference.toLowerCase().includes(t)
    );
  }, [q]);

  const toggle = (v: VerseResponse) => {
    isFavorite(v.verse_reference) ? removeFavorite(v.verse_reference) : addFavorite(v);
  };

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-700 space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-serif text-foreground">Buscar Versículos</h2>
        <p className="text-muted-foreground font-serif text-xl leading-relaxed">
          Busca por texto o referencia entre los 1,320 versículos.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          autoFocus
          type="text"
          id="search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ej: Juan 3:16 · paz · no temas…"
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border/50 bg-card font-serif text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
        />
      </div>
      <button
        id="mic-button"
        onClick={startMic}
        className={`flex items-center gap-2 mx-auto px-5 py-2 rounded-full border font-serif text-base transition-colors ${listening ? "bg-primary text-primary-foreground border-primary animate-pulse" : "bg-card border-border/50 text-foreground hover:border-primary/40"}`}
      >
        🎤 {listening ? "Escuchando…" : "Buscar por voz"}
      </button>

      {q.trim() && (
        <p className="text-muted-foreground font-serif text-base">
          {results.length} resultado{results.length !== 1 ? "s" : ""}
        </p>
      )}

      <div className="space-y-4">
        {results.map((v) => {
          const saved = isFavorite(v.verse_reference);
          return (
            <div key={v.verse_id} className="p-6 rounded-2xl bg-card border border-border/50 space-y-4">
              <p className="text-xl font-serif text-foreground leading-relaxed">"{v.verse_text}"</p>
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/30">
                <span className="font-serif text-lg text-primary font-medium">{v.verse_reference}</span>
                <Button
                  variant={saved ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggle(v)}
                  className="rounded-full h-9 px-5 text-base font-serif gap-1.5"
                >
                  {saved ? <><HeartOff className="h-4 w-4" />Guardado</> : <><Heart className="h-4 w-4" />Guardar</>}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
