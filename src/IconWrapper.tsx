import React, { ReactElement } from 'react';
import { IconProps, ISvgIconProps, Theme } from './svgConfig';

export type IconRender = (props: ISvgIconProps) => ReactElement;

// fill填色数组映射为colors配色方案
export function convert(theme: Theme,fill:string | string[]) {
    let colors:string[] = []
    switch (theme) {
        case 'outline':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('none');
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('none');
            break;
        case 'filled':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push('#FFF');
            colors.push('#FFF');
            break;
        case 'two-tone':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[1] === 'string' ? fill[1] : 'currentColor');
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[1] === 'string' ? fill[1] : 'currentColor');
            break;
        case 'multi-color':
            colors.push(typeof fill[0] === 'string' ? fill[0] : 'currentColor');
            colors.push(typeof fill[1] === 'string' ? fill[1] : 'currentColor');
            colors.push(typeof fill[2] === 'string' ? fill[2] : 'currentColor');
            colors.push(typeof fill[3] === 'string' ? fill[3] : 'currentColor');
            break;
    }
    return colors;
}

export function IconWrapper(render: IconRender) {

  return (props: IconProps) => {

    const size = props.size || '2em';
    const strokeWidth = props.strokeWidth || 4;
    const strokeLinecap = props.strokeLinecap || 'round';
    const strokeLinejoin = props.strokeLinejoin || 'round';
    const theme = props.theme || 'outline';
    const fill = props.fill || ['#111'];

    let colors = convert(theme,fill);

    const svgProps = {
      size,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      colors
    };

    return <span>{render(svgProps)}</span>;
    
  };
}
