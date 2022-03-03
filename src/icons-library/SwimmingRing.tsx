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
                d="M28 33.1679C30.3069 32.16 32.16 30.3069 33.1679 28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M14.832 28C15.84 30.3069 17.6931 32.16 19.9999 33.1679"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M19.9999 14.8321C17.6931 15.84 15.84 17.6931 14.832 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M28 14.8321C30.3069 15.84 32.16 17.6931 33.1679 20"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M30 40.9758C35.1145 39.1681 39.1681 35.1145 40.9758 30"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M7.02429 30C8.832 35.1145 12.8856 39.1681 18.0001 40.9758"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M18.0001 7.02423C12.8856 8.83194 8.832 12.8855 7.02429 18"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M30 7.02423C35.1145 8.83194 39.1681 12.8855 40.9758 18"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M27 17H21L18 7L20 4H28L30 7L27 17Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17 21V27L7 30L4 28L4 20L7 18L17 21Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M21 31H27L30 41L28 44H20L18 41L21 31Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31 27V21L41 18C42.08 18.8 42.92 19.2 44 20V28C42.92 28.8 42.08 29.2 41 30L31 27Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
