"use client";

import { useState } from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";
import { IoClipboardOutline } from "react-icons/io5";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function CopyButton({ text, className }: {
    text: string;
    className: string;
}) {
    const [isCopied, setIsCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setIsOpen(true);
        setTimeout(() => {
            setIsCopied(false);
            setIsOpen(false);
        }, 2500);
    };
    return (
        <TooltipProvider delayDuration={100} disableHoverableContent={false}>
            <Tooltip open={isOpen} onOpenChange={setIsOpen}>
                <TooltipTrigger asChild>
                    <button
                        disabled={isCopied}
                        onClick={copy}
                        className={clsx(
                            "flex items-center text-xs font-medium text-white hover:bg-gray-shade-12 transition-all",
                            "border border-gray-shade-12 p-1 rounded-[5px]",
                            className
                        )}
                    >
                        {isCopied ? <FaCheck size={20} /> : <IoClipboardOutline size={20} />}
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {isCopied ? "Copied!": "Copy code"}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};