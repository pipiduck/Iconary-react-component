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
                d="M15 12L18 6H30L33 12H15Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M28 20C25 20.1296 19 21.0889 19 23.8889C19 27.3889 29 26.6111 29 30.1111C29 32.9111 22.3333 33.8704 19 34"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
