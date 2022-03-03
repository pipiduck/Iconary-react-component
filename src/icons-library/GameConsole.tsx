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
                x="10"
                y="4"
                width="28"
                height="40"
                rx="2"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M16 34H24"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M20 30V38"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="16"
                y="10"
                width="16"
                height="9"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="31"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="31"
                cy="38"
                r="2"
                fill={props.colors[0]}
            />
        </svg>
    )
);
