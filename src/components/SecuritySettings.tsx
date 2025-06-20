import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SecuritySettings = () => {
  const securityLogs = [
    {
      id: 1,
      action: "Вход в систему",
      time: "10:30",
      device: "Chrome, Windows",
      status: "success",
    },
    {
      id: 2,
      action: "Изменение пароля",
      time: "09:15",
      device: "Safari, MacOS",
      status: "success",
    },
    {
      id: 3,
      action: "Неудачная попытка входа",
      time: "08:45",
      device: "Firefox, Linux",
      status: "warning",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Shield" size={20} />
            <span>Двухфакторная аутентификация</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="2fa">Включить 2FA</Label>
              <p className="text-sm text-gray-600">
                Дополнительная защита аккаунта
              </p>
            </div>
            <Switch id="2fa" />
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Smartphone" size={16} />
            <span className="text-sm">Приложение: Google Authenticator</span>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              Активно
            </Badge>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="QrCode" size={16} className="mr-2" />
            Показать QR-код
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Activity" size={20} />
            <span>Журнал активности</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {securityLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    name={
                      log.status === "success" ? "CheckCircle" : "AlertTriangle"
                    }
                    size={16}
                    className={
                      log.status === "success"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }
                  />
                  <div>
                    <p className="text-sm font-medium">{log.action}</p>
                    <p className="text-xs text-gray-600">{log.device}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{log.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Settings" size={20} />
            <span>Управление разрешениями</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Доступ к галерее клиентов</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Просмотр финансовых отчетов</Label>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label>Управление бронированиями</Label>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
