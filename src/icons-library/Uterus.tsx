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
                d="M31.9993 18C31.0762 24 28.9993 29.5 24.4993 29.5C19.9993 29.5 18.4993 24.5 16.9993 18C15.4993 11.5 16.9993 6 24.4993 6C31.9993 6 32.9223 12 31.9993 18Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M20 27V43"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M29 27V43"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M16.5 12C14.7309 10.456 12.6403 10.3301 10.0869 10.5048C6.25676 10.7668 4 13.6924 4 18.0008M4 18.0008C4 22.3092 6.89653 26.1829 9.8883 25.2965C12.8801 24.4101 12.4618 20.9101 11.0625 19.2691C9.66322 17.6281 5.82132 17.0033 4 18.0008Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M32.5 12.5C34.25 10.8682 36.0328 10.3296 38.8405 10.5043C43.052 10.7664 44 13.648 44 17.9564M44 17.9564C44 22.2648 42.3485 26.1825 39.0589 25.2961C35.7692 24.4097 36.2292 20.9096 37.7678 19.2686C39.3064 17.6276 41.9973 16.9589 44 17.9564Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
