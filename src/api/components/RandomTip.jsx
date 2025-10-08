import React, { useState, useEffect } from 'react';

const RandomTip = () => {
const [tip, setTip] = useState('');

// fetch podataka iz API-ja
const getTip = async () => {
try {
const response = await fetch('https://dog-api.kinduff.com/api/facts');
const data = await response.json();
setTip(data.facts[0]);
} catch (error) {
setTip('Nema saveta trenutno.');
console.error(error);
}
};

// pozivamo getTip kada se komponenta mountuje
useEffect(() => {
getTip();
}, []);

return (
<div style={{ marginTop: '20px' }}>
<h3>Saveti za ljubimca:</h3>
<p>{tip}</p>
<button onClick={getTip}>Novi savet</button>
</div>
);
};

export default RandomTip;