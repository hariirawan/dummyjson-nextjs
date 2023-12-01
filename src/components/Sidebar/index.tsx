import Link from "next/link";

async function getCategories(params?: any) {
  const res = await fetch("https://dummyjson.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Sidebar = async () => {
  const data: string[] = await getCategories();

  return (
    <div className="w-[200px] space-y-2 mr-2">
      <div className="mb-2">Filter By Category</div>
      {data.map((val, key) => {
        return (
          <Link key={key} href={`/product/${val}`}>
            <div key={key} className="bg-white p-1 text-black mb-2">
              {val}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
