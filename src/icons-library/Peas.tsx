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
            <g
                clipPath={'url(#' + props.id + 'b97115c6' + ')'}
            >
                <path
                    d="M27 12C27 12 33.9994 19 33.9995 28C33.9996 37 29.5554 44.2228 25.9995 44C22.4437 43.7772 18.9999 37 20 28C21 19 27 12 27 12Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M26.9998 12C26.9998 12 28.0011 7.87525 31.0002 5.93761C33.9994 3.99997 39.8901 9 39 12C38.1099 15 34.9996 15 33.9997 12C32.9998 9.00001 38 5.5 41 5.93761C44 6.37522 44.2569 11.1798 44 14C43.499 19.5 42 24 42 24"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M26.9999 12C26.9999 12 26.9999 20 20 28C13.0001 36 6.32546 37.6996 4.00039 35C1.67532 32.3004 4.00039 25 11.0001 18C17.9997 11 26.9999 12 26.9999 12Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <circle
                    cx="27.2432"
                    cy="27.4078"
                    r="2.5"
                    fill={props.colors[0]}
                />
                <circle
                    cx="26.2432"
                    cy="34.4078"
                    r="2.5"
                    fill={props.colors[0]}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'b97115c6'}
                >
                    <rect
                        width="48"
                        height="48"
                        fill={props.colors[2]}
                    />
                </clipPath>
            </defs>
        </svg>
    )
);
