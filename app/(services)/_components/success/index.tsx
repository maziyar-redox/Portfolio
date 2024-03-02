import { TextAnimation } from "@/components/HoveringText";

export function Success() {
    return (
        <div className="flex flex-col items-center justify-center px-0 md:px-10 pt-12 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
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
                HighlightText="Success"
                Text="Stories"
                Caption="At DigitX, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts."
            />
        </div>
    );
};