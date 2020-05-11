import React from 'react'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div>
           <Footer />
            <h1>Hunter</h1>
            {props.children}
        </div>
    )
}

export default Layout