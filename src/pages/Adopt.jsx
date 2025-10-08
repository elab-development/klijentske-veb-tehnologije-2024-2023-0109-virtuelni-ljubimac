import React, { useState } from 'react';
import PetStats from '../api/components/PetStats';
import RandomTip from '../api/components/RandomTip';
import Pet from '../models/Pet';

const Adopt = () => {
const [pet] = useState(new Pet('Ljubimac'));
const [history, setHistory] = useState([]);

const handleAction = (action) => {
switch(action){
case 'hranjenje': pet.feed(); break;
case 'igranje': pet.play(); break;
case 'spavanje': pet.sleep(); break;
default: break;
}
setHistory(prev => [...prev, `${action} - ${new Date().toLocaleTimeString()}`]);
}

return (
<div style={{ padding: '20px' }}>
<h1>Adopt your pet: {pet.name}</h1>
<PetStats glad={pet.hunger} sreca={pet.happiness} energija={pet.energy} />

<button onClick={() => handleAction('hranjenje')}>Hranjenje</button>
<button onClick={() => handleAction('igranje')}>Igranje</button>
<button onClick={() => handleAction('spavanje')}>Spavanje</button>

<RandomTip />

<div style={{ marginTop: '20px' }}>
<h3>Istorija aktivnosti:</h3>
<ul>
{history.map((item,index) => <li key={index}>{item}</li>)}
</ul>
</div>
</div>
);
};

export default Adopt;