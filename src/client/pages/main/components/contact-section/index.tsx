import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";
import { Textarea } from "@/client/components/ui/textarea";

import { Container } from "@/client/components/zippystarter/container";

function ContactSection() {
    return (
        <Container id="contact" className="py-24 bg-card border-t border-border">
            <div className="max-w-2xl justify-self-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display mb-4">
                        INITIATE_CONTACT
                    </h2>
                    <p className="text-muted-foreground">
                        Have a project in mind or just want to discuss the singularity?
                        Send a signal.
                    </p>
                </div>

                <form className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                            htmlFor="name"
                            className="text-xs font-mono text-muted-foreground"
                            >
                            NAME
                            </label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label
                            htmlFor="email"
                            className="text-xs font-mono text-muted-foreground"
                            >
                            EMAIL
                            </label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        </div>
                        <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="text-xs font-mono text-muted-foreground"
                        >
                            MESSAGE
                        </label>
                        <Textarea
                            id="message"
                            placeholder="Enter your message..."
                            className="min-h-37.5"
                        />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                        SEND TRANSMISSION
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default ContactSection;