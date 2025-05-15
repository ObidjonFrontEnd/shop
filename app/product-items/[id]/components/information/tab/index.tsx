'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductItem } from '@/app/fillter/components/cards'

interface Props {
  productData: ProductItem
}

const TabInfo = ({ productData }: Props) => {
  return (
    <div className="w-full  mx-auto px-4">
      <Tabs defaultValue="specs" className="w-full">
        <TabsList className=" p-0">
          <TabsTrigger
            value="specs"
            className="text-sm font-semibold px-4 py-2 border-b-2 data-[state=active]:border-black data-[state=active]:text-black border-transparent text-gray-600"
          >
            <span className="uppercase tracking-wide">Telfon xususiyatlari</span>
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="text-sm font-semibold px-4 py-2 border-b-2 data-[state=active]:border-black data-[state=active]:text-black border-transparent text-gray-600"
          >
            <span className="uppercase tracking-wide">Mijozlarni fikrlari</span>
          </TabsTrigger>
        </TabsList>


        <TabsContent value="specs" className="mt-4">
          <div className="text-sm  overflow-hidden">
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Brend</span>
              <span className="font-medium text-gray-800">{productData.product?.name?.split(' ')[0] || '—'}</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Modeli</span>
              <span className="font-medium text-gray-800">{productData.product?.name || '—'}</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Narxi</span>
              <span className="font-medium text-gray-800">{productData.product?.price} USD</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Nasiya</span>
              <span className="font-medium text-gray-800">{productData.product?.nasiya}</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Rangi</span>
              <span className="font-medium text-gray-800">{productData.color?.name}</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Reyting</span>
              <span className="font-medium text-gray-800">{productData.product?.rating}/5</span>
            </div>
            {/* Доп. заглушки — их нет в productData, но нужны для визуала как на скрине */}
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">CIM kartalar soni</span>
              <span className="font-medium text-gray-800">2</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">O‘lchamlari</span>
              <span className="font-medium text-gray-800">75,09x155,11x8,28</span>
            </div>
            <div className="flex justify-between px-4 py-2 border-b">
              <span className="text-gray-500">Tezkor xotira</span>
              <span className="font-medium text-gray-800">6 GB</span>
            </div>
            <div className="flex justify-between px-4 py-2">
              <span className="text-gray-500">Ichki xotira</span>
              <span className="font-medium text-gray-800">128 GB</span>
            </div>
          </div>
        </TabsContent>


        <TabsContent value="reviews" className="mt-4">
          <div className="text-sm text-gray-500 italic border p-4 rounded-md">
            Hozircha mijozlar fikrlari mavjud emas.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TabInfo
