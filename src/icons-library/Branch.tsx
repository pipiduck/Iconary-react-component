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
                    transform="translate(5.000000, 4.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <circle
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        cx="35"
                        cy="20"
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
                        cx="4"
                        cy="36"
                        r="4"
                    />
                    <polyline
                        strokeLinecap={props.strokeLinecap}
                        points="4 8 4 32 4 20.0083363 31 20.0083363"
                    />
                </g>
            </g>
        </svg>
    )
);
