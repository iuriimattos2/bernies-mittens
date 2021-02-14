import React from 'react'

type Props = {
  content: object
}

export default function PrintObject({content}: Props): JSX.Element {
  const formattedContent: string = JSON.stringify(content, null, 2)
  return <pre>{formattedContent}</pre>
}

