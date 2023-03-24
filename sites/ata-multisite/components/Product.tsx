import React, { useState } from "react"
import Image from "next/image"

export interface ProductI {
  url: string
  contentTypeAlias: string
  name: string
  productDataSheet: {
    url: string
  }
  productDescription: string
  productGallery: {
    url: string
  }[]
  productInstallationMenu: {
    url: string
  }
  productKeyFeatures: string[]
  productName: string
  productPhoto: {
    url: string
  }
  productVideos: {
    url: string
  }[]
}

interface ProductProps {
  product: ProductI
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.productPhoto.url)

  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">{product.productName}</h1>
      <Image
        src={mainImage}
        alt={product.name}
        width={500}
        height={500}
        className="my-4 mx-auto max-h-[300px] max-w-screen-sm object-contain"
      />
      <div className="grid w-full max-w-max auto-rows-[100px] grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {product.productGallery.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={`Gallery ${index}`}
            width={500}
            height={500}
            onClick={() => handleImageClick(image.url)}
            className="aspect-square h-full w-auto"
          />
        ))}
      </div>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{ __html: product.productDescription }}
      />
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {product.productKeyFeatures.map((feature, index) => (
          <div key={index} className="rounded-lg border border-gray-300 p-2">
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold">Product Data Sheet</h2>
        <a
          href={product.productDataSheet.url}
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </a>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold">Product Installation Manual</h2>
        <a
          href={product.productInstallationMenu.url}
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Download PDF
        </a>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold">Product Videos</h2>
        {product.productVideos.map((video, index) => (
          <div key={index} className="my-2 aspect-video w-full">
            <iframe
              title={`Video ${index}`}
              className="h-full w-full"
              src={video.url.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComponent
