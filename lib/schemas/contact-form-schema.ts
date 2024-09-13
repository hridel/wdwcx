import { z } from 'zod';

const contactFormSchema = z.object({
    email: z.string().email(),
    message: z.string().trim().min(10),
});

export default contactFormSchema;
