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

const centerStyle = (topValue: string): React.CSSProperties => ({
  position: 'absolute',
  top: topValue,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
})

const GuidePage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const handleClickToNextPage = () => {
    setClickNextButton(true)
  }
  const router = useRouter()
  useEffect(() => {
    if (isClickNextButton) {
      router.push('/flash_page')
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

          {/* 新增白色的框框 */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
              height: '50%',
              padding: '30px',
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // 陰影
              zIndex: 20,

              textAlign: 'center',
            }}>
            <h1 style={{ color: 'purple' }}>指引</h1>
            <p
              style={{
                color: 'black',
                marginTop: '40px',
              }}>
              超度靈堂將會引領我們做最終的了結，獻上集齊的七個祭品，讓我們準備好平靜的心，往前踏步尋找對物來的想像，讓過去一切灰飛煙滅吧！
            </p>
            <div style={centerStyle('88%')}>
              <CustomButton
                widthValue={50}
                onClick={handleClickToNextPage}
                buttonText="開始"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default GuidePage
