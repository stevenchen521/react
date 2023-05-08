import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='bg-[#333] text-white flex justify-between items-center px-4 py-0'>
        <a href='/' className='text-[2rem]'>
          Site Name
        </a>
        <ul className='flex gap-5 h-full p-0 m-0'>
          <CustomLink to='/pricing'>Pricing</CustomLink>
          <CustomLink to='/about'>About</CustomLink>
          {/* <li className='nav-li active'>
            <a href='/pricing' className='flex align-center h-full py-3'>
              Pricing
            </a>
          </li> */}
          {/* <li className='nav-li'>
            <a href='/about' className='flex align-center h-full py-3'>
              About
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active nav-li' : 'nav-li'}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
