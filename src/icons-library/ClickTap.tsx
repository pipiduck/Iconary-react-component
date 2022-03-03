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
                strokeLinecap={props.strokeLinecap}
            >
                <g
                    transform="translate(8.000000, 5.000000)"
                    stroke={props.colors[0]}
                    strokeWidth={props.strokeWidth}
                >
                    <g
                        transform="translate(7.000000, 7.000000)"
                        strokeLinejoin={props.strokeLinejoin}
                    >
                        <path
                            d="M0,14 L0,3 C0,1.34314575 1.34314575,0 3,0 C4.65685425,0 6,1.34314575 6,3 L6,14"
                        />
                        <path
                            d="M24,13 L24,19.5 C24,25.8512746 18.8512746,31 12.5,31 L11.5,31 C5.14872538,31 0,25.8512746 0,19.5 L0,13"
                        />
                        <path
                            d="M6,17 L6,15.1057529 L6,12 C6,10.3431458 7.34314575,9 9,9 C10.6568542,9 12,10.3431458 12,12 L12,15.1818037 L12,17"
                        />
                        <path
                            d="M12,17 L12,15.1057529 L12,12 C12,10.3431458 13.3431458,9 15,9 C16.6568542,9 18,10.3431458 18,12 L18,15.1818037 L18,17"
                        />
                        <path
                            d="M18,17 L18,15.1057529 L18,12 C18,10.3431458 19.3431458,9 21,9 C22.6568542,9 24,10.3431458 24,12 L24,15.1818037 L24,17"
                        />
                    </g>
                    <path
                        d="M20,10 C20,8.94888684 19.8378284,7.93565088 19.5371411,6.98394793 C19.2008409,5.91952713 18.6912709,4.93207821 18.0415268,4.05469702 C16.2197921,1.59471942 13.2961294,0 10,0 C6.70387063,0 3.78020794,1.59471942 1.95847316,4.05469702 C1.30872911,4.93207821 0.799159071,5.91952713 0.462858909,6.98394793 C0.162171574,7.93565088 0,8.94888684 0,10"
                    />
                </g>
            </g>
        </svg>
    )
);
