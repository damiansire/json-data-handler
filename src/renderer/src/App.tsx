import { useState } from 'react'
import { getJSONShape } from 'json-scan'
import JsonShapeBox from './components/JsonShapeBox'

function App(): JSX.Element {
  const [filePath, setFilePath] = useState('')
  const [jsonFormat, setJsonFormat] = useState(null)

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        try {
          const content = e.target.result
          const jsonData = JSON.parse(content)
          const jsonShape = getJSONShape(jsonData)
          setJsonFormat(jsonShape)
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
      {!jsonFormat && (
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
          ></div>
        </div>
      )}
      {filePath ? <p>Ruta del archivo: {filePath}</p> : null}
      {jsonFormat ? (
        <div>
          <div>
            <h2>Formato del json</h2>
            <div style={{ display: 'flex' }}>
              {jsonFormat.map((x, index) => (
                <div key={index}>
                  <JsonShapeBox data={x}></JsonShapeBox>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
