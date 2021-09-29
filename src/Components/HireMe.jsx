import React, {useState, useEffect} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './HireMe.css'

function HireMe({cancle}) {

    const [styles, setStyles] = useState({
        opacity : '0'
    })

    const hireMeStyles = {
        opacity: styles.opacity,
        transition: 'all 1s ease'
    }

    useEffect(()=>{
        setStyles({
            opacity: '1'
        })
    }, [])

    return (
        <div className="HireMe">
            <form className="formContainer" style={hireMeStyles}>
                <h3 className='formHeaderText'>Let's Work Together</h3>
                <div className="formControl">
                    <label htmlFor="name">Full Names</label>
                    <input className='inputElement' type="text" name="name" id="name" placeholder="Enter Full Name" />
                </div>

                <div className="formControl">
                    <label htmlFor="email">Email Address</label>
                    <input className='inputElement' type="email" name="email" id="email" placeholder="Enter email address" />
                </div>

                <div className="formControl">
                    <label htmlFor="tel">Telephone</label>
                    <PhoneInput
                        country={'cm'}
                        required={true}
                    />
                </div>

                <div className="formControl">
                    <label htmlFor="name">Project Type</label>
                    <input className='inputElement' type="text" name="name" id="name" placeholder="What you want to accomplish" />
                </div>

                <div className="formControl">
                    <label htmlFor="name">Message</label>
                    <textarea name="name" id="name" placeholder="Additional Information" ></textarea>
                </div>

                <div className="btnSubmitContainer">
                    <button className="btnCancel" onClick={cancle}>Cancel</button>
                    <button type="submit" className="btnSubmit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default HireMe
