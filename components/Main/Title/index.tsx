import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const YearsSpan = styled.span`
  color: #637381;
  font-size: 18px;
  line-height: 28px;
`;
const YearsNumber = styled.span`
  font-size: 80px;
  line-height: 94px;
  font-weight: 500;
  margin-inline: 1rem;
  color: #212b36;
`;
const YearsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const IndustryText = styled.h4`
  color: #212b36;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  margin-block: 16px;
  max-width: 992px;
  text-align: center;
`;
const CustomersText = styled.div`
  color: #637381;
  font-size: 18px;
  line-height: 28px;
  max-width: 736px;
  margin-block: 16px;
  text-align: center;
`;

const MainTitle = () => {
  return (
    <Wrapper>
      <YearsWrapper>
        <YearsSpan>Over</YearsSpan>
        <YearsNumber>20</YearsNumber>
        <YearsSpan>Years</YearsSpan>
      </YearsWrapper>
      <IndustryText>
        With over two decades industry experience, StripeHomes is the ideal
        choice for homebuilding, residential developments and build to rent
        accommodation.
      </IndustryText>
      <Image
        width={20}
        height={32.3}
        alt='logo'
        src='/images/logo-no-text.png'
      />
      <CustomersText>
        Passionate about quality and bespoke property developments for first
        time buyers, homeowners & students.
      </CustomersText>
    </Wrapper>
  );
};

export default MainTitle;
