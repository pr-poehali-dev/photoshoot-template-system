import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      type: "booking",
      title: "Новое бронирование",
      message: "Анна Петрова забронировала портретную съемку на 25.06",
      time: "5 мин назад",
      unread: true,
    },
    {
      id: 2,
      type: "payment",
      title: "Поступил платеж",
      message: "Получен платеж 3,500 ₽ от Михаила Иванова",
      time: "1 час назад",
      unread: true,
    },
    {
      id: 3,
      type: "reminder",
      title: "Напоминание о съемке",
      message: "Завтра в 14:00 семейная съемка с Сидоровыми",
      time: "2 часа назад",
      unread: false,
    },
    {
      id: 4,
      type: "review",
      title: "Новый отзыв",
      message: "Елена оставила 5-звездочный отзыв",
      time: "3 часа назад",
      unread: false,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return "Calendar";
      case "payment":
        return "CreditCard";
      case "reminder":
        return "Bell";
      case "review":
        return "Star";
      default:
        return "Info";
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "booking":
        return "text-blue-600";
      case "payment":
        return "text-green-600";
      case "reminder":
        return "text-orange-600";
      case "review":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="h-[600px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Icon name="Bell" size={20} />
          <span>Уведомления</span>
          <Badge className="bg-pink-500">
            {notifications.filter((n) => n.unread).length}
          </Badge>
        </CardTitle>
        <Button variant="ghost" size="sm">
          <Icon name="Check" size={16} className="mr-2" />
          Отметить все
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[500px]">
          <div className="space-y-1 p-6">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                  notification.unread
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : ""
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-100`}>
                    <Icon
                      name={getNotificationIcon(notification.type)}
                      size={16}
                      className={getNotificationColor(notification.type)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">
                        {notification.title}
                      </p>
                      <span className="text-xs text-gray-500">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationCenter;
