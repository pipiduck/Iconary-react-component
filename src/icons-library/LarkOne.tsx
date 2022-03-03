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
                clipPath={'url(#' + props.id + 'eeb776d5' + ')'}
            >
                <path
                    d="M3.49381 17.7193L41.6776 6.32238L30.3639 44.5894L21.4834 35.7089L21.5251 26.4749L11.9791 26.2046L3.49381 17.7193Z"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.5352 14.8908C25.9731 16.4529 25.9731 18.9856 27.5352 20.5477C29.0973 22.1098 31.63 22.1098 33.1921 20.5477C34.7542 18.9856 34.7542 16.4529 33.1921 14.8908C31.63 13.3287 29.0973 13.3287 27.5352 14.8908Z"
                    fill={props.colors[0]}
                />
                <path
                    d="M41.6777 6.40552L30.364 17.7192"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                    strokeLinecap={props.strokeLinecap}
                    strokeLinejoin={props.strokeLinejoin}
                />
            </g>
            <defs>
                <clipPath
                    id={props.id + 'eeb776d5'}
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
