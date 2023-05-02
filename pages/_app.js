import '@/styles/globals.css'
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from "./../redux/store"

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap")
  },[])
  return (
    <Provider store={store()}>
      <Component {...pageProps} />
    </Provider>
  )
}
