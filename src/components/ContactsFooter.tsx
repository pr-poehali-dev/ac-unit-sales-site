import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ContactsFooter() {
  return (
    <>
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
    </>
  );
}
