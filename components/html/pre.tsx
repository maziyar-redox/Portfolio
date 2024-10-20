import { CopyButton } from "@/components/coppyButton";
import clsx from "clsx";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
    __rawstring__?: string;
    ["data-language"]?: string;
};

export function Pre(props :PreProps) {
    const {
        children,
        __rawstring__ = "",
        ["data-language"]: dataLanguage = "Shell",
    } = props;
    return (
        <pre {...props} className={clsx("relative", props.className)}>
            {children}
            <div className=" absolute top-3 right-3">
                <CopyButton text={__rawstring__} className="" />
            </div>
        </pre>
    );
};