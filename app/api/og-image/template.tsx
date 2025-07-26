import { OpenGraphImageParams } from "@/lib/og-image";
import { ImageResponse } from "next/og";
import type { FontMap } from "./fonts";

export const generateBannerImage = (
    { title, label, brand }: OpenGraphImageParams,
    fonts: FontMap
) => {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000",
                    padding: "48px",
                    fontFamily: "Inter, sans-serif"
                }}
                >
                <div
                    style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "64px"
                    }}
                >
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#fff" }}>RED0X BLOG</div>
                    <div style={{ fontSize: "18px", color: "#9ca3af" }}>{new Date().toLocaleDateString()}</div>
                </div>
                <div style={{ display: "flex", flex: 1, gap: "48px" }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h1
                        style={{
                        fontSize: "72px",
                        fontWeight: "700",
                        color: "#fff",
                        lineHeight: 1,
                        marginBottom: "32px"
                        }}
                    >
                        Modern Web Development with Next.js
                    </h1>
                    <p style={{ fontSize: "24px", color: "#d1d5db", marginBottom: "-10px" }}>
                        Building fast, scalable applications using cutting-edge technology
                    </p>
                    </div>
                    <div
                    style={{
                        width: "33.33%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: "2px solid #ffff",
                        paddingLeft: "48px"
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row"
                        }}
                    >
                        <h1
                        style={{
                            color: "white",
                            fontSize: "48px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            marginTop: "16px"
                        }}
                        >
                        MR_
                        </h1>
                        <h1
                        style={{
                            color: "red",
                            fontSize: "48px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            marginTop: "16px"
                        }}
                        >
                        RED
                        </h1>
                        <h1
                        style={{
                            color: "white",
                            fontSize: "48px",
                            fontWeight: "700",
                            letterSpacing: "2px",
                            marginTop: "16px"
                        }}
                        >
                        0X
                        </h1>
                    </div>
                    </div>
                </div>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "64px",
                    paddingTop: "32px",
                    borderTop: "2px solid #333"
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <img
                        width={40}
                        height={40}
                        src="https://dl.ebooksworld.ir/sooth3r/images/csnutshell.jpg"
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
                    <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ padding: "4px 12px", border: "1px solid #ffff", color: "#fff", fontSize: "18px" }}>
                        #webdev
                    </span>
                    <span style={{ padding: "4px 12px", border: "1px solid #ffff", color: "#fff", fontSize: "18px" }}>
                        #physics
                    </span>
                    <span style={{ padding: "4px 12px", border: "1px solid #ffff", color: "#fff", fontSize: "18px" }}>
                        #mechatronics
                    </span>
                    </div>
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