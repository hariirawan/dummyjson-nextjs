import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";
import { IProduct } from "@/interfaces/IProduct";

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
      <Sidebar params={params} />
      <ProductList products={data.products} params={params} />
    </main>
  );
}
