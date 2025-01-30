const emailConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Validate config
if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    console.error('EmailJS configuration is incomplete. Please check your environment variables.');
}

export default emailConfig;
