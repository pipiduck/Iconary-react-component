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
                y="4"
                width="40"
                height="40"
                rx="3"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="12"
                cy="12"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="12"
                cy="36"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="36"
                cy="12"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="36"
                cy="36"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="24"
                cy="24"
                r="9"
                fill={props.colors[3]}
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
