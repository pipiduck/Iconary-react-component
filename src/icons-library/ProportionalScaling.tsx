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
                clipPath={'url(#' + props.id + 'e6716000' + ')'}
            >
                <path
                    d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                />
                <path
                    d="M19 40L32 18"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M32 40L38 29"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'e6716000'}
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
