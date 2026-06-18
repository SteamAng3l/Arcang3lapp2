import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, HeartOff } from "lucide-react";
import { getCategories, getAllVersesForCategory, type VerseResponse } from "@/lib/data";
import { useFavorites } from "@/hooks/use-favorites";

const CATEGORIES = getCategories();

export default function Categories() {
  const [verses, setVerses] = useState<VerseResponse[]>([]);
  const [activeLabel, setActiveLabel] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleCategoryClick = (categorySlug: string, label: string) => {
    setVerses(getAllVersesForCategory(categorySlug));
    setActiveLabel(label);
    setDialogOpen(true);
  };

  const toggleFavorite = (verse: VerseResponse) => {
    if (isFavorite(verse.verse_reference)) {
      removeFavorite(verse.verse_reference);
    } else {
      addFavorite(verse);
    }
  };

  return (
    <div className="w-full flex flex-col animate-in fade-in duration-700">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-serif text-[#8B7500]">Temas de Consuelo</h2>
        <p className="text-muted-foreground font-serif text-xl leading-relaxed">
          Elige un tema y verás todos los versículos disponibles para esa necesidad.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.category}
            onClick={() => handleCategoryClick(cat.category, cat.label)}
            className="text-left group relative overflow-hidden bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-sm"
            data-testid={`button-category-${cat.category}`}
          >
            <div className="flex justify-between items-center gap-3">
              <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {cat.label}
              </h3>
              <span className="text-base font-medium text-muted-foreground bg-background px-4 py-1.5 rounded-full border border-border/50 whitespace-nowrap">
                {cat.verse_count} versículos
              </span>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl bg-background border-primary/20 sm:rounded-3xl p-0 overflow-hidden flex flex-col max-h-[85vh]">
          <DialogHeader className="px-8 pt-8 pb-4 border-b border-border/50">
            <DialogTitle className="font-serif text-2xl text-primary">{activeLabel}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 min-h-0">
            <div className="px-8 py-6 space-y-6">
              {verses.map((verse) => {
                const saved = isFavorite(verse.verse_reference);
                return (
                  <div
                    key={verse.verse_id}
                    className="p-6 rounded-2xl bg-card border border-border/50 space-y-4"
                  >
                    <p className="text-xl font-serif text-foreground leading-relaxed">
                      "{verse.verse_text}"
                    </p>
                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/30">
                      <span className="font-serif text-lg text-primary font-medium">
                        {verse.verse_reference}
                      </span>
                      <Button
                        variant={saved ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleFavorite(verse)}
                        className="rounded-full h-9 px-5 text-base font-serif gap-1.5"
                      >
                        {saved ? (
                          <><HeartOff className="h-4 w-4" />Guardado</>
                        ) : (
                          <><Heart className="h-4 w-4" />Guardar</>
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
