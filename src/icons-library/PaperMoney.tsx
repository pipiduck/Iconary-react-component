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
                    transform="translate(4.000000, 7.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <rect
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        x="0"
                        y="0"
                        width="40"
                        height="34"
                        rx="5"
                    />
                    <g
                        transform="translate(13.000000, 8.000000)"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    >
                        <polyline
                            points="1 0 7 6 13 0"
                        />
                        <path
                            d="M0,8 L14,8"
                        />
                        <path
                            d="M0,14 L14,14"
                        />
                        <path
                            d="M7,8 L7,19"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);
