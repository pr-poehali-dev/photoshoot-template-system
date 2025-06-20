import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search as SearchIcon,
  Filter,
  Calendar,
  MapPin,
  Camera,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const searchResults = [
  {
    id: 1,
    type: "client",
    name: "Анна Петрова",
    email: "anna@email.com",
    phone: "+7 (900) 123-45-67",
    lastBooking: "15.06.2024",
    service: "Портретная съемка",
  },
  {
    id: 2,
    type: "booking",
    client: "Михаил Иванов",
    date: "25.06.2024",
    time: "14:00",
    service: "Свадебная съемка",
    status: "Подтверждено",
  },
  {
    id: 3,
    type: "service",
    name: "Семейная съемка",
    description: "Профессиональная семейная съемка в студии",
    price: "3,500 ₽",
    duration: "2 часа",
  },
  {
    id: 4,
    type: "client",
    name: "Елена Сидорова",
    email: "elena@email.com",
    phone: "+7 (900) 345-67-89",
    lastBooking: "20.06.2024",
    service: "Корпоративная съемка",
  },
];

const Search = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Поиск</h1>
          <p className="text-gray-600 mt-2">
            Найдите клиентов, бронирования и услуги
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Введите имя клиента, услугу или дату..."
                  className="pl-10"
                />
              </div>

              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Тип поиска" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все</SelectItem>
                  <SelectItem value="clients">Клиенты</SelectItem>
                  <SelectItem value="bookings">Бронирования</SelectItem>
                  <SelectItem value="services">Услуги</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>

              <Button>
                <SearchIcon className="h-4 w-4 mr-2" />
                Найти
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">4</p>
                <p className="text-sm text-gray-600">Результатов найдено</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">2</p>
                <p className="text-sm text-gray-600">Клиента</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">1</p>
                <p className="text-sm text-gray-600">Бронирование</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Результаты поиска</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {result.type === "client" && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Camera className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{result.name}</p>
                          <p className="text-sm text-gray-600">
                            {result.email} • {result.phone}
                          </p>
                          <p className="text-sm text-gray-500">
                            Последняя съемка: {result.lastBooking}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{result.service}</Badge>
                    </div>
                  )}

                  {result.type === "booking" && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Бронирование - {result.client}
                          </p>
                          <p className="text-sm text-gray-600">
                            {result.date} в {result.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            {result.service}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {result.status}
                      </Badge>
                    </div>
                  )}

                  {result.type === "service" && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">{result.name}</p>
                          <p className="text-sm text-gray-600">
                            {result.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            Длительность: {result.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-primary">
                          {result.price}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Search;
