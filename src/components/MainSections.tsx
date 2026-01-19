import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function MainSections() {
  return (
    <>
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
    </>
  );
}

export { products };
