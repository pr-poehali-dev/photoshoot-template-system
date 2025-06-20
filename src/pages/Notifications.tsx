import Layout from "@/components/Layout";
import NotificationCenter from "@/components/NotificationCenter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Notifications = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Уведомления</h1>
          <p className="text-gray-600 mt-2">
            Центр уведомлений и настройки оповещений
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NotificationCenter />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Settings" size={20} />
                  <span>Настройки уведомлений</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Новые бронирования</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Платежи</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Напоминания</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Отзывы клиентов</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Email уведомления</Label>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
