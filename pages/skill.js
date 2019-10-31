import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import '../css/skill.css'
import $ from 'jquery';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const SkillTimeLine = ({stars}) => {
    const itemClick = e => {
        console.log('test!');
    }

    return (<Layout>
    <div id="container">
		<div id="thumbs">
    <div className="history-block bg-66" onClick={itemClick}>
      <div className="cover"></div>
      <div className="year">1966 - 1976</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
        <ul>
          <li><a href="" className="timelineYear">1966</a></li>
          <li><a href="" className="timelineYear">1967</a></li>
          <li><a href="" className="timelineYear">1968</a></li>
          <li><a href="" className="timelineYear">1969</a></li>
          <li><a href="" className="timelineYear">1970</a></li>
          <li><a href="" className="timelineYear">1971</a></li>
          <li><a href="" className="timelineYear">1972</a></li>
          <li><a href="" className="timelineYear">1973</a></li>
          <li><a href="" className="timelineYear">1974</a></li>
          <li><a href="" className="timelineYear">1975</a></li>
          <li><a href="" className="timelineYear">1976</a></li>
        </ul>
      </div>
    </div>
    <div className="history-block bg-76">
      <div className="cover"></div>
      <div className="year">1976 - 1986</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
      <ul>
          <li><a href="" className="timelineYear">1976</a></li>
          <li><a href="" className="timelineYear">1977</a></li>
          <li><a href="" className="timelineYear">1978</a></li>
          <li><a href="" className="timelineYear">1979</a></li>
          <li><a href="" className="timelineYear">1980</a></li>
          <li><a href="" className="timelineYear">1981</a></li>
          <li><a href="" className="timelineYear">1982</a></li>
          <li><a href="" className="timelineYear">1983</a></li>
          <li><a href="" className="timelineYear">1984</a></li>
          <li><a href="" className="timelineYear">1985</a></li>
          <li><a href="" className="timelineYear">1986</a></li>
        </ul>
      </div>
    </div>
    <div className="history-block bg-86">
      <div className="cover"></div>
      <div className="year">1986 - 1996</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
      <ul>
          <li><a href="" className="timelineYear">1986</a></li>
          <li><a href="" className="timelineYear">1987</a></li>
          <li><a href="" className="timelineYear">1988</a></li>
          <li><a href="" className="timelineYear">1989</a></li>
          <li><a href="" className="timelineYear">1990</a></li>
          <li><a href="" className="timelineYear">1991</a></li>
          <li><a href="" className="timelineYear">1992</a></li>
          <li><a href="" className="timelineYear">1993</a></li>
          <li><a href="" className="timelineYear">1994</a></li>
          <li><a href="" className="timelineYear">1995</a></li>
          <li><a href="" className="timelineYear">1996</a></li>
        </ul>
      </div>
    </div>
    <div className="history-block bg-96">
      <div className="cover"></div>
      <div className="year">1996 - 2006</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
      <ul>
          <li><a href="" className="timelineYear">1996</a></li>
          <li><a href="" className="timelineYear">1997</a></li>
          <li><a href="" className="timelineYear">1998</a></li>
          <li><a href="" className="timelineYear">1999</a></li>
          <li><a href="" className="timelineYear">2000</a></li>
          <li><a href="" className="timelineYear">2001</a></li>
          <li><a href="" className="timelineYear">2002</a></li>
          <li><a href="" className="timelineYear">2003</a></li>
          <li><a href="" className="timelineYear">2004</a></li>
          <li><a href="" className="timelineYear">2005</a></li>
          <li><a href="" className="timelineYear">2006</a></li>
        </ul>
      </div>
    </div>
    <div className="history-block bg-06">
      <div className="cover"></div>
      <div className="year">2006-2016</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
      <ul>
          <li><a href="" className="timelineYear">2006</a></li>
          <li><a href="" className="timelineYear">2007</a></li>
          <li><a href="" className="timelineYear">2008</a></li>
          <li><a href="" className="timelineYear">2009</a></li>
          <li><a href="" className="timelineYear">2010</a></li>
          <li><a href="" className="timelineYear">2011</a></li>
          <li><a href="" className="timelineYear">2012</a></li>
          <li><a href="" className="timelineYear">2013</a></li>
          <li><a href="" className="timelineYear">2014</a></li>
          <li><a href="" className="timelineYear">2015</a></li>
          <li><a href="" className="timelineYear">2016</a></li>
        </ul>
      </div>
    </div>
    <div className="history-block bg-16">
      <div className="cover"></div>
      <div className="year">FUTURE</div>
      <div className="title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</div>
      <div className="timeline">
      To our bright future!!! :)
      </div>
    </div>
		</div>
	</div>
    </Layout>);
};

export default SkillTimeLine;