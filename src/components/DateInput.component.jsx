import React from 'react'

const DateInput = ({handleTransplantationDate}) => {
  return (
        <input onChange={(e) => {handleTransplantationDate(e.target.value)}}class="date-input" type="date" />
  )
}

export default DateInput