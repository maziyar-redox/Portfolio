import * as z from "zod";

const searchBlogFormSchema = z.object({
    search_term: z
        .string()
        .min(5, "Search term must be at least 5 characters.")
        .max(32, "Search term must be at most 64 characters."),
});

export {
    searchBlogFormSchema
};