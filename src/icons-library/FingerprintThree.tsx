 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M42.4309 12.0391C37.7023 7.38257 31.1542 4.5 23.9187 4.5C16.7257 4.5 10.2121 7.34876 5.48999 11.9571"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M6.66675 29.4743V29.4167C6.66675 19.8437 14.4271 12.0833 24.0001 12.0833"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M31.1694 13.6309C37.1649 16.3582 41.3333 22.4006 41.3333 29.4167V29.4296"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14.25 37V29.4167C14.25 24.0319 18.6152 19.6667 24 19.6667C29.3848 19.6667 33.75 24.0319 33.75 29.4167V37"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M17.5261 43.5C19.489 43.0154 20.75 40.9456 20.75 39.196C20.75 37.3354 20.75 34.4367 20.75 30.5C20.75 28.7051 22.2051 27.25 24 27.25C25.795 27.25 27.25 28.7051 27.25 30.5V39.196"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
