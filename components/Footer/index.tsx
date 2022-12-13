import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import Links from './Links';

const Wrapper = styled.footer`
  background-color: #212b36;
  width: 100%;
  color: #919eab;
  padding: 2rem;
  padding-bottom: 0;
  h5 {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }
  h6 {
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
`;
const CopyrightContent = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding-block: 34px;
  span {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <EmailForm />
      <Links />
      <CopyrightContent>
        © 2022 Stripe Homes | <span>Privacy Policy</span> |{' '}
        <span>Terms & Conditions</span>
      </CopyrightContent>
    </Wrapper>
  );
};

export default Footer;
