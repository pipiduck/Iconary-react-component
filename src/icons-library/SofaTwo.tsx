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
                d="M44 38V18H36V31H12V18H4V38H44Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M36 6H12L12 31H36L36 6Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 44C12.2091 44 14 42.2091 14 40C12.9028 40.0044 6.7003 40 6 40C6 42.2091 7.79086 44 10 44Z"
                fill={props.colors[0]}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38 44C40.2091 44 42 42.2091 42 40C40.0954 39.9934 34.8627 40 34 40C34 42.2091 35.7909 44 38 44Z"
                fill={props.colors[0]}
            />
        </svg>
    )
);
