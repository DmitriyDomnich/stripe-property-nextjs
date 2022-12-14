import React from 'react';
import { EventModel, getEventPath } from 'data/events';
import styled from 'styled-components';
import StrokedText from '../StrokedText';

type Props = {
  events: EventModel[];
};

const Wrapper = styled.section`
  margin-block: 2rem;
  margin-inline: auto;
  padding: 5%;
`;
const Content = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 300px 240px 300px;
`;
const Card = styled.div<{ height?: number }>`
  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  &:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
  &:nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
  }
  padding: 8px 16px;
  border: 1px solid rgba(22, 28, 36, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  @media (min-width: 992px) {
    padding: 32px 48px;
  }
`;
const FirstCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    padding-left: 0.35rem;
  }

  h3,
  h5 {
    color: #212b36;
  }
  h3 {
    font-size: 32px;
    font-weight: 500;
    margin-top: 20px;
  }
  h6 {
    color: #637381;
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 1100px) {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  h5 {
    &:hover {
      text-decoration: underline;
    }
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
  }
`;
const ImageCard = styled(Card)`
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: #1f5085;
  padding: 8px 16px;
  color: #fff;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 992px) {
    padding: 32px 48px;
  }
  .bg-wrapper {
    height: 100%;
    width: 100%;
    opacity: 0.6;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
const EventTitle = styled.div`
  position: absolute;
  color: #fff;
  bottom: 0;
  padding: 0 32px 32px 0;
  font-size: 20;
`;
const EventImage = styled.div<{ eventId: number }>`
  height: 100%;
  background-image: url(${(p) => getEventPath(p.eventId)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Events = ({ events }: Props) => {
  return (
    <Wrapper>
      <StrokedText margin='0 0 -85px 0'>News & Events</StrokedText>
      <Content>
        <Card>
          <FirstCardWrapper>
            <h3>News & Events</h3>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus
              magna justo, lacinia eget consectetur sed convallis at tellus
              vivamus magna justo.
            </h6>
            <h5>
              View all posts <span>{'>'}</span>
            </h5>
          </FirstCardWrapper>
        </Card>
        {events.map((event) => (
          <ImageCard key={event.id}>
            <div className='bg-wrapper'>
              <EventImage eventId={event.id} />
            </div>
            <EventTitle>{event.title}</EventTitle>
          </ImageCard>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Events;
