import styled from 'styled-components';

const Header = () => {
  return(
    <HeaderContainer>
      <HeaderTitle>Shopping Cart</HeaderTitle>
      <div>
        <HeaderUserName>John Doe</HeaderUserName>
      </div>
    </HeaderContainer>
)};

const HeaderContainer = styled.header`
  background-color: gray;
  position: fixed;
  right: 0%;
  left: 0%;
  top: 0%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-bottom: 80px;
`

const HeaderTitle = styled.h1`
    color: black;
`

const HeaderUserName = styled.p`
    color: black;
`

export default Header;