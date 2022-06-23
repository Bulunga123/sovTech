import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

const Nav = styled.nav`
  height: 80px;
  background: #0000FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
`;


const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>Bongani Bulunga</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;