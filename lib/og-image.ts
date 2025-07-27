import { config } from "@/config/build-config";
import { createHmac } from "crypto";
import urlJoin from "url-join";

// Secret is used for signing and verifying the url to prevent misuse of your service to generate images for others
const secret = config.ogImageSecret;

export interface OpenGraphImageParams {
    blog_name: string;
};

export const signOgImageParams = ({
    blog_name
}: OpenGraphImageParams) => {
    const valueString = `${blog_name}`;
    const signature = createHmac("sha256", secret).update(valueString).digest("hex");
    return { valueString, signature };
};

export const verifyOgImageSignature = (
    params: OpenGraphImageParams,
    signature: string
) => {
    const { signature: expectedSignature } = signOgImageParams(params);
    return expectedSignature === signature;
};

export const signOgImageUrl = (param: OpenGraphImageParams) => {
    const queryParams = new URLSearchParams();
    queryParams.append("blog_name", param.blog_name);
    const { signature } = signOgImageParams(param);
    queryParams.append("s", signature);
    return urlJoin(config.baseUrl, `/api/og-image/?${queryParams.toString()}`);
};