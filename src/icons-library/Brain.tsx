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
                d="M19.036 44.0001C18.0561 40.8045 16.5778 38.4222 14.6011 36.8532C11.636 34.4997 6.92483 35.9624 5.18458 33.5349C3.44433 31.1073 6.40382 26.6431 7.44234 24.009C8.48086 21.375 3.46179 20.4436 4.04776 19.6958C4.43842 19.1973 6.97471 17.7587 11.6567 15.3801C12.987 7.79346 17.9008 4.00014 26.3982 4.00014C39.1441 4.00014 44 14.8061 44 21.679C44 28.552 38.1201 35.9563 29.7441 37.5528C28.9951 38.6436 30.0754 40.7927 32.9848 44.0001"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.4997 14.5C18.8464 17.0342 19.0408 18.8138 20.0829 19.8385C21.125 20.8633 22.9011 21.5334 25.4112 21.8489C24.8417 25.1176 25.5361 26.6511 27.4942 26.4493C29.4524 26.2475 30.6289 25.4338 31.0239 24.0083C34.0842 24.8684 35.7428 24.1486 35.9997 21.8489C36.3852 18.3993 34.525 15.6475 33.7624 15.6475C32.9997 15.6475 31.0239 15.5547 31.0239 14.5C31.0239 13.4452 28.7159 12.8493 26.6329 12.8493C24.5499 12.8493 25.8035 11.4452 22.9432 12C21.0363 12.3698 19.8885 13.2031 19.4997 14.5Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M30.5002 25.5001C29.4833 26.1311 28.0878 27.1804 27.5002 28.0001C26.0313 30.0496 24.8398 31.2975 24.5791 32.6082"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
