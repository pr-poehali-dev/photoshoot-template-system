import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const ImageProcessor = () => {
  const [brightness, setBrightness] = useState([50]);
  const [contrast, setContrast] = useState([50]);
  const [saturation, setSaturation] = useState([50]);

  const filters = [
    {
      name: "Оригинал",
      preview:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
    },
    {
      name: "Винтаж",
      preview:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&sepia=80",
    },
    {
      name: "Ч/Б",
      preview:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&grayscale=100",
    },
    {
      name: "Теплый",
      preview:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop&hue=30",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Image" size={20} />
            <span>Предварительный просмотр</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium mb-2 block">Оригинал</Label>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Оригинальное изображение"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
            <div>
              <Label className="text-sm font-medium mb-2 block">
                После обработки
              </Label>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Обработанное изображение"
                className="w-full rounded-lg shadow-sm"
                style={{
                  filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%)`,
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="adjustments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="adjustments">Коррекция</TabsTrigger>
          <TabsTrigger value="filters">Фильтры</TabsTrigger>
          <TabsTrigger value="export">Экспорт</TabsTrigger>
        </TabsList>

        <TabsContent value="adjustments">
          <Card>
            <CardHeader>
              <CardTitle>Настройки изображения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Яркость: {brightness[0]}%</Label>
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  max={200}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Контрастность: {contrast[0]}%</Label>
                <Slider
                  value={contrast}
                  onValueChange={setContrast}
                  max={200}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Насыщенность: {saturation[0]}%</Label>
                <Slider
                  value={saturation}
                  onValueChange={setSaturation}
                  max={200}
                  step={1}
                  className="mt-2"
                />
              </div>
              <Button
                onClick={() => {
                  setBrightness([50]);
                  setContrast([50]);
                  setSaturation([50]);
                }}
              >
                Сбросить настройки
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="filters">
          <Card>
            <CardHeader>
              <CardTitle>Художественные фильтры</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filters.map((filter) => (
                  <div key={filter.name} className="cursor-pointer group">
                    <img
                      src={filter.preview}
                      alt={filter.name}
                      className="w-full rounded-lg transition-transform group-hover:scale-105"
                    />
                    <p className="text-sm text-center mt-2 font-medium">
                      {filter.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export">
          <Card>
            <CardHeader>
              <CardTitle>Экспорт изображения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="flex items-center justify-center space-x-2">
                  <Icon name="Download" size={16} />
                  <span>JPG (высокое качество)</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <Icon name="Download" size={16} />
                  <span>PNG (без сжатия)</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <Icon name="Share" size={16} />
                  <span>Поделиться</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImageProcessor;
