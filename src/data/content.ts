import dogs from '../images/dogs.jpg';
import donkey from '../images/donkey.jpg';
import goat from '../images/goat.jpg';
import goat2 from '../images/goat2.jpg';
import goats from '../images/goats.jpg';
import horse from '../images/horse.jpg';
import horses from '../images/horses.jpg';
import llama from '../images/llama.jpg';
import poodles from '../images/poodles.jpg';
import puppies from '../images/puppies.jpg';

export const contact = {
  phone: '704-231-8993',
  email: 'docsage@carolina.rr.com',
  facebook: 'https://www.facebook.com/horseandpetmobilevet',
  serviceArea: 'TODO: service area',
  hours: 'TODO: hours',
};

export const heroImage = dogs;
export const aboutImage = horse;

export const services = [
  {
    title: 'Dogs & Cats',
    items: ['Wellness exams', 'Vaccinations', 'Dental care', 'Minor procedures', 'Senior pet care'],
  },
  {
    title: 'Horses & Farm Animals',
    items: ['Routine equine exams', 'Vaccinations & Coggins', 'Equine dental care', 'Goats, llamas & donkeys', 'Lameness evaluations'],
  },
];

export const gallery = [
  { src: donkey, alt: 'Donkey' },
  { src: puppies, alt: 'Puppies' },
  { src: goat2, alt: 'Goat' },
  { src: goats, alt: 'Group of goats' },
  { src: horse, alt: 'Horse' },
  { src: llama, alt: 'Llama' },
  { src: poodles, alt: 'Poodles' },
  { src: goat, alt: 'Goat portrait' },
  { src: horses, alt: 'Horses in a pasture' },
];
