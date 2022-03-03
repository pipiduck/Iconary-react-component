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
            />
            <path
                d="M6.67969 34L24.0002 24M24.0002 4V24V4ZM41.3207 34L24.0002 24L41.3207 34Z"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17.9998 4.9156C19.8939 4.32071 21.9094 4 23.9998 4C26.0902 4 28.1057 4.32071 29.9998 4.9156M4.62988 29C5.08644 30.7739 5.78024 32.4525 6.67544 34C7.52003 35.46 8.54389 36.8034 9.71693 38M43.3697 29C42.9131 30.7739 42.2193 32.4525 41.3242 34C40.4796 35.46 39.4557 36.8034 38.2827 38"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
