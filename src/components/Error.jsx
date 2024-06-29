import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.1); /* Optional: to make the error more visible */
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 0, 0, 0.3);
`;

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: #ff0000;
`;

export default Error;
