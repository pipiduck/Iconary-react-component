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
                    <rect
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        x="4"
                        y="4"
                        width="40"
                        height="40"
                        rx="3"
                    />
                    <path
                        d="M37,12 L33,36"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        transform="translate(35.000000, 24.000000) scale(-1, 1) translate(-35.000000, -24.000000) "
                    />
                    <path
                        d="M16,12 L12,36"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24,12 L24,16"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24,22 L24,26"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <path
                        d="M24,32 L24,36"
                        stroke={props.colors[2]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
