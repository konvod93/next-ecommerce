import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../lib/wixClientServer";
import { products } from "@wix/stores";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit }: { categoryId: string; limit?: number }) => {

    const wixClient = await wixClientServer();
    const res = await wixClient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || PRODUCT_PER_PAGE).find();
    
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {res.items.map((product: products.Product) => (
                <Link 
                href={"/"+product.slug}
                key={product._id} 
                className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                >
                    <div className="relative w-full h-80">
                        <Image
                            src={product.media?.mainMedia?.image?.url || "/product.png"}
                            alt=""
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                        />
                        {product.media?.items && (
                        <Image
                            src={product.media?.items[1]?.image?.url || "/product.png"}
                            alt=""
                            fill
                            sizes="25vw"
                            className="absolute object-cover rounded-md"
                        />
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">
                            {product.priceData?.price?.toLocaleString("en-US", {
                                style: "currency",
                                currency: product.priceData?.currency || "USD",
                            }) ?? "N/A"}
                        </span>
                    </div>
                    <div className="tex-sm text-gray-500">My description</div>
                    <button className="rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
                </Link>
            ))}
        </div>

    );
};

export default ProductList;