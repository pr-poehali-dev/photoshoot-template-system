import Layout from "@/components/Layout";
import ImageProcessor from "@/components/ImageProcessor";

const ImageProcessing = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Обработка изображений
          </h1>
          <p className="text-gray-600 mt-2">
            Профессиональная ретушь и обработка фотографий
          </p>
        </div>
        <ImageProcessor />
      </div>
    </Layout>
  );
};

export default ImageProcessing;
