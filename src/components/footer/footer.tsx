import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="space-y-4 col-span-2">
          {/* <img src="/placeholder.svg" alt="Logo" className="h-15 w-15" /> */}
          <Image
            src="/logo/Logo_VBA_white.svg"
            alt="Logo"
            width={185}
            height={63}
          />
          <h2 className="text-2xl font-semibold">
            Công ty Đấu giá Hợp danh Việt Nam
          </h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              {/* Icon địa điểm */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" x2="5" y1="12" y2="12" />
                <line x1="19" x2="22" y1="12" y2="12" />
                <line x1="12" x2="12" y1="2" y2="5" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <circle cx="12" cy="12" r="7" />
              </svg>
              <span>
                Trụ sở chính: L4-05 tầng 4 tòa nhà N02 - TNL Plaza Goldseason,
                số 47 Nguyễn Tuân, phường Thanh Xuân Trung, quận Thanh Xuân,
                thành phố Hà Nội.
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Logo điện thoại */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Hotline: 1900.0555.15</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Logo Mail */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <span>Về đấu giá biển số: dgbs@vpa.com.vn</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Logo Mail */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <span>Về đấu giá tài sản: dgts@vpa.com.vn</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* Logo Mail */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <span>Liên hệ hợp tác: info@vpa.com.vn</span>
            </div>
            <p>Đại diện: Lâm Thị Mai Anh - Chức vụ: Giám Đốc</p>
            <p>
              Giấy chứng nhận ĐKKD: 41/TP-DKKD do Sở Tư pháp Hà Nội cấp ngày
              21/01/2019
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-xl font-semibold">Theo dõi chúng tôi trên</h3>
          <div className="flex space-x-4">
            {/* Icon facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            {/* Icon zalo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
          </div>
          <Image
            src="/logo/logo-gov.png"
            alt="Đã đăng ký Bộ Công Thương"
            width={150}
            height={30}
          />
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Chính sách</h4>
            <p>Chính sách bảo vệ dữ liệu cá nhân</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 flex items-center justify-between text-xs border-t border-gray-700">
        <p className="max-w-[700px]">
          Trang thông tin điện tử đấu giá trực tuyến vpa.com.vn đã được Sở Tư
          pháp thành phố Hà Nội phê duyệt đủ điều kiện thực hiện hình thức đấu
          giá trực tuyến theo Quyết định số 226/QĐ-STP ngày 16/3/2023
        </p>
        <p>Bản quyền thuộc về VPA ©2023</p>
      </div>
    </footer>
  );
}
