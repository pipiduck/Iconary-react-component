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
                clipPath={'url(#' + props.id + 'cfa1b7dc' + ')'}
            >
                <path
                    d="M24 10L12 18L24 26L36 18L24 10Z"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M24 10L36 18L41 11L30 4L24 10Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M24 10L12 18L7 11L18 4L24 10Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M43 22L36 18L24 26L31 31L43 22Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M5 22L12 18L24 26L17 31L5 22Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M36 28V37L24 44L12 37V28"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'cfa1b7dc'}
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
