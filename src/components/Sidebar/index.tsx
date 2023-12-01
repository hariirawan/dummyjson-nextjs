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
    <div className="w-[200px]  mr-2 space-y-2">
      <div className="bg-gray-800 p-2 mt-4 text-sm">
        <div className="mb-2">Sort By</div>
        <div className="space-y-2">
          <div>Ascending</div>
          <div>Descending</div>
        </div>
      </div>

      <div className="bg-gray-800 p-2 text-sm">
        <div className="mb-2">Filter By Category</div>
        <div>
          {data.map((val, key) => {
            return (
              <Link key={key} href={`/product/${val}`}>
                <div key={key} className="text-white mb-2">
                  {val}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
