import Image from "next/image";
import Link from "next/link";

const ProduvtList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                         />
                    <Image
                        src="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                         />
                </div>
            </Link>
        </div>
    );
};

export default ProduvtList;