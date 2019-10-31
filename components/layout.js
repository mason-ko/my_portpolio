import Header from './header';
import Footer  from './footer';
import 'semantic-ui-css/semantic.min.css'

const Layout = ({children}) => (
    <div>
        <style jsx>{`
            width: 100%; height: 100%;
        `}</style>
        <Header/>
        {children}
        <Footer/>
    </div>
);
 
export default Layout;