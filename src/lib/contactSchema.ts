import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'name_required').max(100),
  email: z.string().min(1, 'email_required').email('email_invalid'),
  message: z.string().min(20, 'message_required').max(2000),
  budget: z.enum(['< $500', '$500 - $1,500', '$1,500 - $3,000', '$3,000+'], {
    errorMap: () => ({ message: 'budget_required' }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;