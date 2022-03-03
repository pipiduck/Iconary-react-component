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
                x="8"
                y="4"
                width="32"
                height="40"
                rx="2"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="24"
                cy="15"
                r="5"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <circle
                cx="14"
                cy="10"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="14"
                cy="38"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="34"
                cy="10"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="34"
                cy="38"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="24"
                cy="32"
                r="6"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
