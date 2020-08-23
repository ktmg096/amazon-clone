import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <nav className = "header">

            {/* Logo */}

            <Link to = '/'>
                <img 
                    className = "header__logo" 
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt = "">
                </img>
            </Link>
            
            {/* Search Box */}
            
            <div className = 'header__search'>
                <input type = 'text' className = 'header__searchInput' />
                <SearchIcon className = 'header__searchIcon' />
            </div>

            {/* 3 Links */}

            <div className = 'header__nav'>
                <Link to = '/login' className = 'header__link'>
                    <div className = 'header__option'>
                        <span className = 'header__option__lineone'>Hello,</span>
                        <span className = 'header__option__linetwo'>Sign In</span>
                    </div>
                </Link>

                <Link to = '/' className = 'header__link'>
                    <div className = 'header__option'>
                        <span className = 'header__option__lineone'>Returns</span>
                        <span className = 'header__option__linetwo'>& Orders</span>
                    </div>
                </Link>

                <Link to = '/' className = 'header__link'>
                    <div className = 'header__option'>
                        <span className = 'header__option__lineone'>Your</span>
                        <span className = 'header__option__linetwo'>Prime</span>
                    </div>
                </Link>

            </div>

            {/* Basket icon with number */}

            <Link to = '/checkout' className = 'header__link'>
                <div className = 'header__optionBasket'>
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />
                    
                    {/* No. of items in the basket */}
                    <span className = 'header__option__linetwo header__basketCount'>0</span>
                </div>
            </Link>
            
        </nav>
    )
}

export default Header
