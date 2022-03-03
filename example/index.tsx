import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../dist/Iconary-react-component.min.css';
import { Thing } from '../.';
import {Alarm, Bill,ACane} from '../src/map'
import { IconProps } from '../src/svgConfig';

const props:IconProps = {
  size: '5em',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  theme:'multi-color',
  fill: ["#111","#abdcba","#111","#123123"]
};

const App = () => {
  return (
    <div>
      <Thing />
      <Bill theme={props.theme} size={props.size} strokeWidth={props.strokeWidth}
      strokeLinecap={props.strokeLinecap} strokeLinejoin={props.strokeLinejoin}
      fill={props.fill}/>
      <Alarm  fill={props.fill} />
      <ACane  fill={props.fill} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
