import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    const path =request.nextUrl.pathname

    const isPublicePath = path === '/login' || path === '/signup'

    const token =request.cookies.get('token')?.value || ''

    if(isPublicePath && token){
        return NextResponse.redirect(new URL ('/', request.nextUrl))
    }
    if(!isPublicePath && !token){
        return NextResponse.redirect(new URL ('/login', request.nextUrl))
    }
}             
 

export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ],
}