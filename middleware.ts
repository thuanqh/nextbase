export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/profile", "/dashboard/:path*"],
  // matcher: ["/((?!register|api|login).*)"],
}
