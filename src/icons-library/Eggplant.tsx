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
                d="M35 18L31.1193 30.6124C31.0398 30.8708 30.9648 31.1262 30.8719 31.3801C30.324 32.8784 27.8826 38.4193 21.0006 41C13.0007 44 4.99941 40 5 32.0769C5.00059 24.1538 13 25 17 22C21 19 25 13 25 13"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
            />
            <path
                d="M39.2545 24.4875C39.2545 24.4875 40.3716 19.1754 40.001 16C39.496 11.6725 37.501 8.5 35.0002 7.00002C32.4995 5.50003 27.2531 4.5 23.0004 7.00003C18.7477 9.50007 16.9676 12.8452 16.9676 12.8452L25.1744 12.0773C25.6536 12.0325 26.0968 12.3354 26.2291 12.7983L27.7262 18.0384C27.878 18.5695 28.4315 18.877 28.9625 18.7252L34.2444 17.216C34.688 17.0892 35.1607 17.2824 35.3886 17.6835L39.2545 24.4875Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M36 8L42 6"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
