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
                    transform="translate(7.500000, 6.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M32.5,0 L32.5,36"
                    />
                    <path
                        d="M21.5,10 L21.5,36"
                    />
                    <path
                        d="M11.5,20 L11.5,36"
                    />
                    <path
                        d="M0.5,30 L0.5,36"
                    />
                </g>
            </g>
        </svg>
    )
);
