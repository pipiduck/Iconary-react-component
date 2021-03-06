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
                    transform="translate(7.000000, 3.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <circle
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="17"
                        cy="24"
                        r="17"
                    />
                    <path
                        d="M11,1 L23,1"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M17,16 L17,24"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M25,24 L17,24"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M17,1 L17,5"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
