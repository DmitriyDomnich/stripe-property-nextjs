import React from 'react';
import { ReviewModel } from 'data/reviews';
import styled from 'styled-components';
import Gallery from './Gallery';
import Reviews from './Reviews';
import MainTitle from './Title';
import Units from './Units';
import Events from './Events';
import { EventModel } from 'data/events';

const MainWrapper = styled.main`
  padding-block: 120px;
`;

type Props = {
  reviews: ReviewModel[];
  events: EventModel[];
};

const Main = ({ reviews, events }: Props) => {
  return (
    <MainWrapper>
      <MainTitle />
      <Gallery />
      <Units />
      <Reviews reviews={reviews} />
      <Events events={events} />
    </MainWrapper>
  );
};

export default Main;
