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
                d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M4 20.8404C7.01485 19.4168 9.24466 19.2185 10.6894 20.2454C12.8566 21.7859 13.1283 28.064 18.0575 25.0635C22.9867 22.063 15.9467 20.8404 17.475 16.4939C19.0033 12.1474 24.0083 15.5237 24.5059 10.7627C24.8375 7.58862 21.0408 6.37413 13.1156 7.11921"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M36.0001 8C30.2857 12.9886 28.2899 16.0011 30.0127 17.0373C32.5968 18.5917 33.6933 16.4033 36.8467 17.0373C40.0001 17.6714 39.3173 21.9457 37.6587 21.9457C36.0001 21.9457 27.41 20.8518 27.8427 25.865C28.2753 30.8781 33.4422 31.6203 33.4422 34.4211C33.4422 36.2883 32.299 39.146 30.0127 42.9942"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M6.10461 32.9264C7.0161 32.5288 7.70127 32.2374 8.16011 32.052C12.0072 30.4978 14.8618 30.1314 16.7237 30.953C20.0162 32.4059 18.7504 35.3401 19.7817 36.4211C20.8129 37.5021 23.3881 37.1876 23.3881 39.244C23.3881 40.615 22.9276 42.1637 22.0066 43.8901"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
