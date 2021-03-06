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
                <g
                    transform="translate(0.000000, -0.000000)"
                >
                    <circle
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        cx="10"
                        cy="36"
                        r="6"
                    />
                    <path
                        d="M40.0614849,8 C24,28.4331467 15.8047379,38.6805435 14.2426407,40.2426407 C11.8994949,42.5857864 8.10050506,42.5857864 5.75735931,40.2426407"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                    <circle
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        fill={props.colors[1]}
                        fillRule="nonzero"
                        strokeLinejoin={props.strokeLinejoin}
                        cx="38"
                        cy="36"
                        r="6"
                    />
                    <path
                        d="M42.2426407,40.2426407 C39.8994949,42.5857864 36.1005051,42.5857864 33.7573593,40.2426407 C32.1952621,38.6805435 24,28.4459921 8.00071241,8"
                        stroke={props.colors[0]}
                        strokeWidth={props.strokeWidth}
                        strokeLinecap={props.strokeLinecap}
                        strokeLinejoin={props.strokeLinejoin}
                    />
                </g>
            </g>
        </svg>
    )
);
