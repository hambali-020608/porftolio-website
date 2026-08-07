import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET(){
      const { token, expire, signature } = getUploadAuthParams({
        privateKey: process.env.NEXT_PRIVATE_IMAGEKIT_KEY,
        publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY
  
    })

    return Response.json({ token, expire, signature, publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY })
}