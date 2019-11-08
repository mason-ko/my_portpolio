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
                    

                    table {
                        background: transparent;                       
                        margin: 10rem 1rem;
                        color: black;
                        display: inline-block;                    
                        line-height: 1;
                        
                        font-size: 1.8rem
                    }

                    table .td1 {
                        text-align: left;
                    }

                    table .td2 {
                        text-align: center;
                        padding: 2rem;
                        margin: 5rem 5rem;
                    }
                `}</style>
            <div>
                <table className="table">
<tbody>
    <tr>
        <td><h1>Tech Stack</h1><br/></td>
        <td><h1>Info</h1><br/></td>
    </tr>
    <tr>
        <td className="td1">            
        Language: C#, Javascript, Java, Go<br/>
                    OS: Linux, Windows<br/>
                    DB: MariaDB, Cassandra, MongoDB<br/>
                    Cache: Redis<br/>
                    Message Queue: Kafka<br/>
                    ETC: WPF, Mono, .net core, Node-red<br/>
                    Source Management: Git<br/>
                    CI/CD: Jenkins<br/>
                    Container: Docker<br/> 
        </td>
        <td className="td2">
                    7년차 개발자<br/>
                    항상 재미있게 일하고자 하며 <br/>
                    새로운것을 공부하는 것을 좋아합니다. <br/><br/>
                    
                    죽을때까지 IT하는게 목표. <br/>
        </td>
    </tr>
</tbody>
                </table>
            </div>
        </div>
)

export default About;