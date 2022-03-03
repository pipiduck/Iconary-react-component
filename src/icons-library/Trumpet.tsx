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
                d="M32 28H38V39C38 40.6569 36.6569 42 35 42C33.3431 42 32 40.6569 32 39V28Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M29 12H39C40.6569 12 42 13.3431 42 15V25C42 26.6569 40.6569 28 39 28H28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M14 14H12C8.68629 14 6 16.6863 6 20C6 23.3137 8.68629 26 12 26H14"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14.1984 33C14.0888 33 14 32.9112 14 32.8016L14 6.19844C14 6.08885 14.0888 6 14.1984 6L17.5 6C24.9558 6 31 12.0442 31 19.5C31 26.9558 24.9558 33 17.5 33L14.1984 33Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
