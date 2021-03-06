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
                    transform="translate(8.000000, 4.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <polygon
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        points="0 0 24.8888889 0 32 7.27272727 32 40 0 40"
                    />
                    <rect
                        stroke={props.colors[2]}
                        fill={props.colors[3]}
                        fillRule="nonzero"
                        x="7"
                        y="22"
                        width="18"
                        height="10"
                    />
                    <path
                        d="M7,8 L7,14"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M13,8 L13,14"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M19,8 L19,14"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
