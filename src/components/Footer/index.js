import React from 'react';
import FooterWrapper from './Footer.style';



const Footer = ({
  children,
  ...props
}) => {
  return <FooterWrapper {...props}>{children}</FooterWrapper>;
};

export default Footer;
