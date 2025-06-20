import Layout from "@/components/Layout";
import ClientGallery from "@/components/ClientGallery";

const Gallery = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Галерея</h1>
          <p className="text-gray-600 mt-2">
            Портфолио работ и клиентские галереи
          </p>
        </div>
        <ClientGallery />
      </div>
    </Layout>
  );
};

export default Gallery;
