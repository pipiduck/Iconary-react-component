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
                    transform="translate(6.000000, 4.000000)"
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M0,10 L36,10 L36,20 C32,28 26,32 18,32 C10,32 4,28 0,20 L0,10 Z"
                        stroke={props.colors[0]}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                    <polyline
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                        points="27 30 26 40 10 40 9 30"
                    />
                    <path
                        d="M16,20 L20,20"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M10,8 L10,0"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                        transform="translate(10.000000, 4.000000) rotate(180.000000) translate(-10.000000, -4.000000) "
                    />
                    <path
                        d="M26,8 L26,0"
                        stroke={props.colors[0]}
                        strokeLinecap={props.strokeLinecap}
                        transform="translate(26.000000, 4.000000) rotate(180.000000) translate(-26.000000, -4.000000) "
                    />
                </g>
            </g>
        </svg>
    )
);
