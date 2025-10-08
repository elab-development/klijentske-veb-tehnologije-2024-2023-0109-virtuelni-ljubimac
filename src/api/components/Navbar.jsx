import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
<nav style={{
display: 'flex',
justifyContent: 'center',
gap: '40px',
backgroundColor: '#ffa500',
padding: '15px',
fontSize: '20px',
fontWeight: 'bold'
}}>
<Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
<Link to="/adopt" style={{ color: '#fff', textDecoration: 'none' }}>Adopt</Link>
<Link to="/stats" style={{ color: '#fff', textDecoration: 'none' }}>Stats</Link>
<Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
</nav>
);

export default Navbar;