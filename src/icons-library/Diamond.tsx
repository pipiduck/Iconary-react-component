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
                    transform="translate(3.000000, 5.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <polygon
                        points="7.63636364 0 34.3636364 0 42 13.3 21 38 0 13.3"
                    />
                    <polyline
                        points="7.63636364 0 21 38 34.3636364 0"
                    />
                    <path
                        d="M0,13.3 L42,13.3"
                    />
                    <polyline
                        points="12.4090909 13.3 21 0 29.5909091 13.3"
                    />
                </g>
            </g>
        </svg>
    )
);
