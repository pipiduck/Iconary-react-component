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
                d="M9.58303 27.1825C7.86719 28.3543 7.00928 30.2936 7.00928 33.0003C7.00928 37.0604 12.0001 44.0003 16.5006 44.0003C21.001 44.0003 23.6111 44.0003 28.016 44.0003C32.421 44.0003 35.0965 40.1496 35.0965 37.0604C35.0965 32.907 35.0965 28.7537 35.0965 24.6004C35.0965 22.8073 33.6456 21.3523 31.8525 21.3473C30.0659 21.3423 28.6135 22.7866 28.6085 24.5732C28.6085 24.5762 28.6085 24.5793 28.6085 24.5823V24.6837"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M10.9812 29.4454V7.66259C10.9812 5.88581 12.4216 4.44545 14.1983 4.44545C15.9751 4.44545 17.4155 5.88581 17.4155 7.66259V23.648"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M17.4155 24.0003V19.8078C17.4155 18.259 18.671 17.0036 20.2197 17.0036C21.7684 17.0036 23.0239 18.259 23.0239 19.8078V24.4273"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M23 24.6584V21.8078C23 20.259 24.2555 19.0036 25.8042 19.0036C27.3529 19.0036 28.6084 20.259 28.6084 21.8078V25.0036"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
            <path
                d="M11 8.00014H41"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M36 12.5001L37.6667 11.0001L41 8.00014L37.6667 5.00014L36 3.50014"
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
                strokeLinejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
