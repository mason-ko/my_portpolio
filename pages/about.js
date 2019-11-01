import Title from '../components/title'

const About = () =>(
         <div>
            <Title>
                About ME.
            </Title>
            <style jsx>{`
                    background: rgba(240, 240, 240, 0.7);                
                    text-align: center;
                    vertical-align: middle;
                    height: 50rem;

                    h1 {
                        background: transparent;                       
                        margin: 19rem;
                        color: black;
                        display: inline-block;                    
                        line-height: 1;
                        padding: 0.9em 1.15em;
                        font-size: 1.8rem
                    }
                `}</style>
            <div>
                <h1>                 
                    7년차 서버 개발자<br/>
                    항상 재미있게 일하고자 하며 <br/>
                    새로운것을 공부하는 것을 좋아합니다. <br/>
                </h1>
            </div>
        </div>
)

export default About;