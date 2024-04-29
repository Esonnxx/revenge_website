'use client'
import Image from 'next/image'
import CustomButton from '../components/CustomButton'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../GlobalRedux/store'
import { useRouter } from 'next/navigation'

import { useEffect, useState, useRef } from 'react'
interface DelayedTextHookProps {
  initialText: {
    title: string
    description: string
  }
  delay: number
}
const useDelayedText = ({ initialText, delay }: DelayedTextHookProps) => {
  const [text, setText] = useState(initialText)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleDelayedText = () => {
      setText({
        title: '報仇儀式已完成',
        description: '收取三個善根',
      })
    }

    timeoutIdRef.current = setTimeout(handleDelayedText, delay)

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [delay])

  return text
}

const Ballpage: React.FC = () => {
  const [isClickNextButton, setClickNextButton] = useState<boolean>(false)
  const router = useRouter()
  const delayedText = useDelayedText({
    initialText: {
      title: '符咒效力已生效',
      description: '',
    },
    delay: 4000,
  })

  const handleNextButton = () => {
    console.log('clicked next btn')
    setClickNextButton(true)
    console.log()
  }

  useEffect(() => {
    if (isClickNextButton) {
      router.push('/produceB_page')
    }
    setClickNextButton(false)
  }, [isClickNextButton, router])

  return (
    <main>
      <div className="relative">
        <div className="w-screen h-screen relative">
          <Image
            src="/Home_page.gif"
            alt="Homepage"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-white">
            <div
              style={{ left: '30%', top: '60%' }}
              className="absolute text-center">
              <p className="text-xl">{delayedText.title}</p>
              <p className="text-xl">{delayedText.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Ballpage
