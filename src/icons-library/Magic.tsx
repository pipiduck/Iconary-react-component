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
                    transform="translate(5.000000, 4.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M25,0 L25,6 M34.8994949,4.10050506 L30.6568542,8.34314575 M39,14 L33,14 M34.8994949,23.8994949 L30.6568542,19.6568542 M25,28 L25,22 M15.1005051,23.8994949 L19.3431458,19.6568542 M11,14 L17,14 M15.1005051,4.10050506 L19.3431458,8.34314575"
                    />
                    <path
                        d="M24.5857864,14.4142136 L0.544155877,38.4558441"
                        transform="translate(12.564971, 26.435029) rotate(-0.000000) translate(-12.564971, -26.435029) "
                    />
                </g>
            </g>
        </svg>
    )
);
