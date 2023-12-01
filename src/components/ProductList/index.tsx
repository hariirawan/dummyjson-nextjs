import { IProduct } from "@/interfaces/IProduct";
import React from "react";
import CardProduct from "../CardProduct";
import Link from "next/link";

export default function ProductList({
  products,
  params,
  isSort,
}: {
  products: IProduct[];
  params?: any;
  isSort?: boolean;
}) {
  let sortProducts = isSort
    ? products.sort((productA, productB) =>
        params?.sort === "asc"
          ? productA.price - productB.price
          : productB.price - productA.price
      )
    : products;

  console.log(sortProducts);

  return (
    <div className="flex-1 py-4 ">
      <div className="flex flex-row space-x-2">
        <div>Sort By :</div>
        <Link
          href={params?.category ? `/product/${params?.category}/asc` : "/asc"}
          className={`p-1 px-3 rounded-sm ${
            params?.sort === "asc" ? "bg-orange-500" : "bg-gray-800"
          }`}
        >
          Ascending
        </Link>
        <Link
          href={
            params?.category ? `/product/${params?.category}/desc` : "/desc"
          }
          className={` p-1 px-3 rounded-sm ${
            params?.sort === "desc" ? "bg-orange-500" : "bg-gray-800"
          }`}
        >
          Descending
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 py-4">
        {sortProducts.map((val: IProduct, index: number) => {
          return <CardProduct key={index} product={val} />;
        })}
      </div>
    </div>
  );
}
