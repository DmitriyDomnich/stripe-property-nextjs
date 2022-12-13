export const getProfileImagePath = (reviewId: number) => {
  return `/images/profiles/p${reviewId}.jpg`;
};

export interface ReviewModel {
  id: number;
  title: string;
  profile: {
    name: string;
    appointment: string;
  };
}

export const userReviews: ReviewModel[] = [
  {
    id: 0,
    title:
      'Sed porttitor lectus nibh curabitur aliquet quam id dui posuere blandit quisque velit nisi, pretium cinia in, elementum id enim. Nulla quis lorem libero malesuada feugiat sed porttitor lectus nibh.',
    profile: {
      name: 'Dennis L. Brick',
      appointment: 'Attorney',
    },
  },
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi accusamus repudiandae illo asperiores odit. Expedita inventore quisquam tenetur quis voluptatibus!',
    profile: {
      name: 'Samuel L. Jackson',
      appointment: 'Actor',
    },
  },
  {
    id: 2,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis optio sit placeat labore voluptates autem.',
    profile: {
      name: 'John Hovewer',
      appointment: 'Investor',
    },
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptates, error consequuntur autem possimus labore est eaque exercitationem natus veniam ipsa, maxime quis id quod?',
    profile: {
      name: 'Jared Higgins',
      appointment: 'Singer',
    },
  },
];
