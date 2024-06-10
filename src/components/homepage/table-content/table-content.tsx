import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { columns } from "./table/table-announcements/components/columns";
import { announcementSchema } from "./table/table-announcements/data/schema";
import { z } from "zod";
import { TableAnnouncements } from "./table/table-announcements/components/table-announcements";
import demoData from "./table/table-announcements/data/announcements.js";
export const metadata: Metadata = {
  title: "Home Page",
  description: "Trang chủ VBA",
};

export default function TableContent() {
  const announcement = z.array(announcementSchema).parse(demoData);

  return (
    <div>
      <p className="text-[#067647] font-bold mb-6">Tài sản đấu giá</p>
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <p className="text-4xl font-bold">Đấu giá biển số xe Ô tô</p>
        <Button variant="green">
          Xem toàn bộ biển số
          <MoveUpRight className="h-4 w-4" />
        </Button>
      </div>
      <Tabs defaultValue="announcementsList" className="w-full">
        <TabsList className="flex items-center justify-start flex-wrap h-auto space-y-1">
          <TabsTrigger value="announcementsList">Danh sách công bố</TabsTrigger>
          <TabsTrigger value="officialList">Danh sách chính thức</TabsTrigger>
          <TabsTrigger value="resultList">Kết quả đấu giá</TabsTrigger>
        </TabsList>
        <TabsContent value="announcementsList">
          <TableAnnouncements data={announcement} columns={columns} />
        </TabsContent>
        <TabsContent value="officialList">Danh sách chính thức</TabsContent>
        <TabsContent value="resultList">Kết quả đấu giá</TabsContent>
      </Tabs>
    </div>
  );
}
