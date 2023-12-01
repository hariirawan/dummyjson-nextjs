import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { IProduct } from "@/interfaces/IProduct";
import { pages } from "next/dist/build/templates/app-page";

async function getData(params?: any) {
  const res = await fetch(`https://dummyjson.com/products`);

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
      <ProductList products={data.products} params={params} isSort />
    </main>
  );
}
