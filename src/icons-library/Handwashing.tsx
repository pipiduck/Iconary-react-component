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
                y="24"
                width="7"
                height="20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M32.0003 16C30.5006 12.5 36.0003 6 36.0003 6C36.0003 6 41.5001 12.5 40.0003 16C38.5005 19.5 33.5 19.5 32.0003 16Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 42.5C22 42.5 15 40 11 40V30C18 30 17.5 27.5001 22 26C26.5 24.5 30 26 29.5 29C29 32 24 35 24 35C32 35 32 33 36 30C40 27 44 28 44 31C44 34 40 42.5 31 42.5Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
