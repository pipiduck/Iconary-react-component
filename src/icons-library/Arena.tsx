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
                d="M44 26L24 36L4 26L24 16L44 26Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 7L44 17L24 27L4 17L24 7Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M44 26V34L24 44L4 34V26L24 36L44 26Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M44 14V17V26"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4 26V17V14"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 36V24"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 16V4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
