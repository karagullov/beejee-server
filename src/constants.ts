export const __prod__ = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT || 5000;
export const cookieDomain = __prod__ ? ".vercel.app" : undefined;
