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
                d="M34 44H14C9 44 7.0003 43 7.0003 40L7 34L17.9999 34L19 38H30L31 34L41.0003 34V40C41.0003 43 39 44 34 44Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M12 34C9.95549 30.882 7 27 7 21.8544C7 11.4224 14.6112 4 24 4C33.3888 4 41 11.4224 41 21.8544C41 27 38.0445 30.882 36 34"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
