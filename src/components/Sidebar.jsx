import { useState } from 'react';
import styled from 'styled-components';
import useCartStore from '../store/useCartStore';
import useProducts from '../hooks/useProducts';
import Loader from './Loader';
import Empty from './Empty';
import Button from './Button';

const Sidebar = () => {
  const { removeFromCart, addToCart, clearCart, cart } = useCartStore();
  const { data: products, isLoading, isError } = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <Loader />;
  if (!products || isError) return null;

  const cartItems = Object.keys(cart).map((productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    return product ? { ...product, quantity: cart[productId] } : null;
  }).filter(Boolean);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Cart' : 'Open Cart'}
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>Shopping Cart</SidebarHeader>
        {cartItems.length > 0 ? (
          <>
            <CartItemList>
              {cartItems.map((item) => (
                <CartItem key={item.id}>
                  <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <ItemQuantity>Quantity: {item.quantity} - ${item.price}</ItemQuantity>
                    <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
                  </ItemDetails>
                  <ButtonGroup>
                    <Button variant="secondary" onClick={() => addToCart(item.id)}>Add Quantity</Button>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </ButtonGroup>
                </CartItem>
              ))}
            </CartItemList>
            <TotalPrice>Total: ${totalPrice}</TotalPrice>
            <Button variant="primary" onClick={clearCart}>Clear Cart</Button>
          </>
        ) : (
          <Empty message="Your cart is empty." />
        )}
      </SidebarContainer>
    </>
  );
};

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SidebarContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #f7f7f7;
  border-left: 1px solid #e0e0e0;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  position: sticky;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    width: 80%;
    position: fixed;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.h2`
  margin: 0 0 20px;
  font-size: 1.5rem;
  color: #333;
`;

const CartItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ItemQuantity = styled.span`
  color: #666;
`;

const ItemPrice = styled.span`
  color: #2ecc71;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
`;

export default Sidebar;
