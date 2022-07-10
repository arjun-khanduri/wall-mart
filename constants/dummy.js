import assets from "./assets";

const Data = [
  {
    id: "PHOTO-01",
    name: "My photo",
    creator: "Original John Doe",
    price: 100,
    description:
      "Good photo",
    image: assets.photo1,
    bids: [
      {
        id: "REVIEW-01",
        name: "John Doe 1",
        image: assets.person02,
        date: "Review 1 date",
      },
      {
        id: "REVIEW-02",
        name: "John Doe 2",
        image: assets.person03,
        date: "Review 2 date",
      },
      {
        id: "REVIEW-03",
        name: "John Doe 3",
        image: assets.person04,
        date: "Review 3 date",
      },
    ],
  },
  {
    id: "PHOTO-02",
    name: "My photo 2",
    creator: "Original John Doe",
    price: 400,
    description:
      "Average photo",
    image: assets.photo2,
    bids: [
      {
        id: "REVIEW-01",
        name: "John Doe 1",
        image: assets.person02,
        date: "Review 1 date",
      },
      {
        id: "REVIEW-02",
        name: "John Doe 2",
        image: assets.person03,
        date: "Review 2 date",
      },
      {
        id: "REVIEW-03",
        name: "John Doe 3",
        image: assets.person04,
        date: "Review 3 date",
      },
    ],
  },
];

export { Data };
