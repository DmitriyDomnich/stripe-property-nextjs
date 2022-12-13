import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Socials from 'components/Header/Socials';

const Wrapper = styled.section`
  margin-block: 5rem;
  padding: 7.5%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  h5 {
    margin-bottom: 1.5rem;
    text-align: left;
  }
  .last-line {
    margin-top: 0.5rem;
    margin-bottom: 1.75rem;
  }
  .adress {
    text-decoration: underline;
    margin-bottom: 1.75rem;
  }
  ul,
  li {
    list-style: none;
  }
  li {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
    :not(:first-child) {
      margin-block: 0.85rem;
    }
    :first-child {
      margin-top: 0;
    }
  }
`;

const LinkSection = styled.section`
  flex-basis: 22%;
`;

const Links = () => {
  return (
    <Wrapper>
      <LinkSection>
        <Image src='/images/Logo.png' height={48} width={139} alt='logo' />
      </LinkSection>
      <LinkSection>
        <h5>Contacts</h5>
        <p>First Floor, Forth Banks,</p>
        <p className='last-line'>Newcastle, NE1 3PA United Kingdom</p>
        <p className='adress'>info@stripehomes.co.uk</p>
        <h6>
          Newcastle: 0191 249 9292 <br /> Birmingham: 0121 716 2556
        </h6>
      </LinkSection>
      <LinkSection>
        <h5>Links</h5>
        <ul>
          <li>About us</li>
          <li>Out locations</li>
          <li>Statement</li>
          <li>Reviews</li>
          <li>News</li>
        </ul>
      </LinkSection>
      <LinkSection>
        <h5>Social</h5>
        <Socials
          direction='row'
          borderColor='rgba(255, 255, 255, 0.1);'
          color='#fff'
        />
      </LinkSection>
    </Wrapper>
  );
};

export default Links;
