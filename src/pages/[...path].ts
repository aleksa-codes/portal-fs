import { generateDimensionalContent } from "@/utils/ai-provider"
import type { APIRoute } from "astro"

const getContentType = (extension: string): string => {
  const types: Record<string, string> = {
    html: "text/html; charset=utf-8",
    css: "text/css; charset=utf-8",
    js: "application/javascript; charset=utf-8",
    json: "application/json; charset=utf-8",
  }
  return (
    types[extension] ||
    (extension ? "text/plain; charset=utf-8" : "text/html; charset=utf-8")
  )
}

export const GET: APIRoute = async ({ params, cookies }) => {
  try {
    const { path = "" } = params
    if (path.length > 100) throw new Error("Path too long")

    // Retrieve Auth State safely
    const authCookie = cookies.get("portal_fs_auth")?.json()

    if (
      !authCookie ||
      !authCookie.active ||
      !authCookie.keys[authCookie.active]
    ) {
      return new Response(
        `
        <body style="background:#120c2b; color:#ff2a2a; font-family:monospace; display:flex; justify-content:center; align-items:center; height:100vh; text-align:center; margin:0;">
           <div style="border: 4px dashed #ff2a2a; padding: 40px; background: rgba(0,0,0,0.5);">
             <h1 style="font-size: 3rem; margin:0 0 20px 0;">[ PORTAL COLLAPSE ]</h1>
             <p style="font-size: 1.5rem;">No power core routed! The dimensional tether snapped.</p>
             <a href="/" style="display:inline-block; margin-top:20px; color:#94f549; text-decoration:none; border:2px solid #94f549; padding: 10px 20px;">Return to Gadget Console</a>
           </div>
        </body>`,
        { status: 401, headers: { "Content-Type": "text/html" } }
      )
    }

    const extension = path.includes(".") ? path.split(".").slice(-1)[0] : ""
    const contentType = getContentType(extension)

    // Call modular Vercel AI SDK wrapper
    let content = await generateDimensionalContent(
      path,
      extension,
      authCookie.active,
      authCookie.keys[authCookie.active]
    )

    // Wrap standard HTML requests in the Rick and Morty action bar
    if (extension === "html" || extension === "") {
      content = `
      <head>
        <meta charset="utf-8" />
      </head>
      <body style="display: flex; flex-direction: column; height: 100vh; justify-content: space-between; background: #120c2b; font-family: 'Arial', sans-serif; margin: 0; padding: 0; overflow: hidden;">
        
        <!-- The actual generated code running in an isolated frame -->
        <iframe style="flex: 1; width: 100%; border: none; overflow-y: auto; background: #fff;" src="data:text/html;charset=utf-8,${encodeURIComponent(content)}"></iframe>
        
        <!-- R&M Themed Action Bar -->
        <div style="text-align: center; background: #e4e6eb; border-top: 6px solid #1a1a1a; padding: 20px; box-shadow: 0 -10px 20px rgba(0,0,0,0.5); position: relative; z-index: 100;">
          <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
          <div style="display: inline-flex; gap: 20px;">
            <a href="/" 
               style="background: #ff4747; color: #fff; font-family: 'Patrick Hand', cursive; font-size: 1.5rem; font-weight: bold; padding: 10px 25px; border-radius: 12px; border: 4px solid #1a1a1a; text-decoration: none; box-shadow: inset -3px -3px 0px #cc0000, 4px 4px 0px rgba(0,0,0,0.3); transition: transform 0.1s; display:flex; align-items:center; gap:8px;"
               onmousedown="this.style.transform='translate(4px,4px)'; this.style.boxShadow='none';"
               onmouseup="this.style.transform='none'; this.style.boxShadow='inset -3px -3px 0px #cc0000, 4px 4px 0px rgba(0,0,0,0.3)';">
              ❌ Close Portal
            </a>
      
            <a href="data:text/html;charset=utf-8,${encodeURIComponent(content)}" download="${path?.split(".")[0] || "dimension"}.html" 
               style="background: #5ceb34; color: #1a1a1a; font-family: 'Patrick Hand', cursive; font-size: 1.5rem; font-weight: bold; padding: 10px 25px; border-radius: 12px; border: 4px solid #1a1a1a; text-decoration: none; box-shadow: inset -3px -3px 0px #3db81e, 4px 4px 0px rgba(0,0,0,0.3); transition: transform 0.1s; display:flex; align-items:center; gap:8px;"
               onmousedown="this.style.transform='translate(4px,4px)'; this.style.boxShadow='none';"
               onmouseup="this.style.transform='none'; this.style.boxShadow='inset -3px -3px 0px #3db81e, 4px 4px 0px rgba(0,0,0,0.3)';">
              💾 Extract File
            </a>
          </div>
        </div>
      </body>`
    }

    return new Response(content, {
      status: 200,
      headers: { "Content-Type": contentType },
    })
  } catch (error) {
    console.error("Portal Error:", error)
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Dimensional Tear Detected",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
