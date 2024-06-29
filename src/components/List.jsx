import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({ items, renderItem }) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={index}>
          {renderItem(item)}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledListItem = styled.li``;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;
