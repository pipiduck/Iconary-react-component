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
                x="5"
                y="5"
                width="38"
                height="38"
                rx="3"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <rect
                x="11"
                y="12"
                width="8"
                height="24"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="25"
                y="12"
                width="12"
                height="6"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="25"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="25"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="25"
                cy="36"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="31"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="31"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="31"
                cy="36"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="37"
                cy="24"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="37"
                cy="30"
                r="2"
                fill={props.colors[0]}
            />
            <circle
                cx="37"
                cy="36"
                r="2"
                fill={props.colors[0]}
            />
        </svg>
    )
);
