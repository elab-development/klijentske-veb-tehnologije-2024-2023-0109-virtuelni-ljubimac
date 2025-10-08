import React, { useState } from 'react';

const Adopt = () => {
const [glad, setGlad] = useState(50);
const [sreca, setSreca] = useState(50);
const [energija, setEnergija] = useState(50);

const hranjenje = () => setGlad(prev => Math.min(prev + 10, 100));
const igranje = () => setSreca(prev => Math.min(prev + 10, 100));
const spavanje = () => setEnergija(prev => Math.min(prev + 10, 100));

return (
<div style={{ padding: '20px' }}>
<h1>Adopt your pet!</h1>
<p>Glad: {glad}</p>
<p>Sreća: {sreca}</p>
<p>Energija: {energija}</p>

<button onClick={hranjenje}>Hranjenje</button>
<button onClick={igranje}>Igranje</button>
<button onClick={spavanje}>Spavanje</button>
</div>
);
};

export default Adopt;