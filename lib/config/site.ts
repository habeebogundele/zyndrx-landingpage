const DEFAULT_APP_URL = "https://app.zyndrx.soothetechnologies.com";

export function getAppUrl(): string {
  const url = process.env.NEXT_PUBLIC_APP_URL ?? DEFAULT_APP_URL;
  return url.replace(/\/$/, "");
}
