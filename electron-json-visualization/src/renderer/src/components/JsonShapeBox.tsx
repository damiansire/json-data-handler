import React from 'react'

interface JsonShapeBoxProps {
  data: Record<string, any>
}

const JsonShapeBox: React.FC<JsonShapeBoxProps> = ({ data }) => {
  return (
    <div className="json-box">
      Shape<pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default JsonShapeBox
