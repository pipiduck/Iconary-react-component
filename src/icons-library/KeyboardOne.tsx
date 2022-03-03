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
                y="18"
                width="40"
                height="24"
                rx="2"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="14"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="16"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="10"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="20"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="22"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="26"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="28"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="32"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="34"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="38"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <path
                d="M17 36H31"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
