import { Button } from "@/client/components/ui/button";

function ResumeButton() {
    return (
        <Button
            variant="outline"
            className="font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary"
        >
            resume_v4.pdf
        </Button>
    );
};

export default ResumeButton;