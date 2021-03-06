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
                    transform="translate(6.000000, 5.091863)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <path
                        d="M5,0.908136641 L0,36.9081366"
                    />
                    <path
                        d="M36.9287415,0.908136641 L31.9643708,36.8633744"
                        transform="translate(33.964371, 18.886476) scale(-1, 1) translate(-33.964371, -18.886476) "
                    />
                    <path
                        d="M18,0.908136641 L18,6.90813664"
                    />
                    <path
                        d="M18,29.9081366 L18,36.9081366"
                    />
                    <path
                        d="M18,14.9081366 L18,21.9081366"
                    />
                </g>
            </g>
        </svg>
    )
);
