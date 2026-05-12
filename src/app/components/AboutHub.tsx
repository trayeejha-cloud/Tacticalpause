import { ArrowLeft, BookOpen, Lightbulb, Phone, Target, Wind, Coffee, Moon, Clock, Users } from 'lucide-react';

interface AboutHubProps {
  onNavigateToPage: (page: string) => void;
  onBack: () => void;
}

const resourcePages = [
  { id: 'origin', title: 'Origin', subtitle: 'Project background and academic/professional motivation', icon: BookOpen },
  { id: 'design-philosophy', title: 'Design Philosophy', subtitle: 'Programmatic and visual design rationale', icon: Lightbulb },
  { id: 'stressed', title: "I'm stressed after a call", subtitle: 'Post-call reset and trauma-informed stabilization framework', icon: Phone },
  { id: 'focus', title: 'I need to focus', subtitle: 'Cognitive reset, attentional reorientation, and stress regulation', icon: Target },
  { id: 'anxious', title: "I'm feeling anxious", subtitle: '4-7-8 breathing reset and autonomic regulation', icon: Wind },
  { id: 'cravings', title: "I'm having cravings", subtitle: 'Multimodal behavioral intervention for cravings and urges', icon: Coffee },
  { id: 'exhausted', title: "I'm exhausted", subtitle: 'Fatigue check and body-needs identification', icon: Moon },
  { id: 'minute', title: 'I just need a minute', subtitle: '60-second tactical pause and rapid somatic reset', icon: Clock },
  { id: 'behind-site', title: 'Behind the Site', subtitle: 'Creator background and project motivation', icon: Users }
];

export function AboutHub({ onNavigateToPage, onBack }: AboutHubProps) {
  return (
    <div className="min-h-screen flex flex-col px-6 py-12" style={{ backgroundColor: '#9AB17A' }}>
      <button
        onClick={onBack}
        className="self-start mb-6 p-2 rounded-full transition-all duration-200 active:scale-95"
        style={{ color: '#2F2F2F' }}
        aria-label="Go back"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto">
        <h1 className="mb-3 text-center" style={{ color: '#2F2F2F', fontSize: '32px', fontWeight: '500', letterSpacing: '-0.02em' }}>
          About This Site
        </h1>

        <p className="mb-8 text-center" style={{ color: '#2F2F2F', fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
          Tactical Pause is a virtual wellness resource designed for EMTs and first responders. It offers short, accessible tools for moments of stress, anxiety, fatigue, cravings, low focus, or emotional overwhelm. This section explains why the site was created, how the tools were designed, and the research-informed reasoning behind each intervention.
        </p>

        <div
          className="p-6 rounded-3xl"
          style={{
            backgroundColor: '#C3CC9B',
            boxShadow: '0 4px 16px rgba(47, 47, 47, 0.08)'
          }}
        >
          <div className="flex flex-col gap-3">
            {resourcePages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigateToPage(page.id)}
                  className="w-full px-6 py-4 rounded-2xl transition-all duration-200 active:scale-98 flex items-start gap-3"
                  style={{
                    backgroundColor: '#E4DFB5',
                    color: '#2F2F2F',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(47, 47, 47, 0.06)',
                    textAlign: 'left'
                  }}
                >
                  <Icon size={20} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div className="flex flex-col">
                    <span style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px' }}>{page.title}</span>
                    <span style={{ fontSize: '14px', opacity: 0.75, lineHeight: '1.4' }}>{page.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
