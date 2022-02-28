import * as React from 'react';

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

const Bill = (props: ISvgIconProps) => {

  return (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V44L31 39L24 44L17 39L10 44V6Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        strokeWidth={props.strokeWidth}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
      />
      <path
        d="M18 22L30 22"
        stroke={props.colors[2]}
        strokeWidth={props.strokeWidth}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
      />
      <path
        d="M18 30L30 30"
        stroke={props.colors[2]}
        strokeWidth={props.strokeWidth}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
      />
      <path
        d="M18 14L30 14"
        stroke={props.colors[2]}
        strokeWidth={props.strokeWidth}
        strokeLinecap={props.strokeLinecap}
        strokeLinejoin={props.strokeLinejoin}
      />
    </svg>
  );
};

export default Bill;
