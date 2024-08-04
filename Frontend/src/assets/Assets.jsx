import logo from './logo.png';
import search_icon from './search_icon.png';
import basket_icon from './basket_icon.png';
import cross from './cross_icon.png';
import parties from './parties.jpg';
import fitness from './fitness.jpg';
import fundraising from './fundraising.jpg';
import meets from './meets.jpg';
import workshops from './workshops.jpg';
import exhibition from './exhibition.jpg';

export const assets = {
  logo,
  search_icon,
  basket_icon,
  cross
};

export const event_list = [
  {
    event_name: "DJ Parties",
    event_image: parties,
    url:"/parties"
  },
  {
    event_name: "Sports & Fitness",
    event_image: fitness,
    url:"/fitness"
  },
  {
    event_name: "Charitable and fundraising",
    event_image: fundraising,
    url:"/charity"
  },
  {
    event_name: "Workshops",
    event_image: workshops,
    url:"/workshop"
  },
  {
    event_name: "Exhibitions, Festivals and Markets",
    event_image: exhibition,
    url: "/Exhibitions"
  
  },
  {
    event_name: "Social Mixers",
    event_image: meets,
    url:"/meetup"
    
  }
];
