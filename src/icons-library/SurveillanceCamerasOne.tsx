 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 49"
            fill="none"
        >
            <path
                d="M6 27V43"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M6 34H13L17 28"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M7 21L33.4735 38.649C33.795 38.8633 34.2113 38.8732 34.5426 38.6744L44 33"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M7.07803 13.7187C6.53288 13.3553 6.47867 12.5745 6.96837 12.1392L14.4279 5.50854C14.7655 5.20843 15.2624 5.17193 15.6403 5.41949L42.7046 23.1513C43.312 23.5493 43.3061 24.4416 42.6935 24.8314L33.5496 30.6503C33.2155 30.8629 32.7875 30.8583 32.458 30.6387L7.07803 13.7187Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
        </svg>
    )
);
