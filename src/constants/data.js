import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹2560',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹2590',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹3440',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹5310',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹7260',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹390',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹360',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹290',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹410',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹380',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michelin Bib Gourmand',
    subtitle: 'Recognized for delivering exceptional value and quality in dining.',
  },
  {
    imgUrl: images.award01,
    title: 'Emerging Culinary Star',
    subtitle: 'Awarded to the brightest rising talent in the culinary world.',
  },
  {
    imgUrl: images.award05,
    title: 'Excellence in Hospitality',
    subtitle: 'Recognizing outstanding dedication to delivering top-tier service.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef of the Year',
    subtitle: 'Celebrating extraordinary talent, passion, and achievement in the kitchen.',
  },
];

export default { wines, cocktails, awards };
