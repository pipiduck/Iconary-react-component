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
                d="M41 38.0001H19V44.0001H41V38.0001Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.0001 38.0001C12.4812 30.8772 8.74054 26.7493 7.77829 25.6164C6.33491 23.9169 6.941 21.9962 10.5532 21.9962C14.1653 21.9962 16.2485 27.2816 19.0001 27.2816C19.0165 27.285 19.0176 20.5258 19.0034 7.00418C19.0017 5.34683 20.3438 4.00188 22.0012 4.00014L22.0043 4.00014C23.6635 4.00014 25.0085 5.34515 25.0085 7.0043V15.0137C32.9813 16.2226 37.3158 16.8895 38.0122 17.0145C39.0567 17.2021 41.0001 18.1991 41.0001 21.0682C41.0001 22.9809 41.0001 27.9582 41.0001 38.0001H19.0001Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
