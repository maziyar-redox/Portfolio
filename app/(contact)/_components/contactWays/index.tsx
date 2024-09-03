import { ContactCard } from "./card";

export function ContactWays() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 py-5 mt-10 md:mt-0 space-y-8">
            <h1 className="text-lg text-white font-medium">
                Contact Us Via Email
            </h1>
            <ContactCard />
        </div>
    );
};