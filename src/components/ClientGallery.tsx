import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ClientGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9b7e5e8?w=300&h=300&fit=crop",
      client: "Анна Петрова",
      category: "portrait",
      date: "15.06.2024",
      rating: 5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=300&fit=crop",
      client: "Семья Ивановых",
      category: "family",
      date: "18.06.2024",
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=300&h=300&fit=crop",
      client: "Михаил и Елена",
      category: "wedding",
      date: "20.06.2024",
      rating: 4,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      client: "Корпорация МегаПром",
      category: "corporate",
      date: "22.06.2024",
      rating: 5,
    },
  ];

  const categories = [
    { id: "all", name: "Все", count: 24 },
    { id: "portrait", name: "Портреты", count: 8 },
    { id: "family", name: "Семейные", count: 6 },
    { id: "wedding", name: "Свадебные", count: 5 },
    { id: "corporate", name: "Корпоративные", count: 5 },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Images" size={20} />
              <span>Галерея работ</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Input placeholder="Поиск по клиенту..." className="w-64" />
              <Button size="sm">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-1"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={`Работа для ${item.client}`}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Просмотр
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-sm">{item.client}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-600">{item.date}</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className="text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientGallery;
