import React, {useEffect, useState} from 'react'
import intlTelInput from 'intl-tel-input';

const PhoneInput = ({handlePhone, phone}) => {
    const [iti, setIti] = useState(null)
    useEffect(() => {
        const input = document.querySelector("#phone");
        setIti(intlTelInput(input, {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
        }));
    },[])

  return (
    <input type="phone" id="phone" onChange={(e) => {
        console.log(iti.getNumber())
        console.log(iti.getSelectedCountryData())
         handlePhone(e.target.value)
        }}/>
    )
}

export default PhoneInput