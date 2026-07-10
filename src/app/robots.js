
export default function robots(){
  return {
    rules: {
      userAgent: '*',
      disallow: '/', // <--- Mengunci Google di seluruh halaman
    },
  }
}