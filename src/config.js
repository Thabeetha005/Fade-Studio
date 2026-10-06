// FADE STUDIO — Global Configuration

export const WHATSAPP_NUMBER = '91XXXXXXXXXX'; // Replace with salon's 10-digit WhatsApp number with country code (e.g. 919876543210)
export const WHATSAPP_DEFAULT_TEXT = 'Hi FADE STUDIO, I want to book an appointment.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;

export const PHONE_NUMBER = '+91 98765 43210';
export const PHONE_CALL_URL = 'tel:+919876543210';

export const SALON_ADDRESS = '14th Main Road, Indiranagar, 100 Feet Rd Junction, Bengaluru, Karnataka 560038';
export const SALON_HOURS = {
  days: 'Monday – Sunday',
  time: '10:00 AM – 9:00 PM',
  full: 'Monday – Sunday: 10:00 AM – 9:00 PM',
  weekdays: 'Monday – Sunday: 10:00 AM – 9:00 PM',
  weekends: 'Monday – Sunday: 10:00 AM – 9:00 PM'
};
export const SALON_EMAIL = 'concierge@fadestudio.in';
