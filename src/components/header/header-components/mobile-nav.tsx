import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mr-4 gap-2 w-full flex justify-between md:hidden">
      <div>
        <Image
          src="/logo/Logo_VBA_original.svg"
          alt="Logo"
          width={120}
          height={40}
        />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        {/* This button will trigger open the mobile sheet menu */}
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div className="flex flex-col items-start">
            <Button
              variant={"link"}
              className="font-bold text-lg text-green-600"
            >
              Trang chủ
            </Button>
            <Button variant={"link"} className="font-bold text-lg">
              Đấu giá biển số xe
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
