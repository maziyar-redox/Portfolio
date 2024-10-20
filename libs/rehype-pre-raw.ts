import { visit } from "unist-util-visit";

export const preProcess = () => (tree: any) => {
    visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") return;
            node.__rawstring__ = codeEl.children?.[0].value;
        };
    });
};

export const postProcess = () => (tree: any) => {
    visit(tree, "element", (node) => {
        if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
                return;
            };
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
                return;
            };
            preElement.properties["__rawstring__"] = node.__rawstring__;
        };
    });
};