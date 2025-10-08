
import React from 'react';

const PetStats = ({ glad, sreca, energija }) => {
return (
<div style={{ margin: '20px 0' }}>
<p>Glad: {glad}</p>
<p>Sreća: {sreca}</p>
<p>Energija: {energija}</p>
</div>
);
};

export default PetStats;