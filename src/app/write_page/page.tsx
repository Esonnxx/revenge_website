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

const WritePage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/empty_page')
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
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}>
            <h3 className="w-60">
              我將祭品奉上，這段旅程將結束，好與壞悲傷與快樂都將封存。
            </h3>
          </div>
          <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white bg-opacity-80 rounded-lg">
            <input
              type="text"
              className="w-50 p-3 rounded-md outline-none"
              placeholder="留下一段話吧"
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(2)',
            }}>
            <Image
              src={imgResult}
              alt="emotionBall"
              layout="fixed"
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}></div>

          <div style={centerStyle('88%')}>
            <CustomButton
              onClick={handleClickToNextPage}
              widthValue={30}
              buttonText="完成"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default WritePage
