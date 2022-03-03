 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M15 34V44H33V34"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31.935 4.00006L15.9855 4.00006C9.04201 4.00006 8.51255 8.60541 9.24893 11.0399L14.9891 34H32.9312C32.9312 34 37.5745 16.1827 38.8188 11.0399C39.4079 8.60542 38.9097 3.98264 31.935 4.00006Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M20.4876 19.0909C22.1273 17.1458 23.3912 14.4588 24.0744 13C25.27 14.4588 27.8662 18.1184 28.686 20.0634C29.7109 22.4947 27.1488 25.4122 24.0744 25.4122C21 25.4122 18.4379 21.5222 20.4876 19.0909Z"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
