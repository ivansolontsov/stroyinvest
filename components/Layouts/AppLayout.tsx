import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

type Props = {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default AppLayout