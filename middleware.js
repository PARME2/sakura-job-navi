import { next } from "@vercel/edge";

export const config = {
  matcher: ["/((?!api/).*)"],
};

export default function middleware(request) {
  return next();
}
