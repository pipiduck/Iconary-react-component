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
                d="M4 24C6.2922 32.63 14.3769 39 24 39C33.6231 39 41.7078 32.63 44 24C41.7078 15.37 33.6231 9 24 9C14.3769 9 6.2922 15.37 4 24Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M40 24H44"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14 24H34"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M4 24H8"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17 20V28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 20V28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 20V28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
