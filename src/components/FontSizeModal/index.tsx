import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreState } from '../../store'
import { setFontSize } from '../../store/reducers/fontSize'
import { ModalHolder, ModalInput } from './style'
import OutsideClickHandler from 'react-outside-click-handler'

interface FontSizeModalProps {
  modal: boolean
  setModal: (value: boolean) => void
}

const FontSizeModal: FC<FontSizeModalProps> = props => {
  const { modal, setModal } = props
  const dispatch = useDispatch()
  const fontSize = useSelector((state: StoreState) => state.fontSize)

  const handleModalInputChange = (fontSize: number): void => {
    dispatch(setFontSize(fontSize))
  }

  const hideModal = () => {
    setModal(false)
  }

  if (modal) {
    return (
      <ModalHolder>
        <OutsideClickHandler onOutsideClick={hideModal}>
          <ModalInput
            type={'number'}
            min={16}
            max={30}
            autoFocus
            value={fontSize}
            onChange={({ target }) => {
              handleModalInputChange(target.valueAsNumber)
            }}
          />
        </OutsideClickHandler>
      </ModalHolder>
    )
  } else {
    return null
  }
}

export default FontSizeModal
