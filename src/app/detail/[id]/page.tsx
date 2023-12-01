import Slider from "@/components/Slider";

async function getData(params?: any) {
  const res = await fetch(`https://dummyjson.com/products/${params?.id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }: any) => {
  const data = await getData(params);

  return (
    <main className=" max-w-5xl mx-auto ">
      <Slider images={data.images} />
      <div className="flex space-x-4 items-center mt-4">
        <h1 className="text-xl">{data.title}</h1>
        <div className="bg-orange-400 rounded-full p-2 py-0">
          {data.category}
        </div>
      </div>
      <div className="text-2xl">${data.price}</div>
      <p>{data.description}</p>
      <div>Stock : {data.stock}</div>
    </main>
  );
};

export default Page;
