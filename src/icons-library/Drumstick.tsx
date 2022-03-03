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
                d="M14.1508 33.8198L12.7366 43.7193L4.25135 35.234L14.1508 33.8198Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24.0498 6.94974L14.1503 16.8492C9.46402 21.5355 9.46402 29.1335 14.1503 33.8198V33.8198C18.8366 38.5061 26.4346 38.5061 31.1209 33.8198L41.0204 23.9203"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                cx="32.5355"
                cy="15.435"
                rx="12"
                ry="7"
                transform="rotate(45 32.5355 15.435)"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="30.0605"
                cy="11.3979"
                r="2"
                transform="rotate(45 30.0605 11.3979)"
                fill={props.colors[2]}
            />
            <circle
                cx="37.1318"
                cy="18.469"
                r="2"
                transform="rotate(45 37.1318 18.469)"
                fill={props.colors[2]}
            />
            <circle
                cx="31.4746"
                cy="17.0548"
                r="2"
                transform="rotate(45 31.4746 17.0548)"
                fill={props.colors[2]}
            />
        </svg>
    )
);