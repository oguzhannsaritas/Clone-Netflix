import '@/styles/globals.css'
// pages/_app.js
import {NextUIProvider} from '@nextui-org/react'

function App({ Component, pageProps }) {
  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  )
}

export default App;