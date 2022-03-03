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
            <circle
                cx="24"
                cy="12"
                r="3"
                fill={props.colors[0]}
            />
            <circle
                cx="24"
                cy="24"
                r="3"
                fill={props.colors[0]}
            />
            <circle
                cx="24"
                cy="35"
                r="3"
                fill={props.colors[0]}
            />
        </svg>
    )
);
