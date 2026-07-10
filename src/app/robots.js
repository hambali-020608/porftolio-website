
export default function robots(){
  return {
    rules: {
      userAgent: '*',
      allow: '/', // <--- Mengunci Google di seluruh halaman
    },
  }
}