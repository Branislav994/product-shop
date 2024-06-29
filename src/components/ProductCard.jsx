import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

  const addProduct = (event, id) => {
    event.stopPropagation();
    addToCart(id);
  };

  const viewDetails = (event, id) => {
    event.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <Card>
      <CardHeader>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      </CardHeader>
      <ProductDescription>{product.description}</ProductDescription>
      <CardFooter>
        <Button variant="secondary" onClick={(event) => addProduct(event, product.id)}>
          Add to Cart
        </Button>
        <Button variant="primary" onClick={(event) => viewDetails(event, product.id)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2ecc71;
`;

const ProductDescription = styled.p`
  margin-bottom: 15px;
  color: #666;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    specifications: PropTypes.object.isRequired,
    additionalInformation: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProductCard;
