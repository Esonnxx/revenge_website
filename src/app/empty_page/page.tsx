'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import ImageGallery from '../components/SelectComponent'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { setSelectedImage } from '../GlobalRedux/Features/appStates/containerTopSlice'
import type { RootState } from '../GlobalRedux/store'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ImageGalleryTopPage from '../components/SelectComponentTop'

interface LineProps {
  left: number
  index: number
}
const Line: React.FC<LineProps> = ({ left, index }) => {
  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2.5%',
    left: left,
    marginLeft: '8px',
    width: '30%',
    height: '8px',
    backgroundColor: index === 0 || index === 1 ? '#5EABB0' : 'white',

    borderRadius: '20px',
  }

  return <div style={lineStyle}></div>
}

const centerStyle = (topValue: string): React.CSSProperties => ({
  position: 'absolute',
  top: topValue,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
})

const EmptyPage: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/tombstone_page')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const dispatch = useDispatch()
  const selectedImage = useSelector(
    (state: RootState) => state.containerTopState?.selectedImage
  )
  const selectedContainerImage = useSelector(
    (state: RootState) => state.containerState?.selectedImage
  )

  return (
    <main>
      <div className="relative">
        <div className="w-screen h-screen relative">
          <Image
            src="/ballpageBg.gif"
            alt="Homepage"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  )
}
export default EmptyPage
