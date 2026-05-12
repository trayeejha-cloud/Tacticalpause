import { Info } from 'lucide-react';

interface AboutButtonProps {
  onClick: () => void;
}

export function AboutButton({ onClick }: AboutButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full transition-all duration-200 active:scale-95 flex items-center gap-2"
      style={{
        backgroundColor: '#E4DFB5',
        color: '#2F2F2F',
        fontSize: '14px',
        fontWeight: '400',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 6px rgba(47, 47, 47, 0.06)'
      }}
    >
      <Info size={16} />
      About This Site
    </button>
  );
}
