import 'semantic-ui-css/semantic.min.css'
import $ from 'jquery';

const Header = () => {
    const headerClick = (c) => {
        $( 'html, body' ).animate( { scrollTop :
            c === '' ? 0 : $(c).offset().top - 40 }, 400 );
    }

    return (
        <div>
            <div className="ui large top fixed menu transition visible">
            <div className="ui container">
                <a className="item" onClick={()=>{headerClick('')}}>Home</a>
                <a className="item" onClick={()=>{headerClick('#about')}}>About</a>
                <a className="item" onClick={()=>{headerClick('#careers')}}>Careers</a>
                <a className="item" onClick={()=>{headerClick('#contact')}}>Contact</a>
            </div>
            </div>
        </div>
    );
};

export default Header;