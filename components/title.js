import 'semantic-ui-css/semantic.min.css'

const Title = ({children}) => (
    <div>
        <style jsx>{`
            background: transparent;                
            text-align: center;
            vertical-align: middle;
            

            h1 {
                background: transparent;                       
                
                color: gray;
                display: inline-block;                    
                line-height: 1;
                padding: 0.9em 1.15em;
                font-size: 3.1rem
            }   
        `}</style>

        <h1>{children}</h1> 
    </div>
);
 
export default Title;