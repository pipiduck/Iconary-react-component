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
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M18,0 L18,37"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <polygon
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        points="18 4 33.5454545 4 36 8 33.5454545 12 18 12"
                    />
                    <polygon
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        transform="translate(9.000000, 22.000000) scale(-1, 1) translate(-9.000000, -22.000000) "
                        points="0 18 15.5454545 18 18 22 15.5454545 26 0 26"
                    />
                    <path
                        d="M10,38 L26,38"
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
