import { forwardRef, Ref, SVGAttributes } from 'react';

export const ShieldWithCheckMark = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 0l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L9 22l-6.328-4.219A5.998 5.998 0 010 12.79V2.802a1 1 0 01.783-.976L9 0zm4.452 7.222l-4.95 4.949-2.828-2.828-1.414 1.414L8.503 15l6.364-6.364-1.415-1.414z"
        fill="#5ED068"
      />
    </svg>
  ),
);
