import React, { useState } from 'react'
import useValidation from './useValidation'

export default function useInput (initialValue, validations) {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
    
    console.log(valid)
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    setIsDirty,
    ...valid,

  }
}
