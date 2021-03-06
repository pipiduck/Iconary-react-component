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
                    transform="translate(4.000000, 4.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z"
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                    <polyline
                        strokeLinecap={props.strokeLinecap}
                        points="-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098"
                    />
                </g>
            </g>
        </svg>
    )
);
