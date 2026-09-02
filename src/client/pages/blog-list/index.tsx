import * as z from "zod";

import { Container } from "@/client/components/zippystarter/container";

import BreadCrumbList from "@/client/pages/blog-list/components/breadCrumb";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router";
import { useDebounceValue } from "usehooks-ts"
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { searchBlogFormSchema } from "@/client/core/schema/searchBlog";
import { Field, FieldError, FieldGroup } from "@/client/components/ui/field";
import { Input } from "@/client/components/ui/input";
import { Button } from "@/client/components/ui/button";
import { blogPosts } from "@/client/core/constants/blog-proto";

import BlogCard from "@/client/pages/blog-list/components/blogCard"
import BlogPagination from "@/client/pages/blog-list/components/blogPagination";
import { BlogListPageMetaData } from "@/client/core/constants/metadata";

function Component() {

    const [searchParams, setSearchParams] = useSearchParams();
    const getTerm = searchParams.get("term");

    const [debouncedValue, setValue] = useDebounceValue(getTerm, 500);

    const searchBlogForm = useForm<z.infer<typeof searchBlogFormSchema>>({
        resolver: zodResolver(searchBlogFormSchema),
        defaultValues: {
            search_term: ""
        },
    });

    useEffect(() => {
        if (getTerm !== null || debouncedValue !== null) {
            searchBlogForm.setValue("search_term", debouncedValue as string);
            setSearchParams({ term: debouncedValue as string });
            searchBlogForm.handleSubmit(onSubmit)();
        };
    }, [debouncedValue]);

    function onSubmit(data: z.infer<typeof searchBlogFormSchema>) {
        console.log(data);
    };

    return (
        <>
            <Helmet>
                <title>
                    {BlogListPageMetaData.title}
                </title>
                <meta name="description" content={BlogListPageMetaData.description} />
                <meta name="keywords" content={BlogListPageMetaData.keywords.join(" ,")} />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Maziyar Isanezhad" />
            </Helmet>
            <Container
                id="projects"
                component="section"
                wrapperClassName="py-24"
                className="mx-auto max-w-7xl flex-1"
            >
                <div className="flex flex-col md:flex-row gap-y-10 justify-between items-center w-full">
                    <div className="flex flex-col">
                        <BreadCrumbList />
                        <h1 className="text-7xl font-mono font-bold text-foreground my-8">
                            BLOG<span className="text-primary">_</span>
                        </h1>
                        <p className="text-muted-foreground max-w-lg text-left">
                            Thoughts, experiments and notes from my journey in software development and physics and mechanics.
                        </p>
                    </div>
                    <form id="form-rhf-input" onSubmit={searchBlogForm.handleSubmit(onSubmit)} className="min-w-xs flex justify-center items-center gap-x-2">
                        <FieldGroup>
                            <Controller
                                name="search_term"
                                control={searchBlogForm.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <div className="relative">
                                            <Input
                                                {...field}
                                                id="form-rhf-input-search"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Search posts..."
                                                autoComplete="on"
                                                onChange={(e) => {
                                                    if (e.target.value !== "") {
                                                        setValue(e.target.value);
                                                    };
                                                    field.onChange(e);
                                                }}
                                            />
                                        </div>
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Button variant="outline" className="pt-1" onClick={() => {
                            searchBlogForm.reset();
                            setValue("")
                        }}>
                            Reset
                        </Button>
                    </form>
                </div>
                <div className="py-10 w-full flex flex-col gap-y-10">
                    {blogPosts.map((value, index) => (
                        <BlogCard
                            key={index}
                            title={value.title}
                            excerpt={value.excerpt}
                            tags={value.tags}
                            date={value.date}
                        />
                    ))}
                </div>
                <BlogPagination />
            </Container>
        </>
    );
};

export {
    Component,
};