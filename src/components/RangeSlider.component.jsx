import React from 'react'
import DashedRoundButton from './DashedRoundButton.component'
const RangeSlider = ({handleSethairLossDuration, hairLossDuration}) => {
  return (
    <div className='loss-duration-card'>
        <div className='duration-container'>
            <DashedRoundButton noclick text={hairLossDuration}/>
            <h2>Duration</h2>
        </div>
        <div className="range-container" style={{width:'100%'}}>
        <input id="lossDurationRange" value={hairLossDuration} onInput={(e) => {
            console.log(e.target.value)
            handleSethairLossDuration(e.target.value)
            }} type="range" min="1" max="10" step="1"/>
            <span className="range-text-left">Less than 1 year</span>
            <span className="range-text-right">More than 10 years</span>
        </div>
    </div>
  )
}

export default RangeSlider