import 'semantic-ui-css/semantic.min.css'
import $ from 'jquery';

const Header = () => {
    const headerClick = (c) => {
        $( 'html, body' ).animate( { scrollTop :
            c === '' ? 0 : $(c).offset().top - 40 }, 400 );
    }

    return (
        <div>
            <div class="ui large top fixed menu transition visible">
            <div class="ui container">
                <a class="item" onClick={()=>{headerClick('')}}>Home</a>
                <a class="item" onClick={()=>{headerClick('#about')}}>About</a>
                <a class="item" onClick={()=>{headerClick('#careers')}}>Careers</a>
                <a class="item" onClick={()=>{headerClick('#contact')}}>Contact</a>
            </div>
            </div>
        </div>
    );
};

export default Header;