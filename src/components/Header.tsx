import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wind" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AirTech
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex gap-2">
            <Icon name="Phone" className="h-4 w-4" />
            Позвонить
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
