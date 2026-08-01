import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTE = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/services","", "/about", "/contact", "/technicians"];

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // console.log(pathname);

  // console.log(request.nextUrl, "request");

  const accessToken = request.cookies.get("accessToken")?.value;
  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;

  let userRole = null;
  if (decodedToken) {
    userRole = decodedToken.role;
  }

  if (accessToken && AUTH_ROUTE.includes(pathname)) {
    if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url));
    } else if (userRole === "TECHNICIAN") {
      return NextResponse.redirect(
        new URL("/technician-dashboard", request.url),
      );
    } else if (userRole === "CUSTOMER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  const isPublicRoute = PUBLIC_ROUTE.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isAuthRoute = AUTH_ROUTE.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
// accessToken is not present and the route is not public or auth, redirect to login
  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // authirization logic for admin and technician routes
  if (pathname.startsWith("/dashboard") && userRole!== "CUSTOMER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
    
  }
  else if (pathname.startsWith("/technician-dashboard") && userRole !== "TECHNICIAN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  else if (pathname.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }


  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
    // "/dashboard/:path*",
    // "/technician-dashboard/:path*",
    // "/admin-dashboard/:path*"

    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
  ],
};
