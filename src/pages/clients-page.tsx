import * as React from 'react';
import donkey from "../images/donkey.jpg"
import goat from "../images/goat.jpg"
import goat2 from "../images/goat2.jpg"
import goats from "../images/goats.jpg"
import horse from "../images/horse.jpg"
import horses from "../images/horses.jpg"
import llama from "../images/llama.jpg"
import poodles from "../images/poodles.jpg"
import puppies from "../images/puppies.jpg"

export const ClientsPage: React.FC = () => {
    return (
    <div className="clients-main tan">
      <img className="image" alt="donkey" src={donkey} />
      <img className="image" alt="puppies" src={puppies} />
      <img className="image" alt="goat2" src={goat2} />
      <img className="image" alt="goats" src={goats} />
      <img className="image" alt="horse" src={horse} />
      <img className="image" alt="llama" src={llama} />
      <img className="image" alt="poodles" src={poodles} />
      <img className="image" alt="goat" src={goat} />
    </div>

  );
}

export default ClientsPage