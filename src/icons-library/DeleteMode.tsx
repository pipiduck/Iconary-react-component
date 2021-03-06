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
                d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17 24H31"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
