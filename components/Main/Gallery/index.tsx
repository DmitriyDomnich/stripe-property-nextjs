import Button from 'components/Button';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import StrokedText from '../StrokedText';

const Wrapper = styled.div`
  width: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6.5%;
  row-gap: 100px;
  & > * {
    display: flex;
    flex-direction: column;
  }
  * img {
    width: 100%;
  }
`;
const BedWrapper = styled.div`
  justify-content: flex-end;
  flex-basis: 55%;
  padding-top: 5rem;

  > :first-child {
    margin-left: 15%;
    margin-top: 184px;
  }
`;
const StreetWrapper = styled.div`
  flex-basis: 35%;
`;
const OfficeWrapper = styled.div`
  flex-basis: 40%;
  padding-top: 8rem;
  padding-left: 6rem;
`;
const RoomWrapper = styled.div`
  flex-basis: 50%;
`;
const FeaturedText = styled.div`
  max-width: 608px;
  margin-block: 64px;
  .title {
    font-weight: 500;
    font-size: 48px;
    line-height: 64px;
    color: #212b36;
  }
  .text {
    margin-top: 28px;
    margin-bottom: 42px;
    color: #637381;
    font-size: 18px;
    line-height: 28px;
  }
`;

const Gallery = () => {
  return (
    <Wrapper>
      <StrokedText margin='0 0 -85px 0'>Featured developments</StrokedText>
      <FlexContainer>
        <BedWrapper>
          <FeaturedText>
            <h4 className='title'>City Centre Apart-Hotel</h4>
            <div className='text'>
              Coming soon. Luxury apart-hotel perfectly located in Newcastle
              city centre to work and play.
            </div>
            <Button outline>Register your interest</Button>
          </FeaturedText>
          <Image src='/images/bed.png' height={800} width={1032} alt='bed' />
        </BedWrapper>
        <StreetWrapper>
          <Image
            src='/images/street.png'
            height={800}
            width={624}
            alt='street'
          />
          <FeaturedText>
            <h4 className='title'>25 St Paul’s</h4>
            <div className='text'>
              A luxury & exclusive development with four two bed apartments each
              with its own dedicated floor located in Birmingham historic
              Georgian square in the Jewellery Quarter.
            </div>
            <Button outline borderColor='#4EC0A5'>
              Register your interest
            </Button>
          </FeaturedText>
        </StreetWrapper>
        <OfficeWrapper>
          <FeaturedText>
            <h4 className='title'>Quayside View Studios</h4>
            <div className='text'>
              A luxury student development of 118 studio and one bed apartments,
              perfectly located in the heart of Newcastle.
            </div>
            <Button outline borderColor='#F89F28'>
              Find out more
            </Button>
          </FeaturedText>
          <Image
            width={624}
            height={800}
            alt='office'
            src='/images/office.png'
          />
        </OfficeWrapper>
        <RoomWrapper>
          <Image height={800} width={952} src='/images/room.png' alt='room' />
          <FeaturedText>
            <h4 className='title'>5 Cross Street</h4>
            <div className='text'>
              A luxury boutique developement with 12 one bed apartments and the
              lifestyle to match in the heart of Newcastle.
            </div>
            <Button outline borderColor='#F16A82'>
              Find out more
            </Button>
          </FeaturedText>
        </RoomWrapper>
      </FlexContainer>
      <StrokedText margin='-85px 0 0 0'>Featured developments</StrokedText>
    </Wrapper>
  );
};

export default Gallery;
