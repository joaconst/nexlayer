'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/contactSchema';
import { sendContactEmail } from '@/lib/emailjs';
import { useTranslation } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      await sendContactEmail(data);
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };
  
  const budgetOptions = t.contact.form.budget_options as string[];
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-on-surface text-sm font-medium mb-2">
          {t.contact.form.name}
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder={t.contact.form.name_placeholder}
          className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/20"
        />
        {errors.name && (
          <p className="text-error text-xs mt-1">{t.contact.errors[errors.name.message as keyof typeof t.contact.errors]}</p>
        )}
      </div>
      
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-on-surface text-sm font-medium mb-2">
          {t.contact.form.email}
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder={t.contact.form.email_placeholder}
          className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/20"
        />
        {errors.email && (
          <p className="text-error text-xs mt-1">{t.contact.errors[errors.email.message as keyof typeof t.contact.errors]}</p>
        )}
      </div>
      
      {/* Budget Field */}
      <div>
        <label htmlFor="budget" className="block text-on-surface text-sm font-medium mb-2">
          {t.contact.form.budget}
        </label>
        <select
          {...register('budget')}
          id="budget"
          className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/20"
        >
          <option value="" className="text-on-surface-variant">{t.contact.form.budget_default}</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option} className="text-on-surface">
              {option}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="text-error text-xs mt-1">{t.contact.errors[errors.budget.message as keyof typeof t.contact.errors]}</p>
        )}
      </div>
      
      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-on-surface text-sm font-medium mb-2">
          {t.contact.form.message}
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder={t.contact.form.message_placeholder}
          className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/20 resize-none"
        />
        {errors.message && (
          <p className="text-error text-xs mt-1">{t.contact.errors[errors.message.message as keyof typeof t.contact.errors]}</p>
        )}
      </div>
      
      {/* Submit Button */}
      <Button type="submit" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
      </Button>
      
      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-500/10 border border-green-500 rounded-xl p-3 text-center">
          <p className="text-green-600 text-sm">{t.contact.form.success}</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-error/10 border border-error rounded-xl p-3 text-center">
          <p className="text-error text-sm">{t.contact.form.error}</p>
        </div>
      )}
    </form>
  );
}