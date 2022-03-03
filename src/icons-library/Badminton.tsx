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
                d="M19.5 44C21.99 44 24 41.99 24 39.5V19H20L15 39.5C15 41.99 17.01 44 19.5 44Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M20 19H16L6.67996 37.9C5.56996 40.51 7.15996 43.64 9.97996 43.97C10.15 43.99 10.32 44 10.5 44C12.99 44 15 41.99 15 39.5"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M28.5 44C26.01 44 24 41.99 24 39.5V19H28L33 39.5C33 41.99 30.99 44 28.5 44Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M28 19H32L41.32 37.9C42.43 40.51 40.84 43.64 38.02 43.97C37.85 43.99 37.68 44 37.5 44C35.01 44 33 41.99 33 39.5"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M16.06 13C16.02 12.67 16 12.34 16 12C16 7.58 19.58 4 24 4C28.42 4 32 7.58 32 12C32 12.34 31.98 12.67 31.94 13H16.06Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="2"
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
