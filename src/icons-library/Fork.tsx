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
                    transform="translate(7.000000, 4.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <circle
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="30"
                        cy="4"
                        r="4"
                    />
                    <circle
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="4"
                        cy="4"
                        r="4"
                    />
                    <circle
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="17"
                        cy="36"
                        r="4"
                    />
                    <path
                        d="M4,8 L4,11 C4,18 17,21 17,28 L17,32 L17,28 C17,21 30,18 30,11 L30,8"
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
