import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<nav style={{
display: 'flex',
justifyContent: 'center',
gap: '50px',
backgroundColor: '#ffa500',
padding: '20px',
fontSize: '24px',
fontWeight: 'bold'
}}>
<Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
<Link to="/adopt" style={{ color: '#fff', textDecoration: 'none' }}>Adopt</Link>
</nav>
);

export default Navbar;