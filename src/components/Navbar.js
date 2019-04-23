import styled from 'styled-components'

const Navbar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #365DFF;
  color: white;

  & .link {
    color: #4BA7FF;
    text-decoration: none;
  }

  & .link:active {
    transform: scale(0.9);
  }

  & .selected {
    color: white;
  }
`

export default Navbar