import Layout from "@/components/Layout";
import SecuritySettings from "@/components/SecuritySettings";

const Security = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Безопасность</h1>
          <p className="text-gray-600 mt-2">
            Настройки безопасности и управление доступом
          </p>
        </div>
        <SecuritySettings />
      </div>
    </Layout>
  );
};

export default Security;
