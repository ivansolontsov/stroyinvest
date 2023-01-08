import React, { useEffect } from 'react'
import Container from '../components/Layouts/AppLayout'

type Props = {}

const ErrorNotFound = (props: Props) => {

    return (
        <section className='content' style={{
            minHeight: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            <h1
                className='hero__wrapper'
                style={{ color: 'white' }}
            >
                Error 404, Page Not Found
            </h1>
        </section >
    )
}

export default ErrorNotFound