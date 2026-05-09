import { useState } from "react";
import { useGetVerse, useGetRandomVerse } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, RefreshCw, Send, Heart, HeartOff } from "lucide-react";
import type { VerseResponse } from "@workspace/api-client-react/src/generated/api.schemas";
import { useFavorites } from "@/hooks/use-favorites";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [activeVerse, setActiveVerse] = useState<VerseResponse | null>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const getVerseMutation = useGetVerse();
  const getRandomVerseQuery = useGetRandomVerse({
    query: {
      enabled: false,
      queryKey: ["randomVerseClick"],
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    setActiveVerse(null);
    getVerseMutation.mutate(
      { data: { problem: problem.trim() } },
      { onSuccess: (data) => setActiveVerse(data) }
    );
  };

  const handleRandom = async () => {
    setActiveVerse(null);
    const result = await getRandomVerseQuery.refetch();
    if (result.data) setActiveVerse(result.data);
  };

  const isPending =
    getVerseMutation.isPending || getRandomVerseQuery.isFetching;

  const toggleFavorite = () => {
    if (!activeVerse) return;
    if (isFavorite(activeVerse.verse_reference)) {
      removeFavorite(activeVerse.verse_reference);
    } else {
      addFavorite(activeVerse);
    }
  };

  const saved = activeVerse ? isFavorite(activeVerse.verse_reference) : false;

  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in duration-700">
      {/* ── Input card ───────────────────────────────────────────────────── */}
      <section className="bg-card rounded-2xl p-7 md:p-10 shadow-sm border border-border/60">
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="space-y-3 text-center mb-6">
            {/* Purple heading */}
            <h2 className="text-2xl md:text-3xl font-serif text-primary leading-snug">
              Soy Arcángel, estoy aquí para ayudarte a encontrar paz en la Palabra.
            </h2>
            <p className="text-muted-foreground text-xl font-serif">
              ¿Qué hay en tu corazón hoy?
            </p>
          </div>

          <Textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Escribe cómo te sientes, tus preocupaciones o tus miedos..."
            className="min-h-[140px] resize-none bg-secondary/50 border-border focus-visible:ring-primary/40 text-xl p-5 font-serif leading-relaxed"
            data-testid="input-problem"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Main CTA – Gold button */}
            <Button
              type="submit"
              disabled={isPending || !problem.trim()}
              className="btn-gold w-full sm:w-auto font-serif text-xl h-14 px-10 rounded-full border"
              data-testid="button-submit-problem"
            >
              {getVerseMutation.isPending ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin opacity-70" />
              ) : (
                <Send className="mr-2 h-5 w-5 opacity-70" />
              )}
              Buscar versículo
            </Button>

            <span className="text-muted-foreground/50 hidden sm:inline text-xl">o</span>

            {/* Secondary – outline with purple border */}
            <Button
              type="button"
              variant="outline"
              onClick={handleRandom}
              disabled={isPending}
              className="w-full sm:w-auto font-serif text-xl h-14 px-10 rounded-full bg-transparent border-primary/30 hover:bg-primary/5 hover:text-primary text-primary/70"
              data-testid="button-random-verse"
            >
              {getRandomVerseQuery.isFetching ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin opacity-70" />
              ) : (
                <BookOpen className="mr-2 h-5 w-5 opacity-70" />
              )}
              Versículo aleatorio
            </Button>
          </div>
        </form>
      </section>

      {/* ── Loading skeleton ─────────────────────────────────────────────── */}
      {isPending && !activeVerse && (
        <div className="flex flex-col items-center justify-center p-12 space-y-6 animate-pulse">
          <Skeleton className="h-5 w-36 bg-primary/10 rounded-full" />
          <Skeleton className="h-7 w-full max-w-md bg-primary/10" />
          <div className="space-y-3 w-full max-w-lg mt-4">
            <Skeleton className="h-9 w-full bg-primary/10" />
            <Skeleton className="h-9 w-5/6 bg-primary/10" />
            <Skeleton className="h-9 w-4/6 bg-primary/10" />
          </div>
        </div>
      )}

      {/* ── Verse result ─────────────────────────────────────────────────── */}
      {activeVerse && !isPending && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Category badge + message */}
          <div className="text-center mb-8">
            <span
              className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-base font-medium tracking-wide uppercase mb-4 border border-primary/20"
              data-testid="text-detected-category"
            >
              {activeVerse.detected_category}
            </span>
            <p
              className="text-xl text-muted-foreground font-serif italic max-w-lg mx-auto leading-relaxed"
              data-testid="text-message"
            >
              {activeVerse.message}
            </p>
          </div>

          {/* Verse card – white with gold top stripe */}
          <Card className="bg-card border-border/60 shadow-md relative overflow-hidden">
            {/* Gold top stripe */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
            <CardContent className="p-8 md:p-12 text-center">
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed"
                data-testid="text-verse"
              >
                "{activeVerse.verse_text}"
              </p>
              <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-5">
                {/* Verse reference in gold */}
                <span
                  className="font-serif text-2xl font-semibold"
                  style={{ color: "hsl(46 65% 40%)" }}
                  data-testid="text-verse-reference"
                >
                  {activeVerse.verse_reference}
                </span>
                {/* Save button */}
                <Button
                  variant={saved ? "default" : "outline"}
                  size="lg"
                  onClick={toggleFavorite}
                  className={`rounded-full h-12 px-7 text-lg font-serif gap-2 ${
                    saved
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-primary/30 text-primary hover:bg-primary/5"
                  }`}
                  data-testid="button-save-favorite"
                >
                  {saved ? (
                    <>
                      <HeartOff className="h-5 w-5" />
                      Guardado
                    </>
                  ) : (
                    <>
                      <Heart className="h-5 w-5" />
                      Guardar en favoritos
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
