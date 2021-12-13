
import React from 'react'
import HeaderMenu from '../header/HeaderMenu'
import HeaderTop from '../header/HeaderTop'


const Header = ({programs}) => {



    return (
        <header>
            <div>
                <HeaderTop />
            </div>
            <div>
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header