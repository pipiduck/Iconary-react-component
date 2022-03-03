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
                clipPath={'url(#' + props.id + '859f6427' + ')'}
            >
                <path
                    d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M31 24C31 26.2091 32.7909 28 35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M13 36C13 38.2091 14.7909 40 17 40C19.2091 40 21 38.2091 21 36C21 33.7909 19.2091 32 17 32C14.7909 32 13 33.7909 13 36Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M4 36H13"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M21 36H44"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M4 12H13"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M21 12H44"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M4 4V44"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M4 24H31"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
                <path
                    d="M39 24H44"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + '859f6427'}
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
