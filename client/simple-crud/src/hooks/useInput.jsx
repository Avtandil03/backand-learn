import React, { useState } from 'react'

export default function useInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    
  }

  return {
    value,
    onChange,
    onBlur
  }
}
