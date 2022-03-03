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
                d="M18.9999 40C10.1272 35.5636 7 26 3.99958 19.5C2.64992 16.5761 7.52572 15.8109 10.4993 17C12.9999 18 15.9996 20 15.9996 20V11.5C15.9996 9.567 17.5666 8 19.4996 8C21.4326 8 22.9996 9.567 22.9996 11.5V9.5C22.9996 7.567 24.5666 6 26.4996 6C28.4326 6 29.9996 7.567 29.9996 9.5V13.5C29.9996 11.567 31.5666 10 33.4996 10C35.4326 10 36.9996 11.567 36.9996 13.5V16.5C36.9996 14.567 38.5666 13 40.4996 13C42.4326 13 43.9996 14.5655 43.9996 16.4985V29C43.9996 32.5 41.9999 37 36.9996 40C32.2062 42.8758 24.9999 43 18.9999 40Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
