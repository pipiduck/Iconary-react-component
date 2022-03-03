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
                clipPath={'url(#' + props.id + '8931b7bb' + ')'}
            >
                <path
                    d="M19.5571 44.7684C19.5571 44.7684 32.4675 20.4873 33.6412 18.28C34.8149 16.0726 37.453 8.98102 30.3894 5.22524C23.3258 1.46947 19.1566 7.18063 17.7482 9.82948"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + '8931b7bb'}
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
