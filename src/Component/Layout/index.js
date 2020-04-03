import React from 'react'
import Header from './Header'
import './Layout.css'

const index = (props) => {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>

        </div>
    )
}

export default index
