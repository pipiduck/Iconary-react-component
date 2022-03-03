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
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="14"
                cy="24"
                r="3"
                fill={props.colors[2]}
            />
            <circle
                cx="24"
                cy="24"
                r="3"
                fill={props.colors[2]}
            />
            <circle
                cx="34"
                cy="24"
                r="3"
                fill={props.colors[2]}
            />
        </svg>
    )
);
