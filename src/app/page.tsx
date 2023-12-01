import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { IProduct } from "@/interfaces/IProduct";

async function getData(params?: any) {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: {
    products: IProduct[];
    total: number;
    limit: number;
    skip: number;
  } = await getData();

  return (
    <main className=" max-w-5xl mx-auto flex flex-row">
      <Sidebar />
      <ProductList products={data.products} />
    </main>
  );
}
