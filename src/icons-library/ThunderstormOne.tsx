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
                d="M20.5294 20L17 31.5L23.1765 32.3846L20.5294 43L32 29.7308L24.9412 27.9615L30.2353 20H20.5294Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M9.45455 29.9942C6.14242 27.461 4 23.4278 4 18.8851C4 11.2166 10.1052 5 17.6364 5C23.9334 5 29.2336 9.34618 30.8015 15.2533C32.0353 14.6159 33.431 14.2567 34.9091 14.2567C39.9299 14.2567 44 18.4011 44 23.5135C44 27.3094 41.7562 30.5716 38.5455 32"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
