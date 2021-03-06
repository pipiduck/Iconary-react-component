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
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(6.000000, 8.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M30,11 L6,11"
                    />
                    <path
                        d="M36,1 L0,1"
                    />
                    <path
                        d="M36,21 L0,21"
                    />
                    <path
                        d="M30,31 L6,31"
                    />
                </g>
            </g>
        </svg>
    )
);
