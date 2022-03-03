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
                d="M19.6 34.5H28.4"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M2.30286 27.3909L9.95797 9.5618L14.9492 7"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M45.8047 27.6333L38.0501 9.5618L33.0588 7"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.40066 26.7998H18.717C19.4317 26.7998 20.0111 27.3792 20.0111 28.0939C20.0111 28.128 20.0098 28.1621 20.0071 28.1961L19.0797 39.9078C19.0264 40.5808 18.4647 41.0998 17.7896 41.0998H4.32806C3.65296 41.0998 3.09127 40.5808 3.03798 39.9078L2.11058 28.1961C2.05416 27.4836 2.58601 26.8603 3.2985 26.8038C3.33249 26.8012 3.36657 26.7998 3.40066 26.7998Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.283 26.7998H44.5994C45.3141 26.7998 45.8935 27.3792 45.8935 28.0939C45.8935 28.128 45.8921 28.1621 45.8895 28.1961L44.962 39.9078C44.9088 40.5808 44.3471 41.0998 43.672 41.0998H30.2104C29.5353 41.0998 28.9736 40.5808 28.9203 39.9078L27.9929 28.1961C27.9365 27.4836 28.4684 26.8603 29.1809 26.8038C29.2148 26.8012 29.2489 26.7998 29.283 26.7998Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
