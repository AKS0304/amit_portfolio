/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

/*
Node Modules
*/
import { useRef, useEffect } from 'react'; 
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, setNavOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };
    
    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

        setNavOpen(false);
    };

    

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link'
        }
    ];

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a 
                    href={link} 
                    className={className} 
                    key={key} 
                    ref={ref}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    setNavOpen: PropTypes.func.isRequired
};

export default Navbar;
