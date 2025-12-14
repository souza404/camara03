export interface Property {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}