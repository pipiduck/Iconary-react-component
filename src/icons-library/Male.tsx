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
                d="M41.9514 15.0485V6.04846H32.9514"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M10.413 38.001C15.8803 43.4683 24.7447 43.4683 30.212 38.001C32.9457 35.2673 34.3125 31.6844 34.3125 28.1015C34.3125 24.5186 32.9457 20.9357 30.212 18.202C24.7447 12.7346 15.8803 12.7346 10.413 18.202C4.94567 23.6693 4.94567 32.5336 10.413 38.001Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M29.9999 18L39.9515 8.0485"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
