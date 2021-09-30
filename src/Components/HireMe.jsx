import React, {useState, useEffect, useRef} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {contactInfo} from './validationSchemas'
import 'react-toastify/dist/ReactToastify.css'
import './HireMe.css'

function HireMe({cancle}) {
    const form = useRef();

    const [styles, setStyles] = useState({
        opacity : '0'
    })
    const [errorMessage, setErrorMessage] = useState('')

    const hireMeStyles = {
        opacity: styles.opacity,
        transition: 'all 1s ease'
    }

    useEffect(()=>{
        setStyles({
            opacity: '1'
        })
    }, [])

    const onSubmit = async(data, e) => {
        const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

        try {

            emailjs.sendForm('service_ypi7l5l', 'template_lplb987', form.current, 'user_LhB6BmKHXG6o83l1skINd')
                .then((result) => {
                    toast.success("Message sent successfully. We'll get in touch")
                    setTimeout(() => {
                        e.target.reset()
                        cancle()
                    }, 5000)
                }, (error) => {
                    toast.error(error.text)
                    console.log(error.text);
            });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data)
                setErrorMessage(error.response.data);
            };
            if (error.request) {
                toast.error(error.request.response)
                console.log(error.request.response);
            };
            if (error.message) {
                toast.error(error.message)
                console.log(error.message);
            };
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver : yupResolver(contactInfo)
    })

    return (
        <div className="HireMe">
            <ToastContainer />
            <form className="formContainer" style={hireMeStyles} onSubmit={handleSubmit(onSubmit)} ref={form}>
                <h3 className='formHeaderText'>Let's Work Together</h3>

                <div className="formControl">
                    <label htmlFor="name">Full Names</label>
                    <input className='inputElement' type="text" name="name" {...register('name', {required : true})} id="name" placeholder="Full Name" />
                </div>
                {errors?.name && <p className="error">{errors?.name?.message}</p>}

                <div className="formControl">
                    <label htmlFor="email">Email Address</label>
                    <input className='inputElement' type="email" name="email" {...register('email', {required : true})} id="email" placeholder="Email address" />
                </div>
                {errors?.email && <p className="error">{errors?.email?.message}</p>}

                <div className="formControl">
                    <label htmlFor="tel">Telephone</label>
                    <PhoneInput
                        country={'cm'}
                        required={true}
                        inputProps={{
                            name: 'tel',
                            required: true,
                        }}
                        placeholder='Enter contact'
                    />
                </div>

                <div className="formControl">
                    <label htmlFor="projectType">Project Type</label>
                    <input className='inputElement' type="text" name="projectType" {...register('projectType')} id="projectType" placeholder="What you want to accomplish" />
                </div>
                {errors?.projectType && <p className="error">{errors?.projectType?.message}</p>}

                <div className="formControl">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" {...register('message')} id="message" placeholder="Additional Information" ></textarea>
                </div>
                {errors?.message && <p className="error">{errors?.message?.message}</p>}

                <div className="btnSubmitContainer">
                    <button className="btnCancel" onClick={cancle}>Cancel</button>
                    <button type="submit" className="btnSubmit">Submit</button>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p> }
            </form>
        </div>
    )
}

export default HireMe
