import type { APIRoute } from "astro"

const COOKIE_NAME = "portal_fs_auth"

export const GET: APIRoute = async ({ cookies }) => {
  const auth = cookies.get(COOKIE_NAME)?.json() || { active: null, keys: {} }
  return new Response(JSON.stringify(auth), { status: 200 })
}

export const POST: APIRoute = async ({ cookies, request }) => {
  const data = await request.json()
  cookies.set(COOKIE_NAME, data, {
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: "strict",
  })
  return new Response(JSON.stringify({ success: true }), { status: 200 })
}

export const DELETE: APIRoute = async ({ cookies }) => {
  cookies.delete(COOKIE_NAME, { path: "/" })
  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
