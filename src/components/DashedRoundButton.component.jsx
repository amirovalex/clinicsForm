import React from 'react'

const DashedRoundButton = ({text, noclick }) => {
  return (
    <div className={noclick ? "dashed-button-noclick" :"dashed-round-button"}>{text}</div>
  )
}

export default DashedRoundButton