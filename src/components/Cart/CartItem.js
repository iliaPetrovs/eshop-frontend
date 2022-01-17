import React from "react";
import Button from '@material-ui/core/Button';
import { Wrapper } from './CartItem.style';

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <Wrapper className="d-flex justify-content-between p-4">
      <div>
        <h3>{item.name}</h3>
        <div className="information">
          <p>Price: {new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(item.price)}</p>
          <p>Total: {new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format((item.amount * item.price).toFixed(2))}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img style={{maxWidth: '80px', objectFit: 'cover', marginLeft: '40px'}} src={item.imageUrl} alt={item.name} />
    </Wrapper>
  );
}
