'use client'

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/32508907/pexels-photo-32508907.jpeg',

    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/33175235/pexels-photo-33175235.jpeg',
        
    },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/31685539/pexels-photo-31685539.jpeg',
        
    },
    {
        id: 4,
        url: 'https://images.pexels.com/photos/33210292/pexels-photo-33210292.jpeg',
        
    }
];

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8 cursor-pointer">
                {images.map((img, i) =>  (
                    <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={() => setIndex(i)}>
                    <Image
                        src={img.url}
                        alt=""
                        fill
                        sizes="30vw"
                        className="object-cover rounded-md"
                    />                    
                </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;