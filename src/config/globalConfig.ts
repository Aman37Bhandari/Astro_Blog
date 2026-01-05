const globalConfig: {
  deployment: {
    development: boolean;
    production: boolean;
  };
  timezone: string;
  port: number;
  authApiUrl: string;
  apiUrl: string;
} = {
  deployment: {
    development:
      (process.env.NEXT_PUBLIC_DEPLOYMENT as "development" | "production") ===
      "development",
    production:
      (process.env.NEXT_PUBLIC_DEPLOYMENT as "development" | "production") ===
      "production",
  },
  timezone: process.env.TZ || "Asia/Kolkata",
  port: parseInt(process.env.PORT || "3000") || 3000,
  authApiUrl: process.env.NEXT_PUBLIC_AUTH_API_URL || "",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
};

export default globalConfig;
