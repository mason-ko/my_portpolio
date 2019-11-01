import Link from 'next/link'
import 'semantic-ui-css/semantic.min.css'
import { Modal, Button, Icon } from 'semantic-ui-react'

const Header = () => {
    return (
        <div>
            <style jsx>{`
                background: rgba(0, 0, 0, 0.9);                
                text-align: center;
                vertical-align: middle;

                a {
                    background: transparent;
                    marginRight: 1rem;
                    margin: 1em 1em;
                    color: white;
                    display: inline-block;                    
                    line-height: 1;
                    padding: 0.9em 1.15em;
                    font-size: 1.1rem
                }

                a:hover {
                    cursor: pointer;
                    background: rgba(0, 0, 0, 0.5);
                    color: rgba(255, 255, 255, 0.8);                  
                }
            `}</style>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/careers"><a>Careers</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </div>
    );
};

export default Header;