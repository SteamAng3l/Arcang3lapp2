import { useState, useRef } from "react";
import { useGetVerse, useGetRandomVerse } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, RefreshCw, Send } from "lucide-react";
import type { VerseResponse } from "@workspace/api-client-react/src/generated/api.schemas";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [activeVerse, setActiveVerse] = useState<VerseResponse | null>(null);

  const getVerseMutation = useGetVerse();
  const getRandomVerseQuery = useGetRandomVerse({ 
    query: { 
      enabled: false,
      queryKey: ["randomVerseClick"]
    } 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;
    
    setActiveVerse(null);
    getVerseMutation.mutate({ data: { problem: problem.trim() } }, {
      onSuccess: (data) => {
        setActiveVerse(data);
      }
    });
  };

  const handleRandom = async () => {
    setActiveVerse(null);
    const result = await getRandomVerseQuery.refetch();
    if (result.data) {
      setActiveVerse(result.data);
    }
  };

  const isPending = getVerseMutation.isPending || getRandomVerseQuery.isFetching;

  return (
    <div className="w-full flex flex-col gap-12 animate-in fade-in duration-700">
      
      <section className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 text-center mb-6">
            <h2 className="text-2xl font-serif text-foreground">¿Qué hay en tu corazón hoy?</h2>
            <p className="text-muted-foreground">
              Escribe cómo te sientes, tus preocupaciones o tus miedos.
            </p>
          </div>
          
          <Textarea 
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Me siento..."
            className="min-h-[120px] resize-none bg-background/50 border-border focus-visible:ring-primary/30 text-lg p-4 font-serif"
            data-testid="input-problem"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              type="submit" 
              disabled={isPending || !problem.trim()} 
              className="w-full sm:w-auto font-serif text-lg h-12 px-8 rounded-full"
              data-testid="button-submit-problem"
            >
              {getVerseMutation.isPending ? (
                <RefreshCw className="mr-2 h-5 w-5 animate-spin opacity-70" />
              ) : (
                <Send className="mr-2 h-5 w-5 opacity-70" />
              )}
              Buscar versículo
            </Button>

            <span className="text-muted-foreground/50 hidden sm:inline">o</span>

            <Button 
              type="button" 
              variant="outline" 
              onClick={handleRandom}
              disabled={isPending}
              className="w-full sm:w-auto font-serif text-lg h-12 px-8 rounded-full bg-transparent border-primary/20 hover:bg-primary/5 hover:text-primary"
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

      {/* Loading State */}
      {isPending && !activeVerse && (
        <div className="flex flex-col items-center justify-center p-12 space-y-6 animate-pulse">
          <Skeleton className="h-4 w-32 bg-primary/10 rounded-full" />
          <Skeleton className="h-6 w-full max-w-md bg-primary/10" />
          <div className="space-y-3 w-full max-w-lg mt-4">
            <Skeleton className="h-8 w-full bg-primary/10" />
            <Skeleton className="h-8 w-5/6 bg-primary/10" />
            <Skeleton className="h-8 w-4/6 bg-primary/10" />
          </div>
        </div>
      )}

      {/* Response State */}
      {activeVerse && !isPending && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-4" data-testid="text-detected-category">
              {activeVerse.detected_category}
            </span>
            <p className="text-lg text-muted-foreground font-serif italic max-w-lg mx-auto" data-testid="text-message">
              {activeVerse.message}
            </p>
          </div>

          <Card className="bg-gradient-to-b from-card to-background border-primary/20 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed md:leading-relaxed" data-testid="text-verse">
                "{activeVerse.verse_text}"
              </p>
              <div className="mt-8 pt-8 border-t border-border/50">
                <span className="font-serif text-xl text-primary font-medium" data-testid="text-verse-reference">
                  {activeVerse.verse_reference}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

    </div>
  );
}
