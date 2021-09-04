import { FC, useState, useRef, useEffect } from 'react'
import Header from '../Header'
import TextAreaContainer from '../TextAreaContainer'
import { RootElementContainer } from './styles'
const { remote } = window.require('electron')
const fs = window.require('fs')

const RootElement: FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [textAreaValue, setTextAreaValue] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')
  const [modal, setModal] = useState<boolean>(false)

  const openFile = () => {
    remote.dialog
      .showOpenDialog({
        title: 'Open File',
        buttonLabel: 'Open',
        properties: ['openFile']
      })
      .then(({ filePaths }) => {
        const file = filePaths[0]
        if (file) {
          const data = fs.readFileSync(file, {
            encoding: 'utf-8',
            flag: 'r'
          })
          setTextAreaValue(String(data))
          setFilePath(file)
        }
      })
  }

  const saveFile = () => {
    const filePathIsNotEmpty = filePath !== ''
    if (filePathIsNotEmpty) {
      fs.writeFileSync(filePath, textAreaValue, {
        encoding: 'utf-8'
      })
    }
    textAreaRef.current?.focus()
  }

  const saveFileAs = () => {
    if (textAreaValue) {
      remote.dialog
        .showSaveDialog({
          title: 'Save As',
          buttonLabel: 'Save',
          defaultPath: '*.txt',
          filters: [
            { name: 'Text File (*.txt)', extensions: ['txt'] },
            { name: 'All Files', extensions: ['*'] }
          ]
        })
        .then(({ filePath }) => {
          if (filePath) {
            fs.writeFileSync(filePath, textAreaValue, {
              encoding: 'utf-8'
            })
          }
        })
      textAreaRef.current?.focus()
    }
  }

  const handleKeyUp = (e: any) => {
    const openFileShortcut = e.ctrlKey && e.which === 79
    const saveFileShortcut = e.ctrlKey && e.which === 83

    const filePathIsEmpty = filePath === ''
    const filePathIsNotEmpty = filePath !== ''

    if (openFileShortcut) {
      openFile()
    } else if (saveFileShortcut && filePathIsEmpty) {
      saveFileAs()
    } else if (saveFileShortcut && filePathIsNotEmpty) {
      saveFile()
    }
  }

  useEffect(() => {
    textAreaRef.current?.focus()
  }, [])

  return (
    <RootElementContainer>
      <Header
        openFile={openFile}
        saveFile={saveFile}
        saveFileAs={saveFileAs}
        setModal={setModal}
      />
      <TextAreaContainer
        textAreaRef={textAreaRef}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        handleKeyUp={handleKeyUp}
        modal={modal}
        setModal={setModal}
      />
    </RootElementContainer>
  )
}

export default RootElement
