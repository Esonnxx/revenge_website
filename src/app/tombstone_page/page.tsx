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

const centerStyle = (topValue: string): React.CSSProperties => ({
  position: 'absolute',
  top: topValue,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
})

const TombstonePage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/finish_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])
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
            src="/TombstonePageBG.png"
            alt="Homepage"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60%',
            width: '100%',
            paddingLeft: '80px',
          }}>
          <Image
            src="/Tombstone.png"
            alt="container"
            layout="fixed"
            width={250}
            height={250}
            objectFit="contain"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '75%',
            width: '100%',
            paddingLeft: '191px',
            writingMode: 'vertical-lr',
            color: 'black',
          }}>
          <p className="text-2xl tracking-widest">留下一段話吧</p>
        </div>
      </div>
    </main>
  )
}
export default TombstonePage
