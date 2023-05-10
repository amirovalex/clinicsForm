import React from 'react'

const BackButton = ({formStep,setFormStep,deleteDisease, handleHasDiseases}) => {
  return (
    <div class="back-button" onClick={() => {deleteDisease ? handleHasDiseases(null) : setFormStep(formStep - 1)}}><span>Back</span></div>
  )
}

export default BackButton