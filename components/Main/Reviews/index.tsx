import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ReviewModel } from 'data/reviews';
import Review from './Review';
import { flushSync } from 'react-dom';

const Wrapper = styled.section`
  background-color: #f3f3f5;
  padding: 5rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (min-width: 768px) {
    padding: 10rem 5rem;
  }
`;
const ScrollButton = styled.div<{ align?: 'start' | 'end' }>`
  cursor: pointer;
  width: 4em;
  border-bottom: 1px solid #212b36;
  text-align: ${(p) => p.align || 'start'};
  padding-bottom: 2px;
  color: #212b36;
`;
const StripesWrapper = styled.div`
  display: none;
  gap: 18px;
  align-self: flex-start;
  padding-top: 0.35rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const ReviewsWrapper = styled.ul`
  list-style: none;
  white-space: nowrap;
`;

type Props = {
  reviews: ReviewModel[];
};

const Reviews = ({ reviews }: Props) => {
  const selectedReviewRef = useRef<HTMLLIElement>(null);
  const [selectedReviewId, setSelectedReviewId] = useState(reviews[0].id);

  const onScroll = useCallback((reviewId: number) => {
    flushSync(() => setSelectedReviewId(reviewId));
    selectedReviewRef.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, []);
  const handlePrev = useCallback(() => {
    const nextReviewId = selectedReviewId - 1;
    onScroll(nextReviewId > -1 ? nextReviewId : reviews[reviews.length - 1].id);
  }, [selectedReviewId]);
  const handleNext = useCallback(() => {
    const nextReviewId = selectedReviewId + 1;
    onScroll(nextReviewId < reviews.length ? nextReviewId : reviews[0].id);
  }, [selectedReviewId, reviews]);

  return (
    <Wrapper>
      <ScrollButton onClick={handlePrev} align='end'>
        Prev
      </ScrollButton>
      <StripesWrapper>
        <Image src='/images/stripes.png' height={60} width={26} alt='stripes' />
        <Image src='/images/stripes.png' height={60} width={26} alt='stripes' />
      </StripesWrapper>
      <div
        style={{
          maxWidth: '864px',
          overflow: 'hidden',
        }}
      >
        <ReviewsWrapper>
          {reviews.map((review, index) => (
            <Review
              ref={selectedReviewId === review.id ? selectedReviewRef : null}
              review={review}
              index={index}
              key={review.id}
            />
          ))}
        </ReviewsWrapper>
      </div>
      <ScrollButton onClick={handleNext}>Next</ScrollButton>
    </Wrapper>
  );
};

export default Reviews;
