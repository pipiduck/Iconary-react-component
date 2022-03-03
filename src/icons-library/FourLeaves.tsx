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
                d="M44 4.00006C44 4.00006 33.5899 2.20107 30 8.00006C27.3278 12.3167 31 17.0001 31 17.0001M44 4.00006C44 4.00006 45.799 14.4102 40 18.0001C35.6834 20.6723 31 17.0001 31 17.0001M44 4.00006L31 17.0001M31 17.0001L28 20.0001"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M44 43.9999C44 43.9999 33.5899 45.7989 30 39.9999C27.3278 35.6833 31 30.9999 31 30.9999M44 43.9999C44 43.9999 45.799 33.5898 40 29.9999C35.6834 27.3277 31 30.9999 31 30.9999M44 43.9999L31 30.9999M31 30.9999L28 27.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4.26367 4.00006C4.26367 4.00006 14.6738 2.20107 18.2637 8.00006C20.9359 12.3167 17.2637 17.0001 17.2637 17.0001M4.26367 4.00006C4.26367 4.00006 2.46468 14.4102 8.26367 18.0001C12.5803 20.6723 17.2637 17.0001 17.2637 17.0001M4.26367 4.00006L17.2637 17.0001M17.2637 17.0001L20.2637 20.0001"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4.26367 43.9999C4.26367 43.9999 14.6738 45.7989 18.2637 39.9999C20.9359 35.6833 17.2637 30.9999 17.2637 30.9999M4.26367 43.9999C4.26367 43.9999 2.46468 33.5898 8.26367 29.9999C12.5803 27.3277 17.2637 30.9999 17.2637 30.9999M4.26367 43.9999L17.2637 30.9999M17.2637 30.9999L20.2637 27.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);