 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 49 50"
            fill="none"
        >
            <ellipse
                cx="17.6777"
                cy="17.6777"
                rx="9"
                ry="16"
                transform="rotate(-45 17.6777 17.6777)"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                rx="9"
                ry="16"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 17.6777 31.3783)"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                rx="9"
                ry="16"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 31.3223 17.6777)"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <ellipse
                cx="31.3223"
                cy="31.3783"
                rx="9"
                ry="16"
                transform="rotate(135 31.3223 31.3783)"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
