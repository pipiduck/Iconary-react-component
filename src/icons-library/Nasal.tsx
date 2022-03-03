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
                d="M16.9875 4.00018C17.108 10.2502 16.7846 14.5866 16.0172 17.0093C14.8662 20.6435 6.08203 30.763 6.08203 36.1022C6.08203 41.4413 12.3865 44.3893 15.7908 42.3788"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M32.002 4.00018C31.7773 10.2502 32.0486 14.5866 32.8159 17.0093C33.9669 20.6435 42.959 29.4498 42.959 35.2926C42.959 41.1354 36.4466 44.3893 33.0423 42.3788"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M13.0059 34.8338C14.7153 33.8616 16.2019 33.8616 17.4657 34.8338C19.3614 36.2922 19.9562 40.0001 24.0084 40.0001C28.0607 40.0001 30.0472 35.8428 32.0001 34.8338C33.3021 34.1612 34.6354 34.1612 36.0001 34.8338"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M20.2852 22.1457C19.4914 23.0002 18.6514 23.9533 18.0381 25.614C17.5732 26.8728 17.4803 27.6028 17.416 28.4241"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
