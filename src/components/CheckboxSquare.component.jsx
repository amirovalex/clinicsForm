import React from 'react'

const CheckboxSquare = ({checkboxText, selected, handleSetHairLoss,handleSetHairColor, type}) => {
  return (
    <div class="checkbox-container" onClick={() => type === "hairloss" ? handleSetHairLoss(checkboxText) : handleSetHairColor(checkboxText)}>
        <div class="checkbox">
            <div class={selected === checkboxText ? "checkbox-content" : "display-none"}></div>
        </div>
        <span class="checkbox-text">
            {checkboxText}
        </span>
    </div>
  )
}

export default CheckboxSquare