import '../Assets/div-card-styles.css';

function Cart() {
    return (
        <div className='shopping-cart-page'>
            <div classname="zoom" id="card-ukulele">
                <h2 className='cart-title-style'>Shopping Cart</h2>
                <div className="cart-item">
                  
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62xcfW9afQTKFtGiJfnKL_Z23EI7cEB1qPg&usqp=CAU" alt="blue electric ukulele" class="zoom" className="card-img" />
                    <p style={{ display: "flex", alignItems: "center"}}>FlightPath Electric Tenor Ukulele</p>
                  
                    <div className="card-buttonAlign-cart">
                        <p><button id="decrement">-</button> <span id="quantity">1</span> <button id="increment">+</button></p>
                    </div>
                    <p className="price">$250</p>
                </div>
                <button>Proceed to Payment</button>
            </div>

        </div>
    )
}
export default Cart;