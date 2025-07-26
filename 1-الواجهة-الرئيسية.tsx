
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const models = [
  {
    id: "media",
    name: "السلطة الإعلامية الذكية",
    description: [
      "كشف المعلومات المضللة.",
      "تحليل الصور والمقالات ومطابقتها مع الحقائق.",
      "إنشاء تقارير معرفية موضوعية."
    ]
  },
  {
    id: "justice",
    name: "العدالة الذكية",
    description: [
      "تحليل الوثائق القانونية مقارنة بالأحكام السابقة.",
      "توصيات قانونية للقضاة أو المحامين.",
      "تحليل الأدلة والصور بسياق قانوني."
    ]
  },
  {
    id: "industry",
    name: "الصناعة الذكية",
    description: [
      "تحليل خطوط الإنتاج وكفاءة الموارد.",
      "تقييم الرسومات التقنية.",
      "توصيات صناعية دقيقة."
    ]
  },
  {
    id: "tech",
    name: "التقنية الذكية",
    description: [
      "تحليل المشاريع التقنية والبرمجية.",
      "اقتراح حلول فعالة وآمنة.",
      "مراقبة الابتكار وربط الموارد."
    ]
  }
];

export default function SmartModelInterface() {
  const [selectedModel, setSelectedModel] = useState("media");

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">النماذج الذكية</h1>
      <Tabs value={selectedModel} onValueChange={setSelectedModel} className="w-full">
        <TabsList className="flex justify-center space-x-2 mb-6">
          {models.map((model) => (
            <TabsTrigger key={model.id} value={model.id} className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-gray-700">
              {model.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {models.map((model) => (
          <TabsContent key={model.id} value={model.id}>
            <Card className="bg-gray-900 rounded-2xl shadow-xl p-6">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {model.description.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Textarea placeholder="أدخل النص للتحليل..." className="bg-gray-800 border border-gray-700 text-white" />
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-500">حلل باستخدام الذكاء الاصطناعي</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
