import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { products } from './MainSections';

export default function CalculatorSection() {
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
  );
}
