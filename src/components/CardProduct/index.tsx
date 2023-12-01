import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import Link from "next/link";

interface ICardProduct {
  product: IProduct;
}

export default function CardProduct({ product }: ICardProduct) {
  return (
    <Link href={`/detail/${product.id}`}>
      <div className="bg-slate-500 h-full">
        <div className="relative">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover w-full h-[200px]"
          />
          <div className="bg-orange-400 text-black absolute bottom-2 left-0 px-4">
            Stock : {product.stock}
          </div>
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex-1">
            <h2 className="text-lg mt-4">{product.title}</h2>
            <h6>
              ${product.price} -{" "}
              <span className="text-xs">{product.brand}</span>
            </h6>
          </div>
          <p className="text-xs">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}
