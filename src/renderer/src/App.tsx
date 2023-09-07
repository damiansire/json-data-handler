import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useState } from 'react'

function App(): JSX.Element {
  const [filePath, setFilePath] = useState('')

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      const path = URL.createObjectURL(file)
      setFilePath(path)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div className="container">
      <Versions></Versions>
      <h1 style={{ textAlign: 'center' }}>Analiza tu json</h1>
      <svg className="hero-logo" viewBox="0 0 900 300">
        <use xlinkHref={`${icons}#electron`} />
      </svg>
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
        </div>
      </div>
    </div>
  )
}

export default App
