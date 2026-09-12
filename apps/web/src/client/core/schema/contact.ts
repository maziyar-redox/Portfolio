import * as z from "zod";

const contactFormSchema = z.object({
    first_name: z
        .string()
        .min(5, "First Name must be at least 5 characters.")
        .max(32, "First Name must be at most 64 characters."),
    email: z
        .email({
            error: "Enter a valid email"
        })
        .min(5, "Email must be at least 5 characters.")
        .max(32, "Email must be at most 64 characters."),
    message: z
        .string()
        .min(5, "Message must be at least 5 characters.")
        .max(250, "Message must be at most 250 characters."),
});

export {
    contactFormSchema
};