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
                        x="8"
                        y="0"
                        width="30"
                        height="40"
                    />
                    <polygon
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                        points="0 7.78947368 8 6 8 40"
                    />
                    <polygon
                        stroke={props.colors[2]}
                        fill={props.colors[3]}
                        fillRule="nonzero"
                        points="23 14 18 20 23 26 28 20"
                    />
                    <path
                        d="M14,6 L14,10"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M32,30 L32,34"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
