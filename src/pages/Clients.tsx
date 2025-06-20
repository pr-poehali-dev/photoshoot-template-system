import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Mail, Calendar, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clientsData = [
  {
    id: 1,
    name: "Анна Петрова",
    email: "anna@email.com",
    phone: "+7 (900) 123-45-67",
    lastBooking: "15.06.2024",
    totalBookings: 5,
    totalSpent: "12,000 ₽",
    status: "VIP",
  },
  {
    id: 2,
    name: "Михаил Иванов",
    email: "mikhail@email.com",
    phone: "+7 (900) 234-56-78",
    lastBooking: "18.06.2024",
    totalBookings: 3,
    totalSpent: "7,200 ₽",
    status: "Активный",
  },
  {
    id: 3,
    name: "Елена Сидорова",
    email: "elena@email.com",
    phone: "+7 (900) 345-67-89",
    lastBooking: "20.06.2024",
    totalBookings: 2,
    totalSpent: "4,800 ₽",
    status: "Новый",
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    email: "dmitry@email.com",
    phone: "+7 (900) 456-78-90",
    lastBooking: "22.06.2024",
    totalBookings: 7,
    totalSpent: "16,800 ₽",
    status: "VIP",
  },
];

const Clients = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Клиенты</h1>
            <p className="text-gray-600 mt-2">Управление базой клиентов</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Добавить клиента
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">156</p>
                <p className="text-sm text-gray-600">Всего клиентов</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">23</p>
                <p className="text-sm text-gray-600">Новых за месяц</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">89</p>
                <p className="text-sm text-gray-600">Активных клиентов</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">12</p>
                <p className="text-sm text-gray-600">VIP клиентов</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>База клиентов</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Поиск клиентов..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Контакты</TableHead>
                  <TableHead>Последняя съемка</TableHead>
                  <TableHead>Всего съемок</TableHead>
                  <TableHead>Потрачено</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientsData.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{client.name}</p>
                        <p className="text-sm text-gray-600">{client.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{client.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell>{client.lastBooking}</TableCell>
                    <TableCell>{client.totalBookings}</TableCell>
                    <TableCell>{client.totalSpent}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          client.status === "VIP" ? "default" : "secondary"
                        }
                        className={
                          client.status === "VIP"
                            ? "bg-purple-100 text-purple-800"
                            : ""
                        }
                      >
                        {client.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Clients;
