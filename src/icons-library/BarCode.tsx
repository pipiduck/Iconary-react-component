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
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            >
                <g
                    transform="translate(4.000000, 6.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M0,14 L40,14"
                    />
                    <path
                        d="M2,0 L2,8"
                    />
                    <path
                        d="M2,19.9954922 L2,31.9991242"
                    />
                    <path
                        d="M16.4,0 L16.4,8"
                    />
                    <path
                        d="M16.4,20 L16.4,36"
                    />
                    <path
                        d="M30.8,0 L30.8,8"
                    />
                    <path
                        d="M38,0 L38,8"
                    />
                    <path
                        d="M30.8,20 L30.8,28"
                    />
                    <path
                        d="M9.2,0 L9.2,8"
                    />
                    <path
                        d="M9.2,20 L9.2,28"
                    />
                    <path
                        d="M23.6,0 L23.6,8"
                    />
                    <path
                        d="M23.6,20 L23.6,28"
                    />
                    <path
                        d="M38,20 L38,32"
                    />
                </g>
            </g>
        </svg>
    )
);
