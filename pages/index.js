import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import About from './about'
import Skill from './skill'
import Contact from './contact'

const Index = () => (    
    <Layout>   
        <div>
            <style jsx>{`
                   background: rgba(0, 0, 0, 0.9);                
                   text-align: center;
                   vertical-align: middle;
                   height: 50rem;

                   h1 {
                       background: transparent;                       
                       margin: 6em 1em;
                       color: white;
                       display: inline-block;                    
                       line-height: 1;
                       padding: 0.9em 1.15em;
                       font-size: 3.1rem
                   }
            `}</style>

             <h1>
                 안녕하세요. 고영민입니다.
             </h1>
        </div>
        <About/>
        <Skill/>
        <Contact/>
    </Layout>
);

export default Index;