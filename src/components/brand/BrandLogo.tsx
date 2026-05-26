type BrandLogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function BrandLogo({ variant = 'dark', className }: BrandLogoProps) {
  const ink = variant === 'light' ? '#f4efe3' : '#1f1d1d';
  const red = '#d71920';

  return (
    <svg
      viewBox="0 0 220 276"
      role="img"
      aria-label="BEG Boutique Distillery"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="8" width="150" height="154" fill="none" stroke={ink} strokeWidth="5" />
      <text x="34" y="62" fill={ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="38" fontWeight="900">
        B
      </text>
      <text x="95" y="118" fill={ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="38" fontWeight="900">
        E
      </text>
      <text x="143" y="91" fill={ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="43" fontWeight="900">
        G
      </text>
      <path d="M139 130 C148 124 157 136 166 130 C175 124 184 136 195 130" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <path d="M139 143 C148 137 157 149 166 143 C175 137 184 149 195 143" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <path d="M139 156 C148 150 157 162 166 156 C175 150 184 162 195 156" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
      <text x="12" y="190" fill={ink} fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="900" letterSpacing="7">
        BOUTIQUE
      </text>
      <text x="53" y="222" fill={red} fontFamily="Arial, Helvetica, sans-serif" fontSize="18" fontWeight="900" letterSpacing="8">
        DISTILLERY
      </text>
    </svg>
  );
}
