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
                d="M24.7071 9.56496L9.85789 24.4142C6.34317 27.9289 6.34317 33.6274 9.85789 37.1421V37.1421C13.3726 40.6568 19.0711 40.6568 22.5858 37.1421L40.2635 19.4645C42.6066 17.1213 42.6066 13.3223 40.2635 10.9792V10.9792C37.9203 8.63603 34.1213 8.63603 31.7782 10.9792L14.1005 28.6568C12.929 29.8284 12.929 31.7279 14.1005 32.8995V32.8995C15.2721 34.0711 17.1716 34.0711 18.3432 32.8995L33.1924 18.0502"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);