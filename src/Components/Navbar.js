import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderNone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    //if ul does not equal hover then disappear the dropdown
    //   const box = document.getElementsByTagName('ul');

    //   if (!box.contains(event.target)) {
    //     box.style.display = 'none';
    //   }
    function drop() {

        if (document.querySelector(".hideItem").style.display === "block") {
            document.querySelector(".hideItem").style.display = "none";
        } else { document.querySelector(".hideItem").style.display = "block";
    setTimeout(bye, 3000);
    };
    function bye(){
      
        document.querySelector(".hideItem").style.display="none";
      
    }
    };

    return (
        <div className='navbar'>
             <Link to="/" style={{ textDecoration: 'none' }}>
                <h1>You Ukes</h1>
            </Link>
                        {/* <select name="menu" id="menu">
            <option value="menu">
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    Menu
                </Link>
                </option>
                <option value="home">
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    Home
                </Link>
                </option>
                <option value="shop">
                <Link to="/shop" style={{ textDecoration: 'none', color: 'blue' }}>
                    Shop
                </Link>
                </option>
                <option value="cart">
                <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                    Cart
                </Link>
                </option>
            </select> */}
            <div classname="menuCartAlign">       
            <div className="cartIcon">
            <FontAwesomeIcon icon={faShoppingCart} /> (<a>0</a>)
            </div>
     
                     <ul>
                {/* <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <li className="displayMenu" >Menu</li>
                </Link> */}

                    <Link to="/"  onClick={drop} class="displayMenu"style={{ textDecoration: 'none', color: 'black'}}>
                        <li>Home</li>
                    </Link>
                    
                <div  class="hideItem" >
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