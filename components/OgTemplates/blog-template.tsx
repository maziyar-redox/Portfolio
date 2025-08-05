import { OpenGraphImageParams } from "@/lib/og-image";
import { ImageResponse } from "next/og";
import type { FontMap } from "../../app/api/og-image/fonts";

export async function generateBannerImage (
    { blog_name }: OpenGraphImageParams,
    fonts: FontMap
) {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    padding: "80px",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <main style={{ textAlign: "center" }}>
                        {/* Page title - dynamic */}
                        <h1 style={{
                            fontSize: "72px",
                            fontWeight: "700",
                            color: "#fff",
                            marginBottom: "24px"
                        }}>
                            {blog_name}
                        </h1>
                    </main>
                </div>
                {/* Footer */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "40px",
                    borderTop: "2px solid #333"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img
                                width={40}
                                height={40}
                                src="https://avatars.githubusercontent.com/u/105216969?v=4"
                                style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "8px",
                                objectFit: "cover"
                                }}
                                alt="red0x avatar"
                            />
                            <span style={{ fontSize: "20px", color: "#fff" }}>@red0x</span>
                        </div>
                    </div>
                    <span style={{ color: "#9ca3af", fontSize: "18px" }}>Exploring the digital frontier</span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [fonts["inter-semibold"], fonts["inter-regular"]],
        }
    );
};