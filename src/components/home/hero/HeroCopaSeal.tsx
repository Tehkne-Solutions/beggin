export function HeroCopaSeal() {
  return (
    <svg
      viewBox="0 0 220 220"
      role="img"
      aria-label="Selo Edição Especial Orgulho Brasileiro"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <circle cx="110" cy="110" r="101" fill="rgba(252,247,241,0.76)" />
      <circle cx="110" cy="110" r="96" fill="none" stroke="#003057" strokeWidth="3" />
      <circle cx="110" cy="110" r="68" fill="none" stroke="#003057" strokeWidth="1.5" strokeDasharray="3 7" opacity="0.75" />
      <path id="sealTop" d="M 27 112 A 83 83 0 0 1 193 112" fill="none" />
      <path id="sealBottom" d="M 193 120 A 83 83 0 0 1 27 120" fill="none" />
      <text fill="#003057" fontFamily="var(--font-geared), Arial, sans-serif" fontWeight="700" fontSize="17" letterSpacing="2.2">
        <textPath href="#sealTop" startOffset="50%" textAnchor="middle">
          EDIÇÃO ESPECIAL
        </textPath>
      </text>
      <text fill="#003057" fontFamily="var(--font-geared), Arial, sans-serif" fontWeight="700" fontSize="15" letterSpacing="2.1">
        <textPath href="#sealBottom" startOffset="50%" textAnchor="middle">
          ORGULHOSAMENTE BRASILEIRO
        </textPath>
      </text>
      <g fill="none" stroke="#003057" strokeWidth="10" strokeLinecap="round" transform="translate(0 3)">
        <path d="M69 95 C83 85 96 105 110 95 C124 85 137 105 151 95" />
        <path d="M69 113 C83 103 96 123 110 113 C124 103 137 123 151 113" />
        <path d="M69 131 C83 121 96 141 110 131 C124 121 137 141 151 131" />
      </g>
    </svg>
  );
}
