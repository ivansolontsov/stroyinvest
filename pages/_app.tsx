import AppLayout from '../components/Layouts/AppLayout'
import '../styles/normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../lib/store/store'
import { Provider } from 'react-redux'
import { ContactUs } from '../components/ContactUs'
import { useEffect, useState } from 'react'
import { Portal } from 'react-portal';
import Router from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    });
    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    });
    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    });
  }, [Router])

  return (
    <Provider store={store}>
      <AppLayout>
        <ContactUs isModal={true} isOrder={true} />
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}
