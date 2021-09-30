import * as yup from 'yup'


export const contactInfo = yup.object().shape({
        name : yup.string().min(6, 'Name must be at least 6 characters').max(255, 'Name cannot be more than 255 characters').required('Name is required'),

        email : yup.string().email('Please enter valid email address').min(6, 'Email must be at least 6 characters').max(50, 'Email cannot be more than 50 characters').required('Email is required'),

        // tel : yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),

        projectType : yup.string().max(255, 'Project type cannot be more than 255 characters'),

        message : yup.string(),
    })