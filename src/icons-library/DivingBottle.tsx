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
                d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14 11V4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 11V4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M21 8V4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M38 8V4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <line
                x1="12"
                y1="6"
                x2="20"
                y2="6"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <line
                x1="29"
                y1="6"
                x2="37"
                y2="6"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="10"
                y="11"
                width="8"
                height="24"
                rx="4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="27"
                y="11"
                width="8"
                height="24"
                rx="4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M27 15C27 12.7909 28.7909 11 31 11C33.2091 11 35 12.7909 35 15V19H27V15Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M10 15C10 12.7909 11.7909 11 14 11C16.2091 11 18 12.7909 18 15V19H10V15Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
