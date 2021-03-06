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
                y="10"
                width="38"
                height="28"
                rx="3"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M13 24L13 17"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="15"
                y="29"
                width="4"
                height="4"
                rx="2"
                transform="rotate(90 15 29)"
                fill={props.colors[2]}
            />
        </svg>
    )
);
