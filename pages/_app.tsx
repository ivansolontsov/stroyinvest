import AppLayout from '../components/Layouts/AppLayout'
import '../styles/normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store } from '../lib/store/store'
import { Provider } from 'react-redux'
import { ContactUs } from '../components/ContactUs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <ContactUs isModal={true} isOrder={true} />
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}
