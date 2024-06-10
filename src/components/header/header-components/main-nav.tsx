import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function MainNav() {
  return (
    <div className="mr-4 hidden gap-2 w-full md:flex md:justify-between">
      <div>
        <Image
          src="/logo/Logo_VBA_original.svg"
          alt="Logo"
          width={120}
          height={40}
        />
      </div>
      <div>
        <Button variant={"link"} className="font-bold text-lg text-green-600">Trang chủ</Button>
        <Button variant={"link"} className="font-bold text-lg">Đấu giá biển số xe</Button>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Tìm kiếm biển số xe..." />
          <Button type="submit" variant={"green"}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button variant={"green"}>
          <Phone className="h-4 w-4" />
          1900.0555.15
        </Button>
      </div>
    </div>
  );
}
