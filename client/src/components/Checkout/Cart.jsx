import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDetail from './CartDetail';

function CartDetails(props) {

    const removeItem = () => {
        
    }

    const user = useSelector(state => state.user);
    const renderItems = () => { 
        
            user.cart != 'undefined' ? 
                <>
                    <CartDetail 
                        products={user.cart}
                        removeItem={(id)=>removeItem(id)}
                    />
                </>
            : null
        
    }

    return(
        <div>
            {renderItems()}
        </div>
    )
}

export default CartDetails;