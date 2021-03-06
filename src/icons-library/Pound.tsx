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
                    transform="translate(6.000000, 5.500000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M0,10.5 L36,10.5"
                    />
                    <path
                        d="M-8,18.5 L28,18.5"
                        transform="translate(10.000000, 18.500000) rotate(90.000000) translate(-10.000000, -18.500000) "
                    />
                    <path
                        d="M8,18.5 L44,18.5"
                        transform="translate(26.000000, 18.500000) rotate(90.000000) translate(-26.000000, -18.500000) "
                    />
                    <path
                        d="M0,26.5 L36,26.5"
                    />
                </g>
            </g>
        </svg>
    )
);
