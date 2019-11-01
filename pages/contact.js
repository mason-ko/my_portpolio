import Title from '../components/title'
import Link from 'next/link'

const Contact = () =>(
         <div>
             <Title>
                Contact.
            </Title>
            
            <style jsx>{`
                    background: rgba(240, 240, 240, 0.7);                
                    text-align: center;
                    vertical-align: middle;

                    h2 {
                        background: transparent;                       
                        margin: 19rem;
                        color: black;
                        display: inline-block;                    
                        line-height: 1;
                        padding: 0.9em 1.15em;
                        font-size: 1.8rem
                    }

                    a {
                        width: 5rem;
                        height: 5rem;
                    }
                    img {
                        width: 5rem;
                        height: 5rem;
                    }
                `}</style>

            <div>
                <h2>Email: gym1029@gmail.com</h2>
                <a href="https://github.com/mason-ko/">
                    
                    <img src="/git.png"/>
                </a>
            </div>
            <a target="_blank" href="https://icons8.com/icons/set/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
)

export default Contact;