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
                    transform="translate(4.000000, 8.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="0"
                        y="13"
                        width="8"
                        height="14"
                    />
                    <rect
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="32"
                        y="13"
                        width="8"
                        height="14"
                    />
                    <rect
                        strokeLinecap={props.strokeLinecap}
                        x="8"
                        y="19"
                        width="24"
                        height="8"
                    />
                    <polyline
                        strokeLinecap={props.strokeLinecap}
                        points="4 12 4 0 36 0 36 12"
                    />
                    <path
                        d="M4,28 L4,32"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M36,28 L36,32"
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
