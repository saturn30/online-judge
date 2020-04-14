import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.scss'

const index = (props) => {
    return (
        <div className="main">
            <Header />
            <div className="layout-content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default index
