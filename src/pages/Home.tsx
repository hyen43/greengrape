import styled from '@emotion/styled';

const HomeWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
`;

const Home = () => <HomeWrapper />;

export default Home;
