"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-5">
        <Image
          src="/banner-home-01.png"
          alt="até 55% de desconto, só esse mês"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </main>
  );
}
