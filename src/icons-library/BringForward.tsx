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
            <rect
                x="6"
                y="34"
                width="36"
                height="8"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="6"
                y="20"
                width="36"
                height="8"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M30 12L24 6L18 12V12"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 28V34"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 6V20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
