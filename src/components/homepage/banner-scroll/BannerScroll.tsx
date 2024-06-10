import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BannerItem from "./BannerItem";

const dummyData = [
  {
    bgImageUrl:
      "https://s3-hfx03.fptcloud.com/vpa-web/photos/e1f9ef1c-3a9a-40a8-a10b-362c32cd5ff8.jpg",
    companyName: "Công ty Đấu giá Hợp danh Việt Nam",
    title: "Đấu giá trực tuyến",
    buttonTitle: "Xem trực tiếp",
    link: "https://dgbs.vpa.com.vn/",
  },
  {
    bgImageUrl:
      "https://s3-hfx03.fptcloud.com/vpa-web/photos/c030fbee-01df-40b4-9821-61a678761a46.jpg",
    companyName: "Công ty Đấu giá Hợp danh Việt Nam",
    title: "Đăng ký đấu giá",
    buttonTitle: "Đăng ký",
    link: "https://dgbs.vpa.com.vn/",
  },
  // Add more items as needed
];

export default function BannerScroll() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {dummyData.map((item, index) => (
          <CarouselItem key={index}>
            <BannerItem
              bgImageUrl={item.bgImageUrl}
              companyName={item.companyName}
              buttonTitle={item.buttonTitle}
              title={item.title}
              link={item.link}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
