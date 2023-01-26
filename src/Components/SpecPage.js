import React from "react"


function SpecPage() {
    return (
        <div className='shopping-cart'>
            
            <div classname='zoom' id='card-ukulele'>
          
            <button>Go back</button>
    
                            <h2>Flight Pathfinder Electric Tenor Ukulele</h2>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62xcfW9afQTKFtGiJfnKL_Z23EI7cEB1qPg&usqp=CAU' alt='blue electric ukulele' class='zoom' className='card-img' />
                <p className='price'>$250</p>
                <div className='card-buttonAlign'>
                    <button id="addToCart">Add to Cart</button>
                    <p><button id='decrement'>-</button> <span id='quantity'>1</span> <button id='increment'>+</button></p>
                </div>
            </div>
        </div>
    );
}

export default SpecPage;

