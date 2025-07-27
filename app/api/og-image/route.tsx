import { verifyOgImageSignature } from "@/lib/og-image";
import type { NextRequest } from "next/server";
import { loadFonts } from "./fonts";
import { generateBannerImage } from "./template";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const blog_name = searchParams.get("blog_name");
    if (!blog_name) {
        return new Response("Missing Blog", { status: 400 });
    };
    const signature = searchParams.get("s") || "";
    const verified = verifyOgImageSignature(
        {
            blog_name: blog_name as string,
        },
        signature
    );
    if (!verified) {
        return new Response("Invalid request", { status: 400 });
    };
    const fonts = await loadFonts();
    return generateBannerImage({ blog_name }, fonts);
};