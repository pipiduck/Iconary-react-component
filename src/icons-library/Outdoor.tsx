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
                    fill={props.colors[1]}
                    fillRule="nonzero"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <polygon
                        points="-3.38652717e-14 38 14 6 24 30 28 18 40 38"
                    />
                    <circle
                        cx="33"
                        cy="5"
                        r="5"
                    />
                </g>
            </g>
        </svg>
    )
);
