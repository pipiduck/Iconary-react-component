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
                d="M21.4824 8.47412L23.8802 16.6267H4.75757L7.21533 8.47412H21.4824Z"
                fill={props.colors[0]}
            />
            <path
                d="M9.1335 18.1253L17.3461 20.1035L7.81473 36.6485L2 30.4741L9.1335 18.1253Z"
                fill={props.colors[0]}
            />
            <path
                d="M11.2915 33.6512L17.1062 27.4768L26.6975 44.0218L18.425 46L11.2915 33.6512Z"
                fill={props.colors[0]}
            />
            <path
                d="M40.0655 39.4659H25.7985L23.4006 31.3733H42.5233"
                fill={props.colors[0]}
            />
            <path
                d="M45.2806 17.466L38.1471 29.8747L29.9346 27.8965L39.4659 11.3515"
                fill={props.colors[0]}
            />
            <path
                d="M35.989 14.3488L30.1743 20.5232L20.583 3.91825L28.8555 2L35.989 14.3488Z"
                fill={props.colors[0]}
            />
        </svg>
    )
);
