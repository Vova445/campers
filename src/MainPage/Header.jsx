/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { headerStyle, navStyle } from './styles';
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      css={headerStyle}
    >
      <h1>Camper Rental Company</h1>
      <nav css={navStyle}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;