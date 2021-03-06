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
                d="M43.9014 36H4.09888C5.10233 25.8934 13.6294 18 24.0001 18C34.3708 18 42.8979 25.8934 43.9014 36Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14 20L10 13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M33 20L37 13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="15"
                cy="29"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="33"
                cy="29"
                r="2"
                fill={props.colors[2]}
            />
        </svg>
    )
);
