import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the root path
  if (request.nextUrl.pathname === '/') {
    // Redirect to /admin
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // Continue with the request for all other paths
  return NextResponse.next()
}

export const config = {
  // Match only the root path
  matcher: '/',
}
