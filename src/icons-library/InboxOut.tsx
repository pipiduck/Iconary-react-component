 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
            >
                <g>
                    <polyline
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        points="4 30 9 6 9 6 39 6 44 30"
                    />
                    <polygon
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        points="4 30 14.9090909 30 16.7272727 36 31.2727273 36 33.0909091 30 44 30 44 43 4 43"
                    />
                    <polyline
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        transform="translate(24.000000, 17.000000) scale(1, -1) translate(-24.000000, -17.000000) "
                        points="18 14 24 20 30 14"
                    />
                    <path
                        d="M24,26 L24,14"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
