import React, { useState } from 'react'
import BackButton from './BackButton.component.jsx';
import DashedRoundButton from './DashedRoundButton.component.jsx';
import CheckboxSquare from './CheckboxSquare.component.jsx';
import RangeSlider from './RangeSlider.component.jsx';
import NextButton from './NextButton.component.jsx';
import DateInput from './DateInput.component.jsx';
import DashedButton from './DashedButton.component.jsx';
import PhoneInput from './PhoneInput.component.jsx';
import { TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import {Checkbox} from '@mui/material';
const styles = {
    sx: {
      width: '100%',
      // set the color of the label when not shrinked
      [`&.${inputLabelClasses.shrink}`]: {
        // set the color of the label when shrinked (usually when the TextField is focused)
        color: "gray"
      }
    }
  }

const Form = () => {
    const [formStep, setFormStep] = useState(0) 
    const [gender, setGender] = useState(null)
    const [hairLoss, setHairLoss] = useState(null)
    const [hairColor, setHairColor] = useState(null)
    const [hairLossDuration, setHairLossDuration] = useState(1)
    const [hadTransplantation, setHadTransplantation] = useState(null)
    const [trasplantationDate, setTransplantationDate] = useState(null)
    const [haveDiseases, setHaveDiseases] = useState(null)
    const [diseaseInfo, setDiseaseInfo] = useState(null)
    const [treatmentPlan, setTreatmentPlan] = useState(null)
    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [privacy, setPrivacy] = useState(null)
    const [disclosure, setDisclosure] = useState(null)


    const handleSetGender = (gender) => {
        setGender(gender)
        setFormStep(1)
    }

    const handleSetHairLoss = (hairLoss) => {
        setHairLoss(hairLoss)
        setFormStep(2)
    }

    const handleSetHairColor = (hairColor) => {
        setHairColor(hairColor)
        setFormStep(3)
    }

    const handleSethairLossDuration = (duration) => {
        setHairLossDuration((prev) => duration)
        setFormStep(3)
    }

    const handleHadTransplantation = (bool,step) => {
        setHadTransplantation(bool)
        setFormStep(step)
    }

    const handleTransplantationDate = (date) => {
        setTransplantationDate(date)
    }

    const handleHasDiseases = (bool) => {
        setHaveDiseases(bool)
    }

    const handleTreatmentPlan = (plan) => {
        setTreatmentPlan(plan)
        setFormStep(8)
    }

    const handleDiseaseInfo = (info) => {
        setDiseaseInfo(info)
    }

    const handleFullName = (name) => {
        setFullName(name)
    }

    const handleEmail = (email) => {
        setEmail(email)
    }

    const handlePhone = (phone) => {
        setPhone(phone)
    }

    const handlePrivacy = (bool) => {
        setPrivacy(bool)
    }

    const handleDisclosure = (bool) => {
        setDisclosure(bool)
    }

    return (
        <div class="form-container">
        {formStep === 0 && 
            (<div >
                <h3>Please choose your gender</h3>
                <div className="dashed-buttons-container">
                    <div onClick={() => handleSetGender("Male")}>
                    <DashedRoundButton text="Male" />
                    </div>
                    <div onClick={() => handleSetGender("Female")}>
                    <DashedRoundButton text="Female"/>
                    </div>
                </div>
            </div>)
        }
        {(formStep === 1 && gender === "Male") && 
            (<div class="hair-loss-card">
                <h3>How would you define your hair loss?</h3>
                <div className="hair-loss-grid">
                    <div>
                        <img width="90px" class="male" src="./assets/male1.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"None"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="male" src="./assets/male2.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Light"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="male" src="./assets/male3.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Light-Medium"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="male" src="./assets/male4.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Medium"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="male" src="./assets/male5.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" handleSetHairLoss={handleSetHairLoss} checkboxText={"Extensive"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="male" src="./assets/male6.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" handleSetHairLoss={handleSetHairLoss} checkboxText={"Completely"}/>  
                        </div>
                    </div>
                </div>
                <div class="back-button-container">
                    <BackButton formStep={formStep} setFormStep={setFormStep}/>
                </div>
            </div>)
        }
            {(formStep === 1 && gender === "Female") && 
            (<div class="hair-loss-card">
                <h3>How would you define your hair loss?</h3>
                <div className="hair-loss-grid">
                    <div>
                        <img width="90px" class="female" src="./assets/female1.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"None"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="female" src="./assets/female2.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Light"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="female" src="./assets/female3.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Light-Medium"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="female" src="./assets/female4.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" selected={hairLoss} handleSetHairLoss={handleSetHairLoss} checkboxText={"Medium"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="female" src="./assets/female5.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" handleSetHairLoss={handleSetHairLoss} checkboxText={"Extensive"}/>  
                        </div>
                    </div>
                    <div>
                        <img width="90px" class="female" src="./assets/female6.svg" alt="rc"/>
                        <div>
                            <CheckboxSquare type="hairloss" handleSetHairLoss={handleSetHairLoss} checkboxText={"Completely"}/>  
                        </div>
                    </div>
                </div>
                <div class="back-button-container">
                    <BackButton formStep={formStep} setFormStep={setFormStep}/>
                </div>
            </div>)
        }
        {formStep === 2 &&
        (<div class="hair-loss-card">
            <h3>How would you define your hair color?</h3>
            <div class="hair-color-grid">
            <div>
                <img width="90px" height="90px" class="male" src="./assets/blond.svg" alt="rc"/>
                <div>
                    <CheckboxSquare type="haircolor" selected={hairColor} handleSetHairColor={handleSetHairColor} checkboxText={"Blond"}/>  
                </div>
            </div>
            <div>
                <img width="90px" height="90px" class="male" src="./assets/brown.svg" alt="rc"/>
                <div>
                    <CheckboxSquare type="haircolor" selected={hairColor} handleSetHairColor={handleSetHairColor} checkboxText={"Brown"}/>  
                </div>
            </div>
            <div>
                <img width="90px" height="90px" class="male" src="./assets/ginger.svg" alt="rc"/>
                <div>
                    <CheckboxSquare type="haircolor" selected={hairColor} handleSetHairColor={handleSetHairColor} checkboxText={"Ginger"}/>  
                </div>
            </div>
            <div>
                <img width="90px" height="90px" class="male" src="./assets/black.svg" alt="rc"/>
                <div>
                    <CheckboxSquare type="haircolor" selected={hairColor} handleSetHairColor={handleSetHairColor} checkboxText={"Black"}/>  
                </div>
            </div>
        </div>
        <div class="back-button-container">
            <BackButton formStep={formStep} setFormStep={setFormStep}/>
        </div>
        </div>)
        }
        {formStep === 3 && 
        (<div class="loss-duration-card">
            <h3>How long have you been experiencing hair loss?</h3>
            <RangeSlider handleSethairLossDuration={handleSethairLossDuration} hairLossDuration={hairLossDuration}/>
            <div class="back-button-container">
                <div onClick={() => setFormStep(4)}>
                <NextButton/>
                </div>
            </div>
            <div class="back-button-container">
                    <BackButton formStep={formStep} setFormStep={setFormStep}/>
            </div>
        </div>
        )
        }
        {formStep === 4 && 
        (<div class="transplant-operation-card">
            <h3>Have you ever had a hair trasplant operation before?</h3>
            <div className="dashed-buttons-container">
                <div onClick={() => handleHadTransplantation(true,5)}>
                <DashedRoundButton text="Yes" handleSetGender={handleSetGender}/>
                </div>
                <div onClick={() => handleHadTransplantation(false,6)}>
                <DashedRoundButton text="No" handleSetGender={handleSetGender}/>
                </div>
            </div>
            <div class="back-button-container">
                <BackButton formStep={formStep} setFormStep={setFormStep}/>
            </div>
        </div>
        )
        }
        {formStep === 5 && 
        (<div class="transplant-date-card">
            <h3>When did you have a hair transplant operation?</h3>
            <div className="dashed-buttons-container">
                <DateInput handleTransplantationDate={handleTransplantationDate}/>
            </div>
            <div class="back-button-container">
                <div onClick={() => setFormStep(6)}>
                <NextButton/>
                </div>
            </div>
            <div class="back-button-container">
                <BackButton formStep={formStep} setFormStep={setFormStep}/>
            </div>
        </div>
        )
        }
        {formStep === 6 && 
        (<div class="transplant-operation-card">
            <h3>Are you taking any medications or do you have any disease?</h3>
                {haveDiseases ? (
                <>
                <div className="dashed-buttons-container">
                    <div className="form-textarea-container">
                        <span>Please, tell us more</span>
                        <textarea onChange={(e) => handleDiseaseInfo(e.target.value)} class="form-textarea" name="diseases/medications" data-gtm-form-interact-field-id="6"></textarea>
                    </div>
                    <div onClick={() => setFormStep(7)}>
                    <NextButton/>
                    </div>
                </div>
                <div class="back-button-container">
                    <BackButton deleteDisease handleHasDiseases={handleHasDiseases}/>
                </div>
                </>
                ):
                (
                <>
                <div className="dashed-buttons-container">
                    <div onClick={() => handleHasDiseases(true)}>
                    <DashedRoundButton text="Yes" handleSetGender={handleSetGender}/>
                    </div>
                    <div onClick={() => {
                        handleHasDiseases(false)
                        setFormStep(7)}}>
                    <DashedRoundButton text="No" handleSetGender={handleSetGender}/>
                    </div>
                </div>
                <div class="back-button-container">
                    <BackButton formStep={formStep} setFormStep={setFormStep}/>
                </div>
                </>
                )
                }
        </div>
        )}
        {formStep === 7 && 
        (<div class="transplant-operation-card">
            <h3>When are you planning to undergo treatment?</h3>
            <div className="dashed-buttons-container-treatment">
                <div onClick={() => handleTreatmentPlan("As soon as posible")}>
                <DashedButton text="As soon as posible" />
                </div>
                <div onClick={() => handleTreatmentPlan("Within 3 month")}>
                <DashedButton text="Within 3 month" />
                </div>
                <div onClick={() => handleTreatmentPlan("In 1 year")}>
                <DashedButton text="In 1 year" />
                </div>
                <div onClick={() => handleTreatmentPlan("I haven’t planned it yet")}>
                <DashedButton text="I haven’t planned it yet" />
                </div>
            </div>
            <div class="back-button-container">
                <BackButton formStep={formStep} setFormStep={setFormStep}/>
            </div>
        </div>
        )
        }
        {formStep === 8 && 
        (<div class="treatment-plan-card">
            <h3>Almost done. Whom should we deliver the results to?</h3>
            <div className="end-form">
                <TextField onChange={(e) => handleFullName(e.target.value)} id="filled-basic" label="Full Name" variant="filled" InputLabelProps={styles}/>
                <TextField onChange={(e) => handleEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" InputLabelProps={styles} />
                <PhoneInput phone={phone} handlePhone={handlePhone}/>
            <div class="checkbox-terms-container">
            <Checkbox 
            onChange={(e) => handlePrivacy(e.target.value)}
            sx={{
                color: "#fff",
                '&.Mui-checked': {
                color: "#fff",
                },
            }}/>
            <p>I have reviewed, comprehended, and agreed to the Privacy Policy.</p>
            </div>
            <div class="checkbox-terms-container">
            <Checkbox 
            onChange={(e) => handleDisclosure(e.target.value)}
            sx={{
                color: "#fff",
                '&.Mui-checked': {
                color: "#fff",
                },
            }}/>
            <p>I have reviewed, comprehended, and consented to the Patient Consent and Disclosure Statement.</p>
            </div>
            <div class="back-button-container">
                <div onClick={() => setFormStep(6)}>
                <NextButton/>
                </div>
            </div>
            </div>
            <div class="back-button-container">
                <BackButton formStep={formStep} setFormStep={setFormStep}/>
            </div>
        </div>
        )
        }
        </div>
    )
}

export default Form



/*
Components Needed

Dashed border radius button -
Dashed rounded button
Back Button
Next Button
Date Input
Name Input
Email
Checkbox with square
Checkbox with V
range slider
*/