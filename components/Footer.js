import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: #0000FF;
  color: #000000;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Bongani Bulunga</p>
    </FooterSection>
  );
};

export default Footer;