 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(4.000000, 3.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M6,41 L34,41 L34,17.9473684 C34,11.9013038 27.7319865,7 20,7 C12.2680135,7 6,11.9013038 6,17.9473684 L6,41 Z"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M34,19.0436777 C34,18.8000534 34,18.434617 34,17.9473684 C34,11.9013038 27.7319865,7 20,7 C12.2680135,7 6,11.9013038 6,17.9473684 C6,18.4331602 6,18.7975039 6,19.0403998 L34,19.0436777 Z"
                        fill={props.colors[1]}
                        fillRule="nonzero"
                    />
                    <path
                        d="M0,19 L40,19"
                        strokeLinecap={props.strokeLinecap}
                    />
                    <path
                        d="M17,1 L23,1"
                        strokeLinecap={props.strokeLinecap}
                    />
                </g>
            </g>
        </svg>
    )
);
