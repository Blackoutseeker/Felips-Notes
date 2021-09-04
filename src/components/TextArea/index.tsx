import { FC, RefObject } from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../store'
import { TextAreaInput } from './style'

interface TextAreaProps {
  textAreaRef: RefObject<HTMLTextAreaElement>
  textAreaValue: string
  setTextAreaValue: (value: string) => void
  handleKeyUp: (e: any) => void
}

const TextArea: FC<TextAreaProps> = props => {
  const { textAreaRef, textAreaValue, setTextAreaValue, handleKeyUp } = props
  const fontSize = useSelector((state: StoreState) => state.fontSize)

  const handleTextAreaValueChange = (value: string) => {
    setTextAreaValue(value)
  }

  return (
    <TextAreaInput
      fontSize={fontSize}
      spellCheck={false}
      ref={textAreaRef}
      value={textAreaValue}
      onChange={({ target }) => handleTextAreaValueChange(target.value)}
      onKeyUp={handleKeyUp}
    />
  )
}

export default TextArea
