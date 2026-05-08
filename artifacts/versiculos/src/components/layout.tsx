import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto px-6 pt-12 pb-24">
      <header className="mb-16 text-center space-y-4">
        <Link href="/" className="inline-block group" data-testid="link-home">
          <h1 className="text-4xl md:text-5xl font-serif text-primary tracking-tight transition-opacity group-hover:opacity-80">
            Versículos para tu Alma
          </h1>
        </Link>
        <p className="text-muted-foreground font-serif italic text-lg max-w-md mx-auto">
          Un refugio de paz en la Palabra
        </p>

        <nav className="flex justify-center gap-6 mt-8 font-serif text-lg">
          <Link href="/" data-testid="link-nav-home">
            <span className={`cursor-pointer transition-colors hover:text-primary ${location === '/' ? 'text-primary border-b border-primary/30' : 'text-muted-foreground'}`}>
              Inicio
            </span>
          </Link>
          <Link href="/categorias" data-testid="link-nav-categories">
            <span className={`cursor-pointer transition-colors hover:text-primary ${location === '/categorias' ? 'text-primary border-b border-primary/30' : 'text-muted-foreground'}`}>
              Categorías
            </span>
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
}
