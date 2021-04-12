import { forwardRef, Ref, SVGAttributes } from 'react';

export const MoonIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.38.019a7.5 7.5 0 1010.6 10.6C19.662 15.854 15.316 20 10.001 20 4.477 20 0 15.523 0 10 0 4.685 4.146.339 9.38.019z" />
    </svg>
  ),
);
