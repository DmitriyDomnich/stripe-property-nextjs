export const getEventPath = (eventId: number) =>
  `/images/events/ev${eventId}.png`;

export interface EventModel {
  id: number;
  image: {
    height: number;
    width: number;
  };
  title: string;
}

export const events: EventModel[] = [
  {
    id: 1,
    image: {
      height: 540,
      width: 480,
    },
    title: 'Newcastle bids to become climate-neutral & smart city',
  },
  {
    id: 2,
    image: {
      height: 300,
      width: 480,
    },
    title: '£2,000 raised for Smile for Life Children’s Charity',
  },
  {
    id: 3,
    image: {
      height: 540,
      width: 480,
    },
    title: 'Win VIP Tickets to Newcastle vs Leicester',
  },
  {
    id: 4,
    image: {
      height: 300,
      width: 480,
    },
    title:
      'The inside guide to Newcastle, the North East’s cultural powerhouse',
  },
  {
    id: 5,
    image: {
      height: 540,
      width: 480,
    },
    title: 'Birmingham climbs PwC’s Europe real estate table',
  },
];
