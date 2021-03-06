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
                    transform="translate(7.000000, 3.500000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M0,0.5 L34,0.5"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M0,40.5 L34,40.5"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M30,20.4999965 C27.3333333,33.8388874 23,40.5055541 17,40.4999965 C11,40.494439 6.66666667,33.8277723 4,20.4999965 L30,20.4999965 Z"
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        transform="translate(17.000000, 30.499998) rotate(180.000000) translate(-17.000000, -30.499998) "
                    />
                    <path
                        d="M30,0.5 C27.3333333,13.8388909 23,20.5055575 17,20.5 C11,20.4944425 6.66666667,13.8277758 4,0.5 L30,0.5 Z"
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                </g>
            </g>
        </svg>
    )
);
