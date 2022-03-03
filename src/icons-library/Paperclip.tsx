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
                d="M26.1219 37.435C26.1219 37.435 37.4356 26.1213 40.264 23.2929C43.0924 20.4644 44.5066 13.3934 39.5569 8.44361C34.6071 3.49387 27.5361 4.90808 24.7076 7.73651C21.8792 10.5649 7.02998 25.4142 5.61576 26.8284C4.20155 28.2426 2.08023 33.1924 6.32287 37.435C10.5655 41.6776 15.5153 39.5563 16.9295 38.1421C18.3437 36.7279 33.9 21.1715 35.3142 19.7573C36.7285 18.3431 37.4356 14.8076 35.3142 12.6863C33.1929 10.5649 29.6574 11.272 28.2432 12.6863C26.829 14.1005 14.8082 26.1213 14.8082 26.1213"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
