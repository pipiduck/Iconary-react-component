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
                d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"
                fill={props.colors[1]}
            />
            <path
                d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"
                fill={props.colors[1]}
            />
            <path
                d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
