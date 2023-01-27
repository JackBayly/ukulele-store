import { useContext } from "react";
import { ShoppingContext } from '../App';

function Cart() {

    const { total } = useContext(ShoppingContext);
    const { quantityTotal } = useContext(ShoppingContext);
    const { ukulele } = useContext(ShoppingContext);
    const { increment, decrement } = useContext(ShoppingContext);

    //finds items with quantities greater than 0
    const filter = ukulele.filter(checkQuantity);

    function checkQuantity(item) {
        if (item.quantity > 0) {
            return item
        }
    }
    //calculates total price
    const totalPrice = filter.map((item) =>
        item.quantity * item.price

    );
    const totalPriceTimesQuantity = totalPrice.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    const incrementAndQuantityTotal = (item) => {
        increment(item);
        quantityTotal();
    }

    const decrementAndQuantityTotal = (item) => {
        decrement(item);
        quantityTotal();
    }
    //list to render
    const list = filter.map((item) =>
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name} class="zoom" className="card-img" />
            <p style={{ display: "flex", alignItems: "center", fontSize: "large", fontWeight: "bold" }}>{item.name}</p>
            <div className="card-buttonAlign-cart">
                <h2 style={{ fontSize: "medium", fontWeight: "bold" }}>Quantity:</h2>
                <p><button id="decrement" onClick={() => decrementAndQuantityTotal(item.name)}>-</button> <span id="quantity" style={{ fontSize: "medium", fontWeight: "200" }}> {item.quantity}</span> <button id="increment" onClick={() => incrementAndQuantityTotal(item.name)}>+</button></p>
            </div>
            <p className="price">Item Price: <span style={{ fontSize: "medium", fontWeight: "200" }}>${item.price}</span> <br />Subtotal: <span style={{ fontSize: "medium", fontWeight: "200" }}>${item.price * item.quantity}</span></p>
        </div>
    );
    return (
        <div className='shopping-cart-page'>
            <div classname="zoom" className="card-ukulele">
                <h2 className='cart-title-style'>Shopping Cart</h2>
                {list}
                <div style={{ textAlign: "left", width: "175px", margin: "auto" }}>
                    <p style={{ fontSize: "large", fontWeight: "bold" }}>Total Items: {total}</p>
                    <p style={{ fontSize: "large", fontWeight: "bold" }}>Total Price: ${totalPriceTimesQuantity}</p>
                </div>
                <button id="payButton" onClick={() => alert("Thank you for shopping with us!")}>Proceed to Payment</button>
            </div>

        </div>
    )
}
export default Cart;