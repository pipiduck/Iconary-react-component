 import * as React from 'react';
import { IconWrapper } from '../IconWrapper';
import { ISvgIconProps } from '../svgConfig';

export default IconWrapper(

    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
        >
            <g
                stroke="none"
                strokeWidth={props.strokeWidth}
                fill="none"
                fillRule="evenodd"
            >
                <g>
                    <g
                        transform="translate(4.000000, 3.000000)"
                        stroke={props.colors[0]}
                        strokeLinejoin={props.strokeLinejoin}
                        strokeWidth={props.strokeWidth}
                    >
                        <path
                            d="M12.7272727,24 C15.1515152,21.5757576 17.5757576,20.3636364 20,20.3636364 C22.4242424,20.3636364 24.8484848,21.5757576 27.2727273,24 C30.1010101,21.5757576 32.2222222,20.3636364 33.6363636,20.3636364 C35.0505051,20.3636364 37.1717172,21.5757576 40,24 C40,12.954305 31.045695,4 20,4 C8.954305,4 0,12.954305 0,24 C2.82828283,21.5757576 4.94949495,20.3636364 6.36363636,20.3636364 C7.77777778,20.3636364 9.8989899,21.5757576 12.7272727,24 Z"
                            fill={props.colors[1]}
                            fillRule="nonzero"
                        />
                        <path
                            d="M20,21 L20,35.5536268 C20,38.5677816 22.4858452,41.0112369 25.5,41.0112369 C28.5141548,41.0112369 31,38.5677816 31,35.5536268"
                            strokeLinecap={props.strokeLinecap}
                        />
                        <path
                            d="M20,0 L20,4"
                            strokeLinecap={props.strokeLinecap}
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
);
