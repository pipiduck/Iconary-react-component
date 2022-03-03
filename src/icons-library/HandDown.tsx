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
                d="M7.05322 10.0003L29.0532 10.0003V4.00032L7.05322 4.00032V10.0003Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.0531 10.0003C35.5721 17.1232 39.3127 21.2512 40.2749 22.3841C41.7183 24.0835 41.1122 26.0043 37.5001 26.0043C33.8879 26.0043 31.8047 20.7189 29.0531 20.7189C29.0367 20.7155 29.0356 27.4746 29.0498 40.9963C29.0515 42.6536 27.7094 43.9986 26.0521 44.0003L26.0489 44.0003C24.3898 44.0003 23.0447 42.6553 23.0447 40.9962V32.9867C15.072 31.7779 10.7374 31.111 10.0411 30.9859C8.99656 30.7984 7.05308 29.8014 7.05308 26.9323C7.05308 25.0196 7.05308 20.0423 7.05308 10.0003L29.0531 10.0003Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);