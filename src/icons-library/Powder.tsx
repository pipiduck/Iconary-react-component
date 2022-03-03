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
                d="M44 40V20C44 18.3431 42.6569 17 41 17H35.715C34.1737 17 32.8226 18.2428 31.7911 19.388C30.6326 20.6742 28.3769 22 24 22C19.6231 22 17.3674 20.6742 16.2089 19.388C15.1774 18.2428 13.8263 17 12.285 17H7C5.34315 17 4 18.3431 4 20V40C4 41.6569 5.34315 43 7 43H41C42.6569 43 44 41.6569 44 40Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M33 17C33 19.7614 28.9706 22 24 22C19.0294 22 15 19.7614 15 17"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                cx="24"
                cy="10"
                rx="9"
                ry="5"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M33 17V10"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M15 17V10"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                cx="27"
                cy="10"
                rx="2"
                ry="1"
                fill={props.colors[0]}
            />
            <ellipse
                cx="21"
                cy="10"
                rx="2"
                ry="1"
                fill={props.colors[0]}
            />
        </svg>
    )
);
