import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { ShoppingContext } from '../App';

function Navbar() {

    const { total } = useContext(ShoppingContext);
    //shows dropdown
    function drop() {
        if (document.querySelector(".hideItem").style.display === "block") {
            document.querySelector(".hideItem").style.display = "none";
        } else {
            document.querySelector(".hideItem").style.display = "block";
        };
    };
    //hides dropdown
    function bye() {
        document.querySelector(".hideItem").style.display = "none";
    }
    return (
        <div className='navbar'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1>You Ukes</h1>
            </Link>
            <div classname="menuCartAlign">
                <div className="cartIcon">
                    <FontAwesomeIcon icon={faShoppingCart} /> (<a>{total}</a>)
                </div>
                <ul onMouseLeave={bye}>
                    <Link to="/" onClick={drop} class="displayMenu" style={{ textDecoration: 'none', color: 'black' }}>
                        <li>Home</li>
                    </Link>
                    <div class="hideItem" >
                        <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                            <li>Shop</li>
                        </Link>
                        <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                            <li className="lastLi">Cart</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;