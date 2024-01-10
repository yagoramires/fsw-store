import React from "react";

import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";

import CategoryItem from "./CategoryItem";

export default async function Categories() {
  const categories = await prisma.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories?.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
