import Image from "next/image";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import prisma from "@/lib/prisma";

export default async function Home() {
  const deals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main>
      <div className="p-5">
        <Image
          src="/banner-home-01.png"
          alt="até 55% de desconto, só esse mês"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto  w-full "
        />
      </div>

      <div className="mt-8 p-5">
        <Categories />
      </div>

      <div className="mt-8 ">
        <p className="mb-3 pl-5 font-bold uppercase"> Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="p-5">
        <Image
          src="/banner-home-02.png"
          alt="até 55% de desconto, só esse mês"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full "
        />
      </div>
    </main>
  );
}
