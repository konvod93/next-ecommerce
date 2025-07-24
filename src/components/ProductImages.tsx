import Image from "next/image";

const ProductImages = () => {
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src="https://images.pexels.com/photos/28997255/pexels-photo-28997255.jpeg"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="">
                <div className="w-1/4 h-32 relative gap-4 mt-8">
                    <Image
                        src="https://images.pexels.com/photos/28997255/pexels-photo-28997255.jpeg"
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md"
                    />
                    <Image
                        src="https://images.pexels.com/photos/28997255/pexels-photo-28997255.jpeg"
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md"
                    />
                    <Image
                        src="https://images.pexels.com/photos/28997255/pexels-photo-28997255.jpeg"
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductImages;