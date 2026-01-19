import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-24 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">Технологии будущего уже здесь</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              Климат-контроль
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                нового поколения
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Инновационные системы кондиционирования с AI-управлением и максимальной энергоэффективностью
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                <Icon name="ShoppingCart" className="h-5 w-5" />
                Купить сейчас
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Icon name="Calculator" className="h-5 w-5" />
                Подобрать модель
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Установок</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">A+++</div>
                <div className="text-sm text-muted-foreground">Класс энергии</div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative bg-card border border-border/40 rounded-3xl p-8 backdrop-blur">
              <img src="/placeholder.svg" alt="Modern AC Unit" className="w-full h-auto rounded-xl" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl border border-primary/20">
                <div className="flex items-center gap-3">
                  <Icon name="Zap" className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">-70%</div>
                    <div className="text-xs opacity-90">Экономия энергии</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
