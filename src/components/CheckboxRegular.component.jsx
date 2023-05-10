import React from 'react'

const CheckboxRegular = ({checkboxText, selected, handleSetHairLoss,handleSetHairColor, type}) => {
  return (
    <div class="checkbox-regular-container" onClick={() => type === "hairloss" ? handleSetHairLoss(checkboxText) : handleSetHairColor(checkboxText)}>

    </div>
  )
}

export default CheckboxRegular