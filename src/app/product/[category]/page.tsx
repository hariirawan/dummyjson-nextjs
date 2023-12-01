import CardProduct from "@/components/CardProduct";
import Sidebar from "@/components/Sidebar";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import Link from "next/link";

async function getData(params?: any) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${params?.category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: any) {
  const data: {
    products: IProduct[];
    total: number;
    limit: number;
    skip: number;
  } = await getData(params);

  return (
    <main className=" max-w-5xl mx-auto flex flex-row">
      <Sidebar />
      <div className="flex-1 grid grid-cols-4 gap-4 py-4">
        {data.products.map((val: IProduct, index: number) => {
          return <CardProduct key={index} product={val} />;
        })}
      </div>
    </main>
  );
}
