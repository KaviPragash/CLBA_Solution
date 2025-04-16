import IndexPage from "../components/index";

export const metadata ={
  title: "CLBAS",
  icons: {
      icon: [
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', rel: 'shortcut icon' }
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
      title: 'MyWebSite'
    },
  description: "We provide direct access to expert legal & accounting professionals to resolve corporate issues efficiently and amicably."
}

export default function Mainpage() {
    return(
      <IndexPage />
    )
}