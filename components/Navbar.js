import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillArchiveFill } from 'react-icons/bs';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';
import '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <Link href="/">
        <a>
          <AiOutlineHome className="icon active-nav" />
        </a>
      </Link>
      <Link href="/about">
        <a>
          <AiOutlineUser className="icon" />
        </a>
      </Link>
      <Link href="/portfolio">
        <a>
          <BsFillArchiveFill className="icon" />
        </a>
      </Link>
      <Link href="/contactme">
        <a>
          <BiMessageRoundedDots className="icon" />
        </a>
      </Link>
      <Link href="#footer">
        <a>
          <BsArrowDownCircle className="icon" />
        </a>
      </Link>
    </div>
  );
};

let Icons = document.querySelectorAll('.navigation .icon');
Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive();
    icon.classList.add('active-nav');
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('actiove-nav');
  });
}

export default Navbar;
