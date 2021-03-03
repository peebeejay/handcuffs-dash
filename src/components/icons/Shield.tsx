import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const ShieldIcon = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M.783 1.826L9 0l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L9 22l-6.328-4.219A6 6 0 010 12.79V2.802a1 1 0 01.783-.976zM9 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-4.473 5h8.946a4.5 4.5 0 00-8.946 0z" />
    </svg>
  ),
);
