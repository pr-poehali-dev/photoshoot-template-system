import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Phone, Mail } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
          <p className="text-gray-600 mt-2">
            Управление профилем и настройками
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Информация о профиле</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" defaultValue="Иван" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" defaultValue="Дубин" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="ivan.dubin1998@mail.ru"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" defaultValue="+7 (905) 276-09-65" />
                </div>

                <div>
                  <Label htmlFor="address">Адрес студии</Label>
                  <Input
                    id="address"
                    defaultValue="Волгоград, ул. Ленина, 133"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Описание</Label>
                  <Textarea
                    id="description"
                    defaultValue="Профессиональная студия с 3-летним опытом. Специализируемся на создании карточек для маркетплейсов: Wildberries, Ozon и т.д."
                  />
                </div>

                <Button className="w-full">Сохранить изменения</Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Настройки безопасности</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Двухфакторная аутентификация</p>
                    <p className="text-sm text-gray-600">
                      Дополнительная защита аккаунта
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Активна</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Последний вход</p>
                    <p className="text-sm text-gray-600">
                      Сегодня в 10:30 с устройства Chrome
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Управление безопасностью
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Статус подписки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <Badge className="bg-green-100 text-green-800">Премиум</Badge>
                  <p className="text-sm text-gray-600">
                    Действует до 07.08.2025
                  </p>
                  <Button variant="outline" className="w-full">
                    Продлить подписку
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+7 (905) 276-09-65</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">ivan.dubin1998@mail.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Волгоград, ул. Ленина, 133</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Camera className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">156 довольных клиентов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
