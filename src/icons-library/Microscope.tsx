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
                d="M26 44C30.3462 40.9919 32.6627 37.9513 32.9493 34.8782C33.2359 31.805 32.308 29.5123 30.1657 28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.6553 28.2227C30.1406 28.2227 32.1553 26.2079 32.1553 23.7227C32.1553 21.2374 30.1406 19.2227 27.6553 19.2227C25.17 19.2227 23.1553 21.2374 23.1553 23.7227C23.1553 26.2079 25.17 28.2227 27.6553 28.2227Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M24.2882 27L18.7783 32.5772L9.58594 23.3848L27.9707 4.99999L37.1631 14.1924L30.9764 20.3791"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M6.55762 28.1357L14.4195 35.8141"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M6 44H42"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
