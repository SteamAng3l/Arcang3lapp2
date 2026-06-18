import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, RefreshCw, Send, Heart, HeartOff } from "lucide-react";
import { getVerseForProblem, getRandomVerseLocal, type VerseResponse } from "@/lib/data";
import { useFavorites } from "@/hooks/use-favorites";
import { VerseShareButtons } from "@/components/verse-share-buttons";
import { getHistory, addToHistory, getAllHistory } from "@/hooks/use-verse-history";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [activeVerse, setActiveVerse] = useState<VerseResponse | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    setActiveVerse(null);
    setIsPending(true);
    setTimeout(() => {
      const excluded = getAllHistory();
      const data = getVerseForProblem(problem.trim(), excluded);
      if (data) {
        setActiveVerse(data);
        addToHistory(data.detected_category, data.verse_id);
      }
      setIsPending(false);
    }, 300);
  };

  const handleRandom = () => {
    setActiveVerse(null);
    setIsPending(true);
    setTimeout(() => {
      const excludedIds = getHistory("random");
      const data = getRandomVerseLocal(excludedIds);
      setActiveVerse(data);
      addToHistory("random", data.verse_id);
      setIsPending(false);
    }, 300);
  };

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
      <section className="bg-card rounded-2xl p-7 md:p-10 shadow-sm border border-border/50">
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="space-y-3 text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif leading-snug text-[#8B7500]">
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
            className="min-h-[140px] resize-none bg-background/50 border-border focus-visible:ring-primary/30 text-xl p-5 font-serif leading-relaxed"
            data-testid="input-problem"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              type="submit"
              disabled={isPending || !problem.trim()}
              className="w-full sm:w-auto font-serif text-xl h-14 px-10 rounded-full"
              data-testid="button-submit-problem"
            >
              {isPending ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin opacity-70" />
              ) : (
                <Send className="mr-2 h-5 w-5 opacity-70" />
              )}
              Buscar versículo
            </Button>

            <span className="text-muted-foreground/50 hidden sm:inline text-xl">o</span>

            <Button
              type="button"
              variant="outline"
              onClick={handleRandom}
              disabled={isPending}
              className="w-full sm:w-auto font-serif text-xl h-14 px-10 rounded-full bg-transparent border-primary/20 hover:bg-primary/5 hover:text-primary"
              data-testid="button-random-verse"
            >
              {isPending ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin opacity-70" />
              ) : (
                <BookOpen className="mr-2 h-5 w-5 opacity-70" />
              )}
              Versículo aleatorio
            </Button>
          </div>
        </form>
      </section>
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
      {activeVerse && !isPending && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="text-center mb-8">
            <span
              className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-base font-medium tracking-wide uppercase mb-4"
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

          <Card className="bg-gradient-to-b from-card to-background border-primary/20 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <CardContent className="p-8 md:p-12 text-center">
              <p
                className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed"
                data-testid="text-verse"
              >
                "{activeVerse.verse_text}"
              </p>
              <div className="mt-8 pt-8 border-t border-border/50 flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
                  <span
                    className="font-serif text-2xl text-primary font-medium"
                    data-testid="text-verse-reference"
                  >
                    {activeVerse.verse_reference}
                  </span>
                  <Button
                    variant={saved ? "default" : "outline"}
                    size="lg"
                    onClick={toggleFavorite}
                    className="rounded-full h-12 px-7 text-lg font-serif gap-2"
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
                <VerseShareButtons verse={activeVerse} />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
