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
                d="M40.5178 34.3161C43.8044 32.005 45.2136 27.8302 44.0001 24C42.7866 20.1698 39.0705 18.0714 35.0527 18.0745H32.7317C31.2144 12.1613 26.2082 7.79572 20.1435 7.0972C14.0787 6.39868 8.21121 9.5118 5.38931 14.9253C2.56741 20.3388 3.37545 26.9317 7.42115 31.5035"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M24.0086 41L24.0002 23"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M30.3638 34.636L23.9998 41L17.6358 34.636"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);