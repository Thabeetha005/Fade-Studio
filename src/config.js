// FADE STUDIO — Global Configuration

export const WHATSAPP_NUMBER = '91XXXXXXXXXX'; // Replace with salon's 10-digit WhatsApp number with country code (e.g. 919876543210)
export const WHATSAPP_DEFAULT_TEXT = 'Hi FADE STUDIO, I want to book an appointment.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

export const PHONE_NUMBER = '+91 98765 43210';
export const PHONE_CALL_URL = 'tel:+919876543210';

export const SALON_ADDRESS = '104 Lavelle Road, Shanthala Nagar, Bengaluru, Karnataka 560001';
export const SALON_HOURS = {
  weekdays: 'Mon – Fri: 09:00 AM – 09:00 PM',
  weekends: 'Sat – Sun: 08:30 AM – 09:30 PM'
};
export const SALON_EMAIL = 'appointments@fadestudio.in';
