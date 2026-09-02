import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";
import { Textarea } from "@/client/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/client/components/ui/field";

import { Container } from "@/client/components/zippystarter/container";
import { contactFormSchema } from "@/client/core/schema/contact";
import { useActiveSection } from "@/client/core/stores/useActiveSection";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod";
import { toast } from "sonner";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/client/components/ui/input-group";

function ContactSection() {
    const { setActiveSection } = useActiveSection((state) => state);
    const { ref, inView } = useInView({
        threshold: 0.7, // Trigger when 30% of the element is visible
        triggerOnce: false, // Only trigger once (good for animations)
    });

    useEffect(() => {
        if (inView) {
            setActiveSection("contact");
        };
    }, [inView]);

    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            first_name: "",
            email: "",
            message: ""
        },
    });

    function onMessageSubmit(data: z.infer<typeof contactFormSchema>) {
        toast("MESSAGE_RECIVED", {
            description: "Thanks for your submition, Your message will be answered as soon as possible.",
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            duration: 4500,
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        });
    };
    
    return (
        <Container id="contact" className="py-24 bg-card border-t border-border">
            <div className="max-w-2xl justify-self-center" ref={ref}>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display mb-4">
                        INITIATE_CONTACT
                    </h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to discuss the singularity?
                        Send a signal.
                    </p>
                </div>

                <form className="grid gap-6" id="form-rhf-demo" onSubmit={contactForm.handleSubmit(onMessageSubmit)}>
                    <FieldGroup>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Controller
                                name="first_name"
                                control={contactForm.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-xs font-mono text-muted-foreground" htmlFor="form-rhf-demo-name">
                                            NAME
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            placeholder="John Doe"
                                            id="form-rhf-demo-name"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={contactForm.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-xs font-mono text-muted-foreground" htmlFor="form-rhf-demo-email">
                                            EMAIL
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            placeholder="john@example.com"
                                            id="form-rhf-demo-email"
                                            type="email"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                    </Field>
                                )}
                            />
                        </div>
                        <Controller
                            name="message"
                            control={contactForm.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className="text-xs font-mono text-muted-foreground" htmlFor="form-rhf-demo-message">
                                        MESSAGE
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-rhf-demo-message"
                                            placeholder="Enter your message..."
                                            className="min-h-37.5"
                                            aria-invalid={fieldState.invalid}
                                            autoComplete="off"
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <Button type="submit" className="w-full" size="lg">
                        SEND TRANSMISSION
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ContactSection;