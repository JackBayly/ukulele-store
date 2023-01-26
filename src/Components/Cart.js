import { useState, useContext } from "react";
import { ShoppingContext } from '../App';
function Cart() {
    const { items, setItems } = useContext(ShoppingContext);
    const { total, setTotal } = useContext(ShoppingContext);
    const { quantityTotal } = useContext(ShoppingContext);
    const { ukulele, setUkulele } = useContext(ShoppingContext);
    const { increment, decrement, name } = useContext(ShoppingContext);
    //map through array
    //if item quantity is more than 0 than render it on screen
    const filter = ukulele.filter(checkQuantity);

    function checkQuantity(item) {
        if (item.quantity > 0) {
            return item
        }
    }

    //map through filter
    //multiply the price times the quantity
    //add each up
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
    const list = filter.map((item) =>
        // <li>{item.name} {item.quantity}</li>

        <div className="cart-item">

            <img src={item.imageUrl} alt={item.name} class="zoom" className="card-img" />
            <p style={{ display: "flex", alignItems: "center", fontSize: "large", fontWeight: "bold" }}>{item.name}</p>

            <div className="card-buttonAlign-cart">
                <h2 style={{ fontSize: "medium", fontWeight: "bold" }}>Quantity:</h2>
                <p><button id="decrement" onClick={() => decrementAndQuantityTotal(item.name)}>-</button> <span id="quantity" style={{ fontSize: "medium", fontWeight: "200" }}> {item.quantity}</span> <button id="increment" onClick={() => incrementAndQuantityTotal(item.name)}>+</button></p>
            </div>
            <p className="price">Item Price: <span style={{ fontSize: "medium", fontWeight: "200" }}>${item.price}</span> <br />Total: <span style={{ fontSize: "medium", fontWeight: "200" }}>${item.price * item.quantity}</span></p>

            {/* <p style={{fontSize:"x-large", fontWeight:"bold"}}>Total:</p><p style={{fontSize:"x-large", fontWeight:"bold"}}>$250</p> */}
        </div>

    );

    console.log(ukulele)
    console.log(list)
    console.log(filter)
    console.log(totalPriceTimesQuantity)
    const Book = ({ name, price, imageUrl, quantity }) => {

        //     <div className="cart-item">

        //     <img src={imageUrl} alt={name} class="zoom" className="card-img" />
        //     <p style={{ display: "flex", alignItems: "center"}}>{name}</p>

        //     <div className="card-buttonAlign-cart">
        //         <p><button id="decrement">-</button> <span id="quantity">{quantity}</span> <button id="increment">+</button></p>
        //     </div>
        //     <p className="price" style={{fontSize:"x-large", fontWeight:"400"}}>{price}</p>
        //     <p style={{fontSize:"x-large", fontWeight:"bold"}}>Total:</p><p style={{fontSize:"x-large", fontWeight:"bold"}}>$250</p>
        // </div>
    }
    // function List() {
    //     const listItems = people.map(person =>
    //       <li>{person}</li>
    //     );
    //     return <ul>{listItems}</ul>;
    //   }

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