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
import './finish_page.css'

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
    backgroundColor:
      index === 0 || index === 1 || index === 2 ? '#5EABB0' : 'white',

    borderRadius: '20px',
  }

  return <div style={lineStyle}></div>
}

const centerStyle = (topValue: string): React.CSSProperties => ({
  position: 'absolute',
  top: topValue,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'flash 1s infinite',
})
const h1Style: React.CSSProperties = {
  animation: 'flash 2s infinite',
}

const FinishPage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    console.log('123' + imgResult)
    if (isClickNextButton) {
      router.push('/home_ceremony')
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
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-14 bg-black opacity-70"></div>

          {leftValues.map((leftValue, index) => (
            <Line key={index} left={leftValue} index={index} />
          ))}

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(2)',
            }}>
            <Image
              src={imgResult}
              alt="emotionBall"
              layout="fixed"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>

          <div style={centerStyle('88%')}>
            <button onClick={handleClickToNextPage} style={h1Style}>
              獲得情緒罐
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default FinishPage
