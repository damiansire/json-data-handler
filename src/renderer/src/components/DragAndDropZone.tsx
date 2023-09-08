import React from 'react'

interface DragAndDropZoneProps {
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void
}

const DragAndDropZone: React.FC<DragAndDropZoneProps> = ({ handleDrop, handleDragOver }) => {
  return (
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
  )
}

export default DragAndDropZone
