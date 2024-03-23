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
import { setImgResult } from '../GlobalRedux/Features/appStates/imgResultSlice'

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

const SelectContainerTopPage: React.FC = () => {
  const dispatch = useDispatch()
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
    dispatch(setImgResult(imgResult))
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/finish_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])

  const selectedImage = useSelector(
    (state: RootState) => state.containerTopState?.selectedImage
  )
  const selectedContainerImage = useSelector(
    (state: RootState) => state.containerState?.selectedImage
  )
  const [imgResult, setImgRes] = useState<string>(selectedContainerImage || '')

  useEffect(() => {
    // 在 useEffect 中更新 imgResult
    if (
      selectedImage === '/rock.png' &&
      selectedContainerImage === '/containerA.png'
    ) {
      setImgRes('/rockA.png')
      console.log('123' + imgResult)
    } else if (
      selectedImage === '/tape.png' &&
      selectedContainerImage === '/containerA.png'
    ) {
      setImgRes('/tapeA.png')
    } else if (
      selectedImage === '/rock.png' &&
      selectedContainerImage === '/containerB.png'
    ) {
      setImgRes('/rockB.png')
    } else if (
      selectedImage === '/tape.png' &&
      selectedContainerImage === '/containerB.png'
    ) {
      setImgRes('/tapeB.png')
    } else if (
      selectedImage === '/rock.png' &&
      selectedContainerImage === '/containerC.png'
    ) {
      setImgRes('/rockC.png')
    } else if (
      selectedImage === '/tape.png' &&
      selectedContainerImage === '/containerC.png'
    ) {
      setImgRes('/tapeC.png')
    } else if (
      selectedImage === '/rock.png' &&
      selectedContainerImage === '/containerD.png'
    ) {
      setImgRes('/rockD.png')
    } else if (
      selectedImage === '/tape.png' &&
      selectedContainerImage === '/containerD.png'
    ) {
      setImgRes('/tapeD.png')
    }
  }, [selectedImage, selectedContainerImage])

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
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}>
            <h1 className="text-2xl mb-4">選擇封口</h1>
            <h3 className="w-60">
              想像你會怎麼處裡這段情緒，選擇一種方式為你的情緒罐封口
            </h3>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '45%',
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

          <div
            style={{
              position: 'absolute',
              top: '65%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '10%',
              width: '20%',
              textAlign: 'center',
            }}>
            <h1>{selectedImage && imageTextMap[selectedImage]}</h1>
          </div>
          <ImageGalleryTopPage images={images} />
          <div style={centerStyle('90%')}>
            <CustomButton
              onClick={handleClickToNextPage}
              widthValue={30}
              buttonText="下一步"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default SelectContainerTopPage
