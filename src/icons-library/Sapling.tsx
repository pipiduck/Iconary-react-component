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
                d="M27 8.00001C22.3137 12.6863 23.0352 21.035 23.0352 21.035C23.0352 21.035 31.3137 21.6863 36 17C40.6863 12.3137 40.0058 4.03509 40.0058 4.03509C40.0058 4.03509 31.6863 3.31372 27 8.00001Z"
                fill={props.colors[1]}
            />
            <path
                d="M23.0352 21.035C23.0352 21.035 22.3137 12.6863 27 8.00001C31.6863 3.31372 40.0058 4.03509 40.0058 4.03509C40.0058 4.03509 40.6863 12.3137 36 17C31.3137 21.6863 23.0352 21.035 23.0352 21.035ZM23.0352 21.035L31 13.0702"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M20 21C23.8491 24.8434 22.9711 31.9711 22.9711 31.9711C22.9711 31.9711 15.8491 32.8434 12 29C8.15087 25.1566 9.03219 18.0289 9.03219 18.0289C9.03219 18.0289 16.1509 17.1566 20 21Z"
                fill={props.colors[1]}
            />
            <path
                d="M22.9711 31.9711C22.9711 31.9711 23.8491 24.8434 20 21C16.1509 17.1566 9.03219 18.0289 9.03219 18.0289C9.03219 18.0289 8.15087 25.1566 12 29C15.8491 32.8434 22.9711 31.9711 22.9711 31.9711ZM22.9711 31.9711L16 25"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23 4V44"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
