import '@/styles/globals.css'
import Layout from '../comps/layout';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from 'react';



export default function App({ Component, pageProps }) {
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap")
  },[])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
