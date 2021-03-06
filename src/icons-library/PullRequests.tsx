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
                        cy="36"
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
                    <path
                        d="M4,8 L4,32"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M17,6 L26,6 C28.209139,6 30,7.790861 30,10 L30,32"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <polyline
                        strokeLinecap={props.strokeLinecap}
                        transform="translate(20.000000, 6.000000) rotate(180.000000) translate(-20.000000, -6.000000) "
                        points="17 0 23 6 17 12"
                    />
                </g>
            </g>
        </svg>
    )
);
