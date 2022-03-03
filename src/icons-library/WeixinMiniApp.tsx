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
            <circle
                cx="24"
                cy="24"
                r="20"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M29 24C29.9889 24 30.9556 23.7068 31.7779 23.1574C32.6001 22.6079 33.241 21.827 33.6194 20.9134C33.9978 19.9998 34.0969 18.9945 33.9039 18.0246C33.711 17.0546 33.2348 16.1637 32.5355 15.4645C31.8363 14.7652 30.9454 14.289 29.9755 14.0961C29.0055 13.9031 28.0002 14.0022 27.0866 14.3806C26.173 14.759 25.3921 15.3999 24.8427 16.2222C24.2932 17.0444 24 18.0111 24 19V29C24 29.9889 23.7068 30.9556 23.1574 31.7779C22.6079 32.6001 21.8271 33.241 20.9134 33.6194C19.9998 33.9978 18.9945 34.0969 18.0246 33.9039C17.0546 33.711 16.1637 33.2348 15.4645 32.5355C14.7652 31.8363 14.289 30.9454 14.0961 29.9755C13.9031 29.0055 14.0022 28.0002 14.3806 27.0866C14.759 26.173 15.3999 25.3921 16.2222 24.8427C17.0444 24.2932 18.0111 24 19 24"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
