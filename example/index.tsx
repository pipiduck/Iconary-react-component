import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import Bill from '../src/icons-library/Bill'
import '../dist/Iconary-react-component.min.css';

// 描边连接类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square';

interface ISvgIconProps {
  // 图标尺寸大小，默认1em
  size: number | string;
  // 描边宽度
  strokeWidth: number;
  // 描边端点类型
  strokeLinecap: StrokeLinecap;
  // 描边连接线类型
  strokeLinejoin: StrokeLinejoin;
  // 换肤的颜色数组
  colors: string[];
}

const props:ISvgIconProps = {
  size: '5em',
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  colors: ["#999","#aaa","#fff222"]
};

const App = () => {
  return (
    <div>
      <Thing />
      <Bill size={props.size} strokeWidth={props.strokeWidth}
      strokeLinecap={props.strokeLinecap} strokeLinejoin={props.strokeLinejoin}
      colors={props.colors}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
