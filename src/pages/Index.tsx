import Layout from "@/components/Layout";
import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Camera, DollarSign, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { month: "Янв", revenue: 45000 },
  { month: "Фев", revenue: 52000 },
  { month: "Мар", revenue: 48000 },
  { month: "Апр", revenue: 58000 },
  { month: "Май", revenue: 65000 },
  { month: "Июн", revenue: 72000 },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Добро пожаловать!
          </h1>
          <p className="text-gray-600 mt-2">Обзор работы вашей фотостудии</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Доходы за месяц"
            value="72,000 ₽"
            icon={<DollarSign className="h-4 w-4" />}
            trend="+12% к предыдущему месяцу"
            trendUp={true}
          />
          <StatsCard
            title="Съемок проведено"
            value="28"
            icon={<Camera className="h-4 w-4" />}
            trend="+8 к предыдущему месяцу"
            trendUp={true}
          />
          <StatsCard
            title="Активных клиентов"
            value="156"
            icon={<Users className="h-4 w-4" />}
            trend="+23 новых клиента"
            trendUp={true}
          />
          <StatsCard
            title="Бронирований"
            value="12"
            icon={<Calendar className="h-4 w-4" />}
            trend="На следующую неделю"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Доходы по месяцам</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#9b87f5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Недавние бронирования</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    client: "Анна Петрова",
                    date: "15 июня",
                    service: "Портретная съемка",
                  },
                  {
                    client: "Михаил Иванов",
                    date: "18 июня",
                    service: "Семейная съемка",
                  },
                  {
                    client: "Елена Сидорова",
                    date: "20 июня",
                    service: "Свадебная съемка",
                  },
                  {
                    client: "Дмитрий Козлов",
                    date: "22 июня",
                    service: "Корпоративная съемка",
                  },
                ].map((booking, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{booking.client}</p>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                    </div>
                    <div className="text-sm text-gray-500">{booking.date}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
