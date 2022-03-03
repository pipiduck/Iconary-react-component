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
                clipPath={'url(#' + props.id + '1c9a5933' + ')'}
            >
                <circle
                    cx="30.0748"
                    cy="15.5623"
                    r="11"
                    transform="rotate(40 30.0748 15.5623)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M21.6483 8.49166C17.0388 8.54003 15.3218 5.14119 13.072 7.82235C11.0393 10.2448 13.565 13.4577 11.6367 15.7558"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M25.3022 25.9171C25.3022 25.9171 21.1241 30.8964 19.5172 32.8115C17.9102 34.7267 17.8353 37.9273 15.9069 40.2255C13.9786 42.5236 11.1609 42.7701 8.86278 40.8418C6.56465 38.9134 6.31814 36.0957 8.2465 33.7976C10.1749 31.4995 13.3139 30.8699 14.9209 28.9548C16.5279 27.0397 20.0837 23.0613 20.706 22.0604"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <circle
                    cx="11.2404"
                    cy="19.3395"
                    r="3"
                    transform="rotate(40 11.2404 19.3395)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <circle
                    cx="28.4632"
                    cy="37.7073"
                    r="3"
                    transform="rotate(40 28.4632 37.7073)"
                    fill={props.colors[1]}
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    d="M37.2157 24.165C37.8452 27.3041 40.0685 32.4331 38.0785 34.0269C36.0885 35.6206 31.5539 32.4683 30.3915 35.4092"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + '1c9a5933'}
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
