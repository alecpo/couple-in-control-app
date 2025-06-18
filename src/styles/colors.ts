export const colors = {
  // Primary colors
  primary: {
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#7dd3fc',
    '400': '#38bdf8',
    '500': '#0ea5e9',
    '600': '#0284c7',
    '700': '#0369a1',
    '800': '#075985',
    '900': '#0c4a6e',
  },

  // Secondary colors (complementary to primary)
  secondary: {
    '50': '#fdf4ff',
    '100': '#fae8ff',
    '200': '#f5d0fe',
    '300': '#f0abfc',
    '400': '#e879f9',
    '500': '#d946ef',
    '600': '#c026d3',
    '700': '#a21caf',
    '800': '#86198f',
    '900': '#701a75',
  },

  // Success colors
  success: {
    '50': '#f0fdf4',
    '100': '#dcfce7',
    '200': '#bbf7d0',
    '300': '#86efac',
    '400': '#4ade80',
    '500': '#22c55e',
    '600': '#16a34a',
    '700': '#15803d',
    '800': '#166534',
    '900': '#14532d',
  },

  // Warning colors
  warning: {
    '50': '#fffbeb',
    '100': '#fef3c7',
    '200': '#fde68a',
    '300': '#fcd34d',
    '400': '#fbbf24',
    '500': '#f59e0b',
    '600': '#d97706',
    '700': '#b45309',
    '800': '#92400e',
    '900': '#78350f',
  },

  // Error colors
  error: {
    '50': '#fef2f2',
    '100': '#fee2e2',
    '200': '#fecaca',
    '300': '#fca5a5',
    '400': '#f87171',
    '500': '#ef4444',
    '600': '#dc2626',
    '700': '#b91c1c',
    '800': '#991b1b',
    '900': '#7f1d1d',
  },

  // Neutral colors
  neutral: {
    '50': '#f8fafc',
    '100': '#f1f5f9',
    '200': '#e2e8f0',
    '300': '#cbd5e1',
    '400': '#94a3b8',
    '500': '#64748b',
    '600': '#475569',
    '700': '#334155',
    '800': '#1e293b',
    '900': '#0f172a',
  },

  // Tags colors
  tagsColors: {
    emerald: '#059669', // Rich green
    indigo: '#4f46e5', // Deep blue
    amber: '#d97706', // Golden yellow
    fuchsia: '#c026d3', // Bright pink
    teal: '#0d9488', // Deep teal
    crimson: '#dc2626', // Deep red
    lime: '#65a30d', // Vibrant green
    orange: '#ea580c', // Bright orange
    rose: '#e11d48', // Deep pink
    slate: '#475569', // Deep gray
    violet: '#7c3aed', // Rich purple
    cyan: '#0891b2', // Bright cyan
  },

  // Background colors
  background: {
    light: '#ffffff',
    dark: '#0f172a',
  },

  // Text colors
  text: {
    light: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#94a3b8',
    },
    dark: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      tertiary: '#64748b',
    },
  },
} as const
