import React from 'react'

import './TextArea.css'

function TextArea(props) {
  return (
    <textarea className='text-area' rows={5} value={props.value}>
        
    </textarea>
  )
}

export default TextArea