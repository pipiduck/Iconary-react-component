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
            <g
                clipPath={'url(#' + props.id + 'ed68d5b7' + ')'}
            >
                <rect
                    x="6"
                    y="6"
                    width="36"
                    height="36"
                    rx="3"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                />
                <path
                    d="M23.2925 10.565L20.0499 13.8076C19.4199 14.4376 19.8661 15.5147 20.757 15.5147H27.2423C28.1332 15.5147 28.5793 14.4376 27.9494 13.8076L24.7067 10.565C24.3162 10.1745 23.683 10.1745 23.2925 10.565Z"
                    fill={props.colors[2]}
                />
                <path
                    d="M10.5649 24.7071L13.8075 27.9498C14.4375 28.5797 15.5146 28.1336 15.5146 27.2426V20.7574C15.5146 19.8665 14.4375 19.4203 13.8075 20.0503L10.5649 23.2929C10.1744 23.6834 10.1744 24.3166 10.5649 24.7071Z"
                    fill={props.colors[2]}
                />
                <path
                    d="M24.7065 37.435L27.9491 34.1924C28.5791 33.5624 28.1329 32.4853 27.242 32.4853H20.7568C19.8658 32.4853 19.4197 33.5624 20.0496 34.1924L23.2923 37.435C23.6828 37.8255 24.316 37.8255 24.7065 37.435Z"
                    fill={props.colors[2]}
                />
                <path
                    d="M37.4341 23.2929L34.1915 20.0502C33.5615 19.4203 32.4844 19.8664 32.4844 20.7574V27.2426C32.4844 28.1335 33.5615 28.5797 34.1915 27.9497L37.4341 24.7071C37.8246 24.3166 37.8246 23.6834 37.4341 23.2929Z"
                    fill={props.colors[2]}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'ed68d5b7'}
                >
                    <rect
                        width="48"
                        height="48"
                        fill={props.colors[2]}
                    />
                </clipPath>
            </defs>
        </svg>
    )
);
