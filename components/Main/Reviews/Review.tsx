import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { getProfileImagePath, ReviewModel } from 'data/reviews';

type Props = {
  review: ReviewModel;
  index: number;
};

const ReviewWrapper = styled.div<{ index: number }>`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  /* transform: translateX(calc(${(p) => p.index} * 100%)); */
  .text {
    font-size: 24px;
    font-weight: 500;
    color: #212b36;
    margin-bottom: 1rem;
  }
  .image-thumb-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      border-radius: 50%;
    }
    .profile-info {
      .name {
        font-weight: 600;
        color: #212b36;
        margin-bottom: 0.35rem;
      }
      .smth {
        color: #637381;
        font-size: 14px;
      }
    }
  }
`;

const Review = forwardRef<HTMLLIElement, Props>(({ review, index }, ref) => {
  return (
    <li
      ref={ref}
      style={{
        display: 'inline-block',
        whiteSpace: 'break-spaces',
      }}
    >
      <ReviewWrapper index={index}>
        <div className='text'>{review.title}</div>
        <div className='image-thumb-wrapper'>
          <Image
            src={getProfileImagePath(review.id)}
            height={56}
            width={56}
            alt={review.profile.name}
          />
          <div className='profile-info'>
            <div className='name'>{review.profile.name}</div>
            <div className='smth'>{review.profile.appointment}</div>
          </div>
        </div>
      </ReviewWrapper>
    </li>
  );
});

export default Review;
