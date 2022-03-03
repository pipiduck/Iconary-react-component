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
                d="M22 43C17.2742 41.2327 13.3325 35.1851 11.3597 31.6428C10.5079 30.1134 10.9566 28.2347 12.3236 27.1411C13.8473 25.9222 16.0438 26.0438 17.4236 27.4236L19 29V17.5C19 16.1193 20.1193 15 21.5 15C22.8807 15 24 16.1193 24 17.5V23.5C24 22.1193 25.1193 21 26.5 21C27.8807 21 29 22.1193 29 23.5V25.5C29 24.1193 30.1193 23 31.5 23C32.8807 23 34 24.1193 34 25.5V27.5C34 26.1193 35.1193 25 36.5 25C37.8807 25 39 26.1193 39 27.5V35.368C39 36.4383 38.7354 37.496 38.1185 38.3707C37.0949 39.8219 35.255 42.0336 33 43C29.5 44.5 26.3701 44.6343 22 43Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M10 8L32 8"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M14.0003 12L10 8L14 4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M28 4L32 8L28 12"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
