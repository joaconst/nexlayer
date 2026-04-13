import emailjs from '@emailjs/browser';
import { ContactFormData } from '@/types';

export async function sendContactEmail(data: ContactFormData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      budget: data.budget,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}