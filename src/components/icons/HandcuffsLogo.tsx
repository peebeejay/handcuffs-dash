import { forwardRef, Ref, SVGAttributes } from 'react';

export const HandcuffsLogo = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      width={24}
      height={31}
      viewBox="0 0 24 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.423 30.235a14.79 14.79 0 003.346-.712v-3.375a12.929 12.929 0 01-3.346.827v3.26zM16.789 25.5V10.211a6.762 6.762 0 00-3.347-1.788v5.366h-2.865V0a14.795 14.795 0 00-3.346.712V20a6.949 6.949 0 003.346 1.808v-4.904h2.846v9.538a11.08 11.08 0 003.366-.942z"
        fill="#174BE6"
      />
      <path
        d="M12.039 3.096V6c5.019.02 9.076 4.077 9.076 9.096 0 5.02-4.076 9.096-9.096 9.096-5.019 0-9.096-4.077-9.096-9.096a9.062 9.062 0 012.692-6.461V4.96A11.931 11.931 0 000 15.115c0 6.616 5.385 12 12 12s12-5.365 12-12c0-6.634-5.346-12-11.961-12.019z"
        fill="#174BE6"
      />
    </svg>
  ),
);
