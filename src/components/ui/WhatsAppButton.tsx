'use client';

import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const phoneNumber = '+5491112345678';
  const message = encodeURIComponent(
    'Hola! Vi su sitio web NexLayer y me interesa hablar sobre un proyecto.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsNearFooter(footerTop - windowHeight < 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-indigo-glow ${
        isNearFooter ? 'bottom-24 md:bottom-28' : 'bottom-6'
      }`}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}