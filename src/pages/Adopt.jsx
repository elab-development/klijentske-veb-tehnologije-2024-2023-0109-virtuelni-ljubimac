import React, { useState } from 'react';
import PetCard from '../api/components/PetCard';
import labrador from '../images/labrador.jpg';
import mops from '../images/mops.jpg';
import pas from '../images/pas.jpg';
import kuca from '../images/kuca.jpg';

const Adopt = () => {
const [dogs, setDogs] = useState([
{
name: 'Max',
img: labrador,
description: 'Veseo i razigran labrador koji voli decu i loptice 🎾',
question: 'Da li bi ga svakodnevno izvodio u šetnju?',
},
{
name: 'Bella',
img: mops,
description: 'Prelepi mops velikih očiju, slatka i pametna ',
question: 'Usvoji me da se zajedno mazimo!',
},
{
name: 'Luna',
img: pas,
description: 'Umiljata lepotica koja voli da se mazi ',
question: 'Da li bi imala vremena za svakodnevnu igru?',
},
{
name: 'Charlie',
img: kuca,
description: 'Mali pas koji obožava društvo ljudi 🐶',
question: 'Da li imaš dvorište u kojem bi trčkarao?',
},
]);

const handleAdopt = (dogName) => {
alert(`Čestitamo! Usvojila si psa po imenu ${dogName} 🐕💙`);
setDogs((prevDogs) => prevDogs.filter((d) => d.name !== dogName));
};

return (
<div className="adopt-container">
<h1>🐾 Usvoji svog psa</h1>
<p>Odaberi psa i odgovori na pitanje pre nego što ga usvojiš!</p>

<div className="pets-grid">
{dogs.map((dog) => (
<PetCard
key={dog.name}
name={dog.name}
img={dog.img}
description={dog.description}
question={dog.question}
onAdopt={() => handleAdopt(dog.name)}
/>
))}
</div>
</div>
);
};

export default Adopt;