// 描边连接类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square';

// svg配置属性
export interface ISvgIconProps {
  id: number | string;
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

// 主题
export type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color';

// svg组件传入属性
export interface IconProps {

    id?: number | string;

    // 图标尺寸大小，默认1em
    size?: number | string;

    // 描边宽度
    strokeWidth?: number;

    // 描边端点类型
    strokeLinecap?: StrokeLinecap;

    // 描边连接线类型
    strokeLinejoin?: StrokeLinejoin;

    // 默认主题
    theme?: Theme;

    // 填充色
    fill?: string | string[];
}
