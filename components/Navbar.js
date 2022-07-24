import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Aafthab Ashraff</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolio">
        <a>Portflio</a>
      </Link>
      <Link href="contactme">
        <a>Contact Me</a>
      </Link>
    </nav>
  );
};

export default Navbar;
