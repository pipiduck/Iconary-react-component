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
            >
                <g>
                    <path
                        d="M24,44 C32.836556,44 40,37.4875642 40,29.4545455 C40,21.5757576 34.6666667,13.0909091 24,4 C13.3333333,13.0909091 8,21.5757576 8,29.4545455 C8,37.4877782 15.163444,44 24,44 Z"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <g
                        transform="translate(18.000000, 19.000000)"
                        stroke={props.colors[2]}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                        strokeWidth={props.strokeWidth}
                    >
                        <polyline
                            points="0.857142857 0 6 5.36842105 11.1428571 0"
                        />
                        <path
                            d="M0,7.15789474 L12,7.15789474"
                        />
                        <path
                            d="M0,12.5263158 L12,12.5263158"
                        />
                        <path
                            d="M6,7.15789474 L6,17"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);
