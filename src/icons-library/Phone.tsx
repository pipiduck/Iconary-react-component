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
                d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M22 37H26"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);