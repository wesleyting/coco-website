"use client";

export default function Fruits() {
  return (
    <div>
      <img
        src="/lemon.png"
        alt=""
        className="absolute top-4 md:top-6 left-[-72px] md:left-0 w-28 sm:w-38 md:w-45 lg:w-52 xl:w-62 xl:left-[160px] xl:top-0 z-0 pointer-events-none"
      />

      <img
        src="/pineapple.png"
        alt=""
        className="absolute bottom-[40px] md:bottom-[28px] left-[-80px] w-32 sm:w-38 md:w-48 lg:w-52 xl:w-68 xl:bottom-[0px] xl:left-[-92px] lg:bottom-[6px] z-0 pointer-events-none"
      />

      <img
        src="/strawberry.png"
        alt=""
        className="absolute top-[-32px] right-[-32px] md:right-0 w-24 sm:w-30 md:w-32 lg:w-38 xl:w-42 xl:right-[72px] xl:top-[-68px]  z-0 pointer-events-none"
      />
    </div>
  );
}
