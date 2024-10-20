import { OnlyLogo } from "./onlyLogo";
import { OnlyText } from "./onlyText";
import { TwinMode } from "./twin";

export function Main({
    mode,
}: {
    mode: "twin" | "onlyLogo" | "onlyText"
}) {
    return (
        <>
            {mode === "twin" && (
                <TwinMode />
            )}
            {mode === "onlyText" && (
                <OnlyText />
            )}
            {mode === "onlyLogo" && (
                <OnlyLogo />
            )}
        </>
    );
};