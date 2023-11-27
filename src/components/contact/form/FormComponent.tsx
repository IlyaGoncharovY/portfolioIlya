import React, {useState} from 'react';
import * as yup from 'yup';
import Swal from "sweetalert2";
import {useFormik} from "formik";
import * as emailjs from 'emailjs-com';

import {UniversalButton} from "../../../assects/components/UniversalButton";
import {Form, Input, TextArea, Title} from "./FormStyle";

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const userID = process.env.REACT_APP_EMAILJS_USER_ID

export const FormComponent = () => {

    const [buttonState, setButtonState] = useState<string>('Send Message');

    const formik = useFormik({
        initialValues: {
            from_name: '',
            to_name: "Ilya",
            reply_to: '',
            message: '',
        },
        onSubmit: (values) => {
            try {
                emailjs.send(serviceID!, templateID!, values, userID)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'your message has been sent',
                            timer: 1500
                        })
                        setButtonState('Send Email');
                        formik.setSubmitting(false);
                        formik.resetForm();
                    });
            } catch {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
                setButtonState('Send Email');
                formik.setSubmitting(false);
            }
        },
        validationSchema: yup.object({
            from_name: yup.string()
                .required('* Name field is required'),
            reply_to: yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: yup.string().required('* Message field is required')
        })
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Title>
                Contact Us
            </Title>
            <Input placeholder={"Name"}
                   id="from_name"
                   name="from_name"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.from_name}
            />
            {formik.touched.from_name && formik.errors.from_name &&
                <div style={{color: 'red', opacity: 0.8}}>{formik.errors.from_name}</div>}
            <Input placeholder={"Email"}
                   id="reply_to"
                   name="reply_to"
                   type="email"
                   onChange={formik.handleChange}
                   value={formik.values.reply_to}
            />
            {formik.touched.reply_to && formik.errors.reply_to &&
                <div style={{color: 'red', opacity: 0.8}}>{formik.errors.reply_to}</div>}
            <TextArea placeholder={"Message"}
                      rows={10}
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message &&
                <div style={{color: 'red', opacity: 0.8}}>{formik.errors.message}</div>}
            <UniversalButton type={"submit"} disabled={formik.isSubmitting} title={`${buttonState}`}/>
        </Form>
    );
};
