import React, { useState } from 'react';
import './contact.css'; 
import { useSendContactFormMutation } from '../Redux/contactApi';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [sendContactForm, { isLoading, isError, error }] = useSendContactFormMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        if (!formData.subject) newErrors.subject = 'Subject is required.';
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await sendContactForm(formData).unwrap();
                if (response.success) {
                    setSuccessMessage(response.message);
                    setFormData({
                        email: '',
                        subject: '',
                        message: '',
                    });
                    setErrors({});
                } else if (response.errors) {
                    setErrors(response.errors);
                }
            } catch (err) {
                console.error('Failed to send message:', err);
            }
        }
    };

    const isFetchBaseQueryError = (error) => {
        return error && typeof error === 'object' && 'data' in error;
    };

    return (
        <div className="contact">
        <div className="contact-us-form">
            <h2>Contact Us</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {isError && (
                <p className="error-message">
                    {isFetchBaseQueryError(error)
                        ? error.data.message || 'Something went wrong. Please try again.'
                        : 'Something went wrong. Please try again.'}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    {errors.subject && <p className="error-message">{errors.subject}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
        </div>
    );
};

export default ContactUsForm;
