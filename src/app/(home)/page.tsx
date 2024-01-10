"use client";
import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="p-5">
      <div>
        <Image
          src="/banner-home-01.png"
          alt="até 55% de desconto, só esse mês"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="mt-8">
        <Categories />
      </div>
    </main>
  );
}
