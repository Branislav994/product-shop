import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';


const AppLayout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Sidebar />
    </Container>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export default AppLayout;
