import React from 'react'

interface CustomButtonProps {
  onClick: () => void
  buttonText: string
  widthValue: number
  backgroundColor?: string
  textColor?: string
  opacityValue?: number
}
const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  buttonText,
  widthValue,
  backgroundColor = 'purple',
  textColor = 'white',
  opacityValue = 1,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { widthValue } + '%',
        padding: '15px',
        borderRadius: '20px',
        outline: 'none',
        color: textColor,
        fontWeight: 'bold',
        background: backgroundColor,
        opacity: opacityValue,
      }}>
      {buttonText}
    </button>
  )
}
export default CustomButton
