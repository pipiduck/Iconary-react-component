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
                x="11"
                y="4"
                width="26"
                height="40"
                rx="2"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <circle
                cx="24"
                cy="34"
                r="4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <rect
                x="18"
                y="10"
                width="12"
                height="8"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23 24H25"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
