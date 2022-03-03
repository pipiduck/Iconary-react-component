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
                d="M29.5164 17.5002C35.0393 27.066 34.4759 37.7308 28.2581 41.3207C22.0403 44.9105 12.5226 40.066 6.99976 30.5002C1.47691 20.9343 2.04029 10.2695 8.25809 6.67968C14.4759 3.08983 23.9936 7.93434 29.5164 17.5002Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M18.2581 17.5002C12.7353 27.066 13.2986 37.7308 19.5164 41.3207C25.7342 44.9105 35.2519 40.066 40.7748 30.5002C46.2976 20.9343 45.7342 10.2695 39.5164 6.67968C33.2986 3.08983 23.7809 7.93434 18.2581 17.5002Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23.7528 10.3444C25.8978 12.2521 27.882 14.6694 29.5163 17.5002C35.0392 27.066 34.4758 37.7308 28.258 41.3207C26.9599 42.0702 25.5179 42.452 23.9985 42.5"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
