import { TextAnimation } from "@/components/HoveringText";

export function Services() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextAnimation
                HighlightTextAnimation={{
                    opacity: 0,
                    y: 75
                }}
                VisibleHighlightTextAnimation={{
                    opacity: 1,
                    y: 0
                }}
                CaptionAnimation={{
                    opacity: 0,
                    y: -75
                }}
                VisibleCaptionAnimation={{
                    opacity: 1,
                    y: 0
                }}
                HighlightText="Our"
                Text="Services"
                Caption="At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing."
            />
        </div>
    );
};