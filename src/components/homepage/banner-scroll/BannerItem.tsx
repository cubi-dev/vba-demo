import Image from "next/image";
import React from "react";

interface BannerItemProps {
  bgImageUrl: string;
  companyName: string;
  title: string;
  buttonTitle: string;
  link: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  bgImageUrl,
  companyName,
  title,
  link,
  buttonTitle,
}) => {
  return (
    <div
      className="w-full h-[550px] bg-center bg-no-repeat bg-cover relative flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="absolute bottom-[20%] left-[9.375%]">
        <div className="text-[#067647] text-sm font-medium leading-5 md:mb-10 bg-[#ecfdf3] py-1 px-3 rounded-2xl border border-solid border-[#a9efc5] w-fit">
          {companyName}
        </div>
        <div className=" text-white text-[24px] font-semibold leading-8 md:text-[60px] md:mb-6">
          {title}
        </div>
        <div>
          <a href={link} className="mt-3">
            <button
              type="button"
              className="h-6 md:h-12 px-6 bg-[#079455] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#0a5f2c] transition-colors duration-300 ease-in-out"
            >
              <span className="text-xs md:text-base">{buttonTitle}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-up-right"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
