import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'AirTech Pro X1',
    price: 45990,
    power: 2.5,
    area: 25,
    image: '/placeholder.svg',
    features: ['Инверторный компрессор', 'Wi-Fi управление', 'Тихий режим']
  },
  {
    id: 2,
    name: 'CoolMaster Elite',
    price: 62990,
    area: 35,
    power: 3.5,
    image: '/placeholder.svg',
    features: ['Ионизация воздуха', 'Очистка 4 уровня', 'Автоматический режим']
  },
  {
    id: 3,
    name: 'FrostGuard Ultra',
    price: 89990,
    area: 50,
    power: 5.0,
    image: '/placeholder.svg',
    features: ['Премиум класс', 'Энергоэффективность A+++', 'Голосовое управление']
  },
  {
    id: 4,
    name: 'BreezeFlow Compact',
    price: 34990,
    area: 20,
    power: 2.0,
    image: '/placeholder.svg',
    features: ['Компактный дизайн', 'Быстрое охлаждение', 'Экономичный режим']
  }
];

export default function Index() {
  const [area, setArea] = useState([30]);
  const [calculatorResult, setCalculatorResult] = useState<any>(null);

  const calculateAC = () => {
    const roomArea = area[0];
    const requiredPower = (roomArea * 0.1).toFixed(1);
    const recommended = products.filter(p => p.area >= roomArea).sort((a, b) => a.price - b.price)[0];
    
    setCalculatorResult({
      area: roomArea,
      power: requiredPower,
      recommended
    });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="catalog" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор кондиционеров для любых помещений
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="home">Дом</TabsTrigger>
              <TabsTrigger value="office">Офис</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card key={product.id} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-border/40 bg-card/80 backdrop-blur" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-xl bg-muted">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {product.power} кВт
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                        <CardDescription>До {product.area} м²</CardDescription>
                      </div>
                      <div className="space-y-2">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Check" className="h-4 w-4 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border/40">
                        <div className="text-3xl font-bold text-primary mb-4">
                          {product.price.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1 gap-2">
                            <Icon name="ShoppingCart" className="h-4 w-4" />
                            Купить
                          </Button>
                          <Button variant="outline" size="icon">
                            <Icon name="Heart" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Калькулятор подбора</h2>
              <p className="text-xl text-muted-foreground">
                Подберите идеальный кондиционер для вашего помещения
              </p>
            </div>

            <Card className="border-border/40 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" className="h-6 w-6 text-primary" />
                  Расчет мощности кондиционера
                </CardTitle>
                <CardDescription>
                  Введите площадь помещения для автоматического расчета
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="area" className="text-base">Площадь помещения</Label>
                    <span className="text-2xl font-bold text-primary">{area[0]} м²</span>
                  </div>
                  <Slider
                    id="area"
                    min={10}
                    max={100}
                    step={5}
                    value={area}
                    onValueChange={setArea}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10 м²</span>
                    <span>100 м²</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Тип помещения</Label>
                    <div className="grid grid-cols-1 gap-2">
                      <Button variant="outline" className="justify-start">
                        <Icon name="Home" className="h-4 w-4 mr-2" />
                        Квартира
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Этаж</Label>
                    <Input type="number" placeholder="Этаж" defaultValue="5" />
                  </div>
                  <div className="space-y-2">
                    <Label>Окна</Label>
                    <Input type="number" placeholder="Количество окон" defaultValue="2" />
                  </div>
                </div>

                <Button onClick={calculateAC} size="lg" className="w-full gap-2 text-lg">
                  <Icon name="Sparkles" className="h-5 w-5" />
                  Рассчитать
                </Button>

                {calculatorResult && (
                  <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20 space-y-4 animate-fade-in">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Icon name="CheckCircle2" className="h-6 w-6 text-primary" />
                      Результаты расчета
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Площадь помещения</div>
                        <div className="text-2xl font-bold">{calculatorResult.area} м²</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Требуемая мощность</div>
                        <div className="text-2xl font-bold text-primary">{calculatorResult.power} кВт</div>
                      </div>
                    </div>
                    
                    {calculatorResult.recommended && (
                      <div className="mt-6 p-4 bg-card rounded-lg border border-border/40">
                        <div className="text-sm font-medium text-muted-foreground mb-3">Рекомендуем</div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-lg">{calculatorResult.recommended.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {calculatorResult.recommended.power} кВт • До {calculatorResult.recommended.area} м²
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {calculatorResult.recommended.price.toLocaleString('ru-RU')} ₽
                            </div>
                            <Button size="sm" className="mt-2">Подробнее</Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AirTech — лидер на рынке климатического оборудования с 2010 года. Мы предлагаем инновационные решения для создания идеального микроклимата в вашем доме или офисе.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Сертифицированное качество</h3>
                    <p className="text-muted-foreground">Все продукты сертифицированы по международным стандартам</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Wrench" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Профессиональный монтаж</h3>
                    <p className="text-muted-foreground">Опытные специалисты с гарантией на все работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Быстрая доставка</h3>
                    <p className="text-muted-foreground">Доставим и установим в течение 24 часов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-card border border-border/40 rounded-3xl overflow-hidden">
                <img src="/placeholder.svg" alt="About us" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по установке и обслуживанию климатического оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Settings', title: 'Установка', desc: 'Профессиональный монтаж любой сложности' },
              { icon: 'Wrench', title: 'Обслуживание', desc: 'Регулярная чистка и диагностика' },
              { icon: 'Shield', title: 'Гарантия', desc: 'До 5 лет гарантии на оборудование' },
              { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка по всему городу' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи для вас' },
              { icon: 'Percent', title: 'Акции', desc: 'Регулярные скидки и спецпредложения' }
            ].map((service, index) => (
              <Card key={index} className="border-border/40 bg-card/80 backdrop-blur hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/40 bg-card/80 backdrop-blur">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Оставьте заявку и мы перезвоним в течение 5 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Ваш вопрос" />
                  </div>
                  <Button className="w-full gap-2">
                    <Icon name="Send" className="h-4 w-4" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-border/40 bg-card/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Адрес</h3>
                        <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Phone" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Mail" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@airtech.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Wind" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-heading">AirTech</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные решения для вашего комфорта
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Для дома</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для офиса</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Premium класс</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Следите за нами</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 AirTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
