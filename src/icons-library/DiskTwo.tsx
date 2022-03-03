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
                x="4"
                y="13"
                width="32"
                height="22"
                rx="2"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M4 13H14V35H4V13Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M36 19H44V29H36"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="30"
                cy="21"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="30"
                cy="27"
                r="2"
                fill={props.colors[0]}
            />
        </svg>
    )
);
