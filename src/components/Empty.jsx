import PropTypes from 'prop-types';
import styled from 'styled-components';

const Empty = ({ message }) => {
  return (
    <EmptyContainer>
      <Message>{message}</Message>
    </EmptyContainer>
  );
};

Empty.propTypes = {
  message: PropTypes.string.isRequired,
};

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #666;
`;

export default Empty;
