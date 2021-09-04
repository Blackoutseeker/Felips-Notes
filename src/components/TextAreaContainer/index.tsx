import { FC, RefObject } from 'react'
import FontSizeModal from '../FontSizeModal'
import TextArea from '../TextArea'
import Container from './style'

interface TextAreaContainerProps {
  textAreaRef: RefObject<HTMLTextAreaElement>
  textAreaValue: string
  setTextAreaValue: (value: string) => void
  handleKeyUp: (e: any) => void
  modal: boolean
  setModal: (value: boolean) => void
}

const TextAreaContainer: FC<TextAreaContainerProps> = props => {
  const {
    textAreaRef,
    textAreaValue,
    setTextAreaValue,
    handleKeyUp,
    modal,
    setModal
  } = props

  return (
    <Container>
      <TextArea
        handleKeyUp={handleKeyUp}
        textAreaRef={textAreaRef}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
      <FontSizeModal modal={modal} setModal={setModal} />
    </Container>
  )
}

export default TextAreaContainer
