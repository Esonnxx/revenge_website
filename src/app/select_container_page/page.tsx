'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import ImageGallery from '../components/SelectComponent'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { setSelectedImage } from '../GlobalRedux/Features/appStates/containerSlice'
import type { RootState } from '../GlobalRedux/store'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

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
    backgroundColor: index === 0 ? '#5EABB0' : 'white',
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

const SelectContainerPage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/select_containerTop_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])
  const dispatch = useDispatch()
  const selectedImage = useSelector(
    (state: RootState) => state.containerState?.selectedImage
  )
  const leftValues = [5, 135, 265]
  const images = [
    '/containerA.png',
    '/containerB.png',
    '/containerC.png',
    '/containerD.png',
  ]

  const imageTextMap: Record<string, string> = {
    '/containerA.png': '弧形瓶',
    '/containerB.png': '錐形瓶',
    '/containerC.png': '圓柱瓶',
    '/containerD.png': '六角瓶',
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
            <h1 className="text-2xl mb-4">選擇罐子</h1>
            <h3 className="w-60">
              請仔細地衡量這周情緒球的重量，為祂選擇一個合適的密封罐子
            </h3>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '48%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
            <Image
              src="/emotionBall.png"
              alt="emotionBall"
              layout="fixed"
              width={70}
              height={70}
              objectFit="contain"
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
            }}>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="container"
                layout="fixed"
                width={500}
                height={500}
                objectFit="cover"
              />
            )}
          </div>
          <div
            style={{
              position: 'absolute',
              top: '65%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
            <h1>{selectedImage && imageTextMap[selectedImage]}</h1>
          </div>
          <ImageGallery images={images} />
          <div style={centerStyle('88%')}>
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
export default SelectContainerPage
