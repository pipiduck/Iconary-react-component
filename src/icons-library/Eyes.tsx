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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 40.9999C33.9411 40.9999 42 32.6778 42 26.9999C42 21.3219 33.9411 12.9999 24 12.9999C14.0589 12.9999 6 21.3277 6 26.9999C6 32.6721 14.0589 40.9999 24 40.9999Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 32.9999C27.3137 32.9999 30 30.3136 30 26.9999C30 23.6862 27.3137 20.9999 24 20.9999C20.6863 20.9999 18 23.6862 18 26.9999C18 30.3136 20.6863 32.9999 24 32.9999Z"
                fill={props.colors[3]}
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M13.2637 11.266L15.8582 14.8862"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M35.625 11.7103L33.0304 15.3305"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M24.0088 6.99988V12.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);