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
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(4.000000, 4.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                    />
                    <path
                        d="M8,12 L8,28"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M16,12 L16,28"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M24,12 L24,28"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M32,12 L32,28"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
