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
                d="M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z"
                fill={props.colors[1]}
            />
            <path
                d="M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z"
                fill={props.colors[1]}
            />
            <path
                d="M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z"
                fill={props.colors[1]}
            />
            <path
                d="M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5M18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244M18.0098 29.5L24.0001 19.1244M18.0098 29.5H29.9905M29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244M29.9905 29.5L24.0001 19.1244"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
