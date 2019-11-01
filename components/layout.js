import Header from './header';
import 'semantic-ui-css/semantic.min.css'

const Layout = ({children}) => (
    <div>
        <style jsx>{`
            width: 100%; height: 100%;
        `}</style>
        <Header/>
        {children}
    </div>
);
 
export default Layout;