import Title from '../components/title'

const About = () =>(
         <div id='about'>
            <Title>
                About ME
            </Title>
            <style jsx>{`
                    background: rgba(240, 240, 240, 0.7);                
                    text-align: center;
                    vertical-align: middle;
                    height: 50rem;

                    h1 {
                        background: transparent;                       
                        margin: 11rem;
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
                    새로운것을 공부하는 것을 좋아합니다. <br/><br/>
                    꾸준히 계속 공부해야하는것이 개발자의 기본이라고 생각하고<br/>
                    그것이 직업의 큰 매력이라고 생각합니다.<br/><br/>
                    제 인생에 개발자 이외의 직업은 없을거라 생각하고 있으며<br/>
                    그 생각을 유지하기 위해 계속해서 노력합니다.<br/>
                </h1>
            </div>
        </div>
)

export default About;