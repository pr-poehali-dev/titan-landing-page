import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://cdn.poehali.dev/projects/e85e2cff-bf42-4678-90ce-ced9e0664983/files/ece4005c-4e13-4438-8719-1687a4650c52.jpg"
            alt="Офисное пространство"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Сдавайте коммерческие объекты на{" "}
                <span className="text-primary">30% быстрее</span> с готовыми
                потолочными модулями «Титан»
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Индустриальное решение для Fit-out и офисов класса А. Заменяет
                три бригады одной. Полная заводская готовность: достали из
                коробки — защелкнули — готово.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Скачать технический каталог и BIM-модели
                <Icon name="Download" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/e85e2cff-bf42-4678-90ce-ced9e0664983/files/83970dc4-eded-4447-a367-edc509f3558e.jpg"
                alt="Модульная система Титан"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
            Почему традиционный монтаж потолков{" "}
            <span className="text-destructive">«съедает»</span> вашу прибыль?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:border-primary transition-colors">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-destructive" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">
                Война подрядчиков
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Вентиляционщики смонтировали каналы, но перекрыли доступ
                электрикам. Потолочники пришли и сказали, что каркас вешать
                некуда. Итог: простой, переделки, срыв сроков сдачи этажа.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary transition-colors">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="UserX" size={32} className="text-destructive" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">
                Кадровый голод
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Найти квалифицированных монтажников сложно и дорого. Обычные
                рабочие путают схемы, оставляют щели и портят дорогие
                материалы.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary transition-colors">
              <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="AlertTriangle" size={32} className="text-destructive" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">
                Эстетический кошмар
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Диффузоры стоят криво, лючки не совпадают с плиткой, решетки
                шумят. Заказчик не принимает работу, вы теряете деньги на
                устранении дефектов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Модульная система «Титан»:{" "}
              <span className="text-primary">Мы перенесли стройку в цех</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы убрали человеческий фактор со стройплощадки. Вы получаете
              префабрикованный модуль, собранный роботами на заводе «Титан».
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="FileText" size={40} className="text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">
                1. Проектирование
              </h3>
              <p className="text-muted-foreground">
                Вы загружаете наши BIM-семейства в проект
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Truck" size={40} className="text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">
                2. Доставка
              </h3>
              <p className="text-muted-foreground">
                Модули приходят на объект полностью собранными
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Zap" size={40} className="text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">
                3. Монтаж
              </h3>
              <p className="text-muted-foreground">
                Щелчок через Click-Light-Air — система готова
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
            Преимущества
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:border-primary transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Timer" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Скорость монтажа ×5
                  </h3>
                  <p className="text-muted-foreground">
                    Не нужно крутить саморезы и мотать скотч. Один этаж
                    монтируется за 2 дня силами двух человек, а не бригадой из
                    десяти.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-primary transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Weight" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Снижение нагрузки на перекрытия
                  </h3>
                  <p className="text-muted-foreground">
                    Композитные материалы «Титан» на 40% легче металлических
                    аналогов. Экономия на подвесной системе.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-primary transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Одно окно ответственности
                  </h3>
                  <p className="text-muted-foreground">
                    Больше никаких «это не мы, это вентиляционщики». Мы
                    отвечаем за весь потолочный пирог. Гарантия на всю сборку
                    от одного завода.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:border-primary transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Volume2" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Идеальная акустика
                  </h3>
                  <p className="text-muted-foreground">
                    Пластиковый корпус гасит вибрации и шум воздуха лучше
                    металла. Ваши клиенты получат тихий офис без гула.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">
            Цифры не врут
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-primary mb-2">
                15
              </div>
              <p className="text-muted-foreground">лет опыта в производстве</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-primary mb-2">
                ISO 9001
              </div>
              <p className="text-muted-foreground">сертификация производства</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-primary mb-2">
                Г1
              </div>
              <p className="text-muted-foreground">группа горючести (МЧС РФ)</p>
            </div>
          </div>

          <Card className="p-8 bg-muted/30 border-l-4 border-l-secondary">
            <div className="flex items-start space-x-4">
              <Icon name="Quote" size={40} className="text-secondary flex-shrink-0" />
              <div>
                <p className="text-lg italic mb-4">
                  "Скептически относился к идее модулей, боялся, что не
                  совпадут размеры по факту. Но на объекте "Сити-Плаза"
                  рискнули. Итог: мы закрыли потолки на 4000 м² на 2 недели
                  раньше графика, сэкономив на ФОТ монтажников около 1.5 млн
                  рублей."
                </p>
                <div className="font-semibold">Андрей В.</div>
                <div className="text-sm text-muted-foreground">
                  Руководитель проекта, GenContractor Development
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                А если стены на объекте кривые и модуль не влезает?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Мы предусмотрели это. Каждый модуль оснащен телескопическими
                краевыми вставками (до 50 мм), которые компенсируют
                строительные погрешности без подрезки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Пластик — это надежно? Не пожелтеет?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Мы используем конструкционный композит с УФ-стабилизаторами,
                аналогичный тому, что применяется в автопроме. Он не желтеет,
                не ржавеет и служит более 25 лет.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                Как обслуживать коммуникации за потолком?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Любой модуль можно отщелкнуть и снять (или откинуть на петлях)
                за 1 минуту, обеспечивая полный доступ к запотолочному
                пространству. Лючки ревизии больше не нужны.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Перестаньте переплачивать за простой рабочих
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Получите расчет окупаемости системы «Титан» для вашего объекта и
            библиотеку BIM-моделей прямо сейчас
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="text-lg py-6"
              />
              <Input
                placeholder="Телефон / Мессенджер"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="text-lg py-6"
              />
              <Input
                placeholder="Название компании"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
                className="text-lg py-6"
              />
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Получить каталог и цены
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <p className="text-sm text-muted-foreground">
                PDF-презентация придет в мессенджер через 30 секунд. Спамить не
                будем.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Титан. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
