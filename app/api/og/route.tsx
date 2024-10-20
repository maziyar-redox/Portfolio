import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const mono = fetch(
    new URL("../../../public/font/RobotoMono-Regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
    try {
        const getFont = await mono;
        const { searchParams } = req.nextUrl;
        const title = searchParams.get("title");
        const firstTag = searchParams.get("tag");
        const date = searchParams.get("date");
        const author = searchParams.get("author");
        if (!title || !firstTag || !date || !author) {
            return new Response("No Data provided", { status: 500 });
        };
        const githubUrl = `https://avatars.githubusercontent.com/${author}`;
        return new ImageResponse(
            (
                <div style={{
                    "display": "flex",
                    "position": "relative",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "width": "100%",
                    "height": "100vh",
                    "backgroundColor": "#000000"
                }}>
                    <div style={{
                        "display": "flex",
                        "position": "absolute",
                        "top": "1.25rem",
                        "left": "1.25rem",
                        "flexDirection": "row",
                        "columnGap": "0.75rem",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <div style={{
                            "display": "flex",
                            "overflow": "hidden",
                            "justifyContent": "center",
                            "alignItems": "center",
                            "borderRadius": "9999px",
                            "width": "2.5rem",
                            "height": "2.5rem"
                        }}>
                            <img alt={githubUrl} style={{
                                "width": "100%",
                                "height": "100%"
                            }} height={100} width={100} src={githubUrl} />
                      </div>
                        <span style={{
                            "color": "#ffffff"
                        }}>
                            {author}
                        </span>
                    </div>
                    <h1 style={{
                        "fontFamily": "Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
                        "fontSize": "6rem",
                        "lineHeight": "1",
                        "color": "#ffffff"
                    }}>
                      {title}
                    </h1>
                    <span style={{
                        "position": "absolute",
                        "bottom": "1.25rem",
                        "left": "1.25rem",
                        "fontSize": "1rem",
                        "lineHeight": "2rem",
                        "color": "#ffffff"
                    }}>
                        {date}
                    </span>
                    <div style={{
                        "display": "flex",
                        "position": "absolute",
                        "top": "1.25rem",
                        "right": "1.25rem",
                        "flexDirection": "row",
                        "justifyContent": "center",
                        "alignItems": "center"
                    }}>
                        <span style={{
                            "color": "#DC2626"
                        }}>
                        #
                        </span>
                        <span style={{
                            "fontSize": "1.125rem",
                            "lineHeight": "1.75rem",
                            "color": "#ffffff"
                        }}>
                            {firstTag}
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 650,
                fonts: [
                    {
                        name: "Roboto Mono",
                        data: getFont,
                        style: "normal"
                    }
                ],
            },
        );
    } catch (err: unknown) {
        return new Response("Failed to generate image", { status: 500 });
    };
};