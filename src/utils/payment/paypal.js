import { Buffer } from "buffer";

// base URL will need to change for production applications
const base = "https://api-m.sandbox.paypal.com";

const CLIENT_ID =
    "AXTL4sTCSX5HlA9UvwkjfVoXcTxDjZqKbp_EUHptmv6c-6koiWW18_jr01DQ0IDMfPMcMp5vibQG38s-";
const APP_SECRET =
    "EGhb6n7TuouTD4mNu-yYlxP75rFaiyATpI_uqIW9nNVZHSMQN6eGO_2bMQ2YV8tilCvHav-L9Ya1S4fT";

// call this function to create your client token
export async function generateClientToken() {
    const accessToken = await generateAccessToken();
    const response = await fetch(`${base}/v1/identity/generate-token`, {
        method: "post",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Accept-Language": "en_US",
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data.client_token;
}

// access token is used to authenticate all REST API requests
async function generateAccessToken() {
    const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
        method: "post",
        body: "grant_type=client_credentials",
        headers: {
            Authorization: `Basic ${auth}`,
        },
    });
    const data = await response.json();
    return data.access_token;
}
