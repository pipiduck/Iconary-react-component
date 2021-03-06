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
                d="M20.0708 9.58579L15.8282 5.34315C15.0472 4.5621 13.7808 4.5621 12.9998 5.34315L7.34292 11C6.56188 11.7811 6.56188 13.0474 7.34292 13.8284L11.5856 18.0711"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M28.9287 37.4142L33.1714 41.6569C33.9524 42.4379 35.2187 42.4379 35.9998 41.6569L41.6566 36C42.4377 35.219 42.4377 33.9526 41.6566 33.1716L37.414 28.9289"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <rect
                x="34.6064"
                y="4.90812"
                width="12"
                height="42"
                rx="2"
                transform="rotate(45 34.6064 4.90812)"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="24"
                cy="24"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="20"
                cy="28"
                r="2"
                fill={props.colors[2]}
            />
            <circle
                cx="28"
                cy="20"
                r="2"
                fill={props.colors[2]}
            />
        </svg>
    )
);
