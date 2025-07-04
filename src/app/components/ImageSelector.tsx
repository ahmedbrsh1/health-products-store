"use client";

import { useState } from "react";

const ImageSelector: React.FC<{ images: string[] }> = (props) => {
  const [selectedImage, setSelectedImage] = useState<string>(props.images[0]);
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 max-w-24">
        {props.images.length > 1 &&
          props.images.map((image) => (
            <img
              key={image}
              onClick={() => setSelectedImage(image)}
              className="rounded cursor-pointer"
              src={image}
            />
          ))}
      </div>
      <div className="w-full">
        <img src={selectedImage} alt="Product Image" />
      </div>
    </div>
  );
};

export default ImageSelector;
