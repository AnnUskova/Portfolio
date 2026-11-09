import { NextResponse, type NextRequest } from "next/server";

const maintenanceAssets = new Set([
  "/maintenance-sticker.webp",
  "/favicon.ico",
  "/favicon.png",
  "/apple-touch-icon.png",
  "/og_main.png",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname.startsWith("/_vercel/") ||
    maintenanceAssets.has(pathname)
  ) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.pathname = "/";
  destination.search = "";

  // Keep this temporary so the original pages can return after the redesign.
  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: ["/((?!_next/).*)"],
};
