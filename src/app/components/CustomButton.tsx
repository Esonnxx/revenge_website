import React from 'react'

interface CustomButtonProps {
  onClick: () => void
  buttonText: string
  widthValue: number
}
const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  buttonText,
  widthValue,
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
        color: 'white',
        fontWeight: 'bold',
        background: 'purple',
      }}>
      {buttonText}
    </button>
  )
}
export default CustomButton
