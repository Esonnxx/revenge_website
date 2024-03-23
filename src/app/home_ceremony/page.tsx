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
import imgResultRe from '../GlobalRedux/Features/appStates/imgResultSlice'
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

const CeremonyHome: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/guide_page')
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
  const imgResult = useSelector(
    (state: RootState) => state.imgResultState?.selectedImage
  )

  const leftValues = [5, 135, 265]
  const images = ['/rock.png', '/tape.png']

  const imageTextMap: Record<string, string> = {
    '/rock.png': '岩石',
    '/tape.png': '密封膠帶',
  }
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

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '70%',
              transform: 'translate(-50%, -50%) ',
              width: '60%',
              height: '50%',
              zIndex: 10,
            }}>
            <Image
              src={imgResult}
              alt="emotionBall"
              layout="fixed"
              width={350}
              height={300}
              objectFit="contain"
            />
          </div>

          <div style={centerStyle('88%')}>
            <CustomButton
              widthValue={40}
              onClick={handleClickToNextPage}
              buttonText="舉行超度儀式"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default CeremonyHome
