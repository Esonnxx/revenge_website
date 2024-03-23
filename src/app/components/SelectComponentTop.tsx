// components/ImageGallery.tsx

import React, { useState } from 'react'
import Image from 'next/image'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { setSelectedImage } from '../GlobalRedux/Features/appStates/containerTopSlice'
import type { RootState } from '../GlobalRedux/store'
interface ImageGalleryProps {
  images: string[]
}

const ImageGalleryTopPage: React.FC<ImageGalleryProps> = ({ images }) => {
  const dispatch = useDispatch()
  const selectedImage = useSelector(
    (state: RootState) => state.containerTopState?.selectedImage
  )
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  const galleryStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '75%',
    left: '50%',

    transform: 'translate(-50%, -50%) scale(1.5)',
  }

  const handleImageClick = (index: number) => {
    dispatch(setSelectedImage(images[index]))
    setSelectedImageIndex(index)
    console.log(`Selected Image: ${images[index]}`)
    console.log(selectedImage)
  }

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => {
        const imageContainerStyle: React.CSSProperties = {
          width: '100%',
          cursor: 'pointer',
          border: selectedImageIndex === index ? '1px solid white' : 'none',
          borderRadius: '10px',
          boxSizing: 'border-box',
        }

        return (
          <div
            key={index}
            style={imageContainerStyle}
            onClick={() => handleImageClick(index)}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ImageGalleryTopPage
