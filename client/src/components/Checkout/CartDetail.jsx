import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const CartDetail = ({products, removeItem}) => {

    const renderItems = () => (
        products ? 
            products.map((product, index) => (
                <ListGroup as="ul" key={`${product._id}${index}`}>
                    <ListGroup.Item as="li">
                        {product.name}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">{product.type}</ListGroup.Item>
                    <ListGroup.Item as="li">
                        {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            ))
        : null
    )

    return (
        <div>
            {renderItems()}
        </div>
    )
}

export default CartDetail;