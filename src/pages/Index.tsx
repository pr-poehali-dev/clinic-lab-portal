import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="h-8 w-8 text-[#2563EB]" />
              <h1 className="text-xl font-semibold text-gray-900">МедЦентр</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#2563EB] transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-700 hover:text-[#2563EB] transition-colors">Цены</a>
              <a href="#contacts" className="text-gray-700 hover:text-[#2563EB] transition-colors">Контакты</a>
            </nav>
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#059669] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Медицинский центр с процедурным кабинетом
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Профессиональное взятие анализов и сотрудничество с ведущими лабораториями для точной диагностики
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#2563EB] hover:bg-gray-100">
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2563EB]">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d8ba2347-45e9-4536-81f1-15739279dce5.jpg" 
                alt="Медицинский центр" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600">Полный спектр медицинских услуг в одном месте</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "TestTube",
                title: "Лабораторная диагностика",
                description: "Широкий спектр анализов крови, мочи, биохимических исследований",
                features: ["Быстрые результаты", "Точность анализов", "Сертифицированная лаборатория"]
              },
              {
                icon: "Stethoscope",
                title: "Процедурный кабинет",
                description: "Профессиональное взятие биоматериала опытными медсестрами",
                features: ["Стерильные условия", "Безболезненно", "Опытный персонал"]
              },
              {
                icon: "FileText",
                title: "Консультации",
                description: "Расшифровка результатов и рекомендации специалистов",
                features: ["Онлайн консультации", "Быстрая обратная связь", "Персональный подход"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#2563EB] rounded-lg">
                      <Icon name={service.icon} className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="h-4 w-4 text-[#059669]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Цены на услуги</h3>
            <p className="text-xl text-gray-600">Прозрачные тарифы без скрытых комиссий</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый пакет",
                price: "1,500",
                description: "Основные анализы",
                features: [
                  "Общий анализ крови",
                  "Общий анализ мочи",
                  "Биохимический анализ",
                  "Консультация"
                ],
                popular: false
              },
              {
                title: "Расширенный пакет",
                price: "3,500",
                description: "Полное обследование",
                features: [
                  "Все анализы базового пакета",
                  "Гормональный профиль",
                  "Маркеры воспаления",
                  "Витамины и микроэлементы",
                  "Детальная консультация"
                ],
                popular: true
              },
              {
                title: "Премиум пакет",
                price: "6,000",
                description: "Максимальная диагностика",
                features: [
                  "Все анализы расширенного пакета",
                  "Онкомаркеры",
                  "Аллергопанель",
                  "Генетические исследования",
                  "Персональные рекомендации"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-[#2563EB] border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2563EB]">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#2563EB]">{plan.price}</span>
                    <span className="text-gray-500 ml-2">₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" className="h-4 w-4 text-[#059669]" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'bg-[#2563EB] hover:bg-[#1d4ed8]' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="MapPin" className="h-5 w-5 text-[#2563EB]" />
                    <span>Наш адрес</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-[#059669] mt-0.5" />
                    <div>
                      <p className="font-semibold">Часы работы:</p>
                      <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                      <p className="text-gray-600">Сб-Вс: 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-[#2563EB]" />
                    <div>
                      <p className="font-semibold">+7 (495) 123-45-67</p>
                      <p className="text-gray-600">Круглосуточно</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-[#059669]" />
                    <div>
                      <p className="font-semibold">info@medcentr.ru</p>
                      <p className="text-gray-600">Ответим в течение часа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-[#2563EB] mt-0.5" />
                    <div>
                      <p className="font-semibold">г. Москва, ул. Медицинская, 15</p>
                      <p className="text-gray-600">Метро "Медицинская", 3 мин пешком</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на прием</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Услуга
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563EB]">
                        <option>Выберите услугу</option>
                        <option>Лабораторная диагностика</option>
                        <option>Процедурный кабинет</option>
                        <option>Консультация</option>
                      </select>
                    </div>
                    
                    <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8]">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" className="h-6 w-6 text-[#2563EB]" />
              <span className="text-lg font-semibold">МедЦентр</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 МедЦентр. Все права защищены.</p>
              <p className="text-gray-400">Лицензия №123456</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;