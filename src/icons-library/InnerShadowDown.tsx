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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z"
                fill={props.colors[1]}
                stroke={props.colors[0]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
            <path
                d="M33.8995 33.8995C31.366 36.4329 27.866 38 24 38C20.134 38 16.634 36.4329 14.1005 33.8995"
                stroke={props.colors[2]}
                strokeWidth={props.strokeWidth}
                strokeLinecap={props.strokeLinecap}
            />
        </svg>
    )
);
