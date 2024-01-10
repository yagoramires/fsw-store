import React from "react";

import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={"/mouse.png"}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[90px] w-auto object-contain"
        />
        <div className="absolute left-3 top-3">
          {product.discountPercentage > 0 && (
            <Badge className="flex gap-[2px] px-2 py-[2px]">
              <ArrowDownIcon size={14} /> {product.discountPercentage}%
            </Badge>
          )}
        </div>
      </div>
      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-semibold">
                {product.totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <p className="text-xs font-thin line-through opacity-75">
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </>
          )}
          {product.discountPercentage === 0 && (
            <>
              <p className="font-semibold">
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
