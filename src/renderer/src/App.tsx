import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useState } from 'react'

function App(): JSX.Element {
  const [filePath, setFilePath] = useState('')
  const [fileContent, setFileContent] = useState(null)

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        setFileContent(content)

        try {
          const jsonData = JSON.parse(content)
          // jsonData ahora contiene el objeto JSON del archivo
          console.log(jsonData)
        } catch (error) {
          console.error('Error al analizar el archivo JSON', error)
        }
      }

      reader.readAsText(file)
      setFilePath(file.path) // Esto establecerá la ruta del archivo real en Electron
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div className="container">
      {/* ... tu JSX existente */}
      <div>
        <h1>Arrastra un archivo aquí:</h1>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            width: '300px',
            height: '300px',
            border: '2px dashed #ccc'
          }}
        >
          {filePath ? <p>Ruta del archivo: {filePath}</p> : null}
          {fileContent ? (
            <div>
              <h2>Contenido del archivo JSON:</h2>
              <pre>{fileContent}</pre>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
