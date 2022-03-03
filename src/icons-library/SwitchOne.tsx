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
                cy="24"
                r="19"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <rect
                x="36.0063"
                y="19.3335"
                width="10.5189"
                height="24.0125"
                rx="5.25944"
                transform="rotate(90 36.0063 19.3335)"
                fill={props.colors[3]}
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
            />
            <rect
                x="36.0063"
                y="29.8524"
                width="10"
                height="10"
                rx="5"
                transform="rotate(-180 36.0063 29.8524)"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
