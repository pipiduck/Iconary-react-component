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
                d="M24 40C35.0457 40 44 38.2091 44 36C44 34.5611 40.7012 33.2997 35 32.5949L27 12L15 8L18 14L13 32.5949C7.2988 33.2997 4 34.5611 4 36C4 38.2091 12.9543 40 24 40Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
