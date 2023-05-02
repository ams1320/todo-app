import '@/styles/globals.css'
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import {wrapper} from "./../redux/store"

function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap")
  },[])
  return (
    
      <Component {...pageProps} />
    
  )
}
export default wrapper.withRedux(App)
