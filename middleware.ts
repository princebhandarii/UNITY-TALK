import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/api/uploadthing",
    "/components",
    "/components/DiscoverBar",
    "/components/Footer",
    "/components/Header",
    "/front",
    "/Home",
    "/Download",
    "/Nitro",
    "/Discover",
    "/Discover/Gaming",
    "/Discover/Gaming/playGame",
    "/Discover/Education",
    "/Discover/Entertainment",
    "/Discover/Music",
    "/Discover/News",
    "/Safety"
  ]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
