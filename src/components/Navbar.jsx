import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">CVERNET IT</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/about" className="hover:underline">À propos</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
