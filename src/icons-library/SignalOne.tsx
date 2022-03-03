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
                d="M38.1421 38.1421C41.7614 34.5228 44 29.5228 44 23.9999C44 18.4771 41.7614 13.4771 38.1421 9.85779"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M9.85786 9.85779C6.23858 13.4771 4 18.4771 4 23.9999C4 29.5228 6.23858 34.5228 9.85786 38.1421"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M15.1005 14.1005C12.567 16.634 11 20.134 11 24C11 27.866 12.567 31.366 15.1005 33.8995"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M32.8995 33.8995C35.433 31.366 37 27.866 37 24C37 20.134 35.433 16.634 32.8995 14.1005"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M24 43.9999V33.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24 3.99988V13.9999"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <circle
                cx="24"
                cy="23.9999"
                r="3"
                fill={props.colors[0]}
            />
        </svg>
    )
);
