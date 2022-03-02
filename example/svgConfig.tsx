// 描边连接类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square';

export interface ISvgIconProps {
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
