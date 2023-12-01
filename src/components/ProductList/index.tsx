import { IProduct } from "@/interfaces/IProduct";
import React from "react";
import CardProduct from "../CardProduct";

export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <div className="flex-1 grid grid-cols-4 gap-4 py-4">
      {products.map((val: IProduct, index: number) => {
        return <CardProduct key={index} product={val} />;
      })}
    </div>
  );
}
