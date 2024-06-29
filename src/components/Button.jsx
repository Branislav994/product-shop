import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const Button = ({ children, onClick, variant, disabled, ...rest }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

const primaryStyles = css`
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #a1c4fd;
    cursor: not-allowed;
  }
`;

const secondaryStyles = css`
  background-color: #2ecc71;
  color: white;

  &:hover {
    background-color: #27ae60;
  }

  &:disabled {
    background-color: #a3e4d7;
    cursor: not-allowed;
  }
`;

const dangerStyles = css`
  background-color: #e74c3c;
  color: white;

  &:hover {
    background-color: #c0392b;
  }

  &:disabled {
    background-color: #f5b7b1;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  ${({ variant }) => variant === 'primary' && primaryStyles}
  ${({ variant }) => variant === 'secondary' && secondaryStyles}
  ${({ variant }) => variant === 'danger' && dangerStyles}

  &:disabled {
    opacity: 0.6;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  disabled: false,
};

export default Button;
