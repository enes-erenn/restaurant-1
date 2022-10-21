import award1 from "./assets/images/award01.png";
import award2 from "./assets/images/award02.png";
import award3 from "./assets/images/award03.png";

interface Wines {
  title: string;
  price: string;
  tags: string;
}
interface Cocktails {
  title: string;
  price: string;
  tags: string;
}
interface Awards {
  title: string;
  subtitle: string;
  image: any;
}

export const wines: Wines[] = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

export const cocktails: Cocktails[] = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

export const awards: Awards[] = [
  {
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    image: award1,
  },
  {
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    image: award2,
  },
  {
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    image: award1,
  },
  {
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
    image: award3,
  },
];

/* const exportedObject = {
  wines: Wines[];
  cocktails: Cocktails[];
  awards: Awards[];
};

export default exportedObject; */
