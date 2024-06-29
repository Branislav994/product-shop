import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useProducts from '../hooks/useProducts';
import useCartStore from '../store/useCartStore';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Button from '../components/Button';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data: products, isLoading, isError } = useProducts();
  const { addToCart } = useCartStore();

  if (isLoading) return <Loader />;
  if (isError) return <Error message="Failed to load product details" />;

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <Error message="Product not found" />;


  return (
    <ProductContainer>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductFeatures>
        <h4>Features:</h4>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </ProductFeatures>
      <ProductSpecifications>
        <h4>Specifications:</h4>
        <ul>
          {Object.entries(product.specifications).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}</li>
          ))}
        </ul>
      </ProductSpecifications>
      <ProductAdditionalInfo>
        <h4>Additional Information:</h4>
        <ul>
          {Object.entries(product.additionalInformation).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}</li>
          ))}
        </ul>
      </ProductAdditionalInfo>
      <ButtonContainer>
        <Button variant="secondary" onClick={() => addToCart(product.id)}>Add to Cart</Button>
      </ButtonContainer>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #2ecc71;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  margin: 20px 0;
  color: #666;
`;

const ProductFeatures = styled.div`
  margin-bottom: 20px;
  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #333;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const ProductSpecifications = styled.div`
  margin-bottom: 20px;
  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #333;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const ProductAdditionalInfo = styled.div`
  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #333;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ccc;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-bottom: 2rem;

  &:hover {
    background-color: #999;
  }
`;

export default Product;
