import re

css_path = r'e:\RENTEASE - 2\style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

replacements = {
    # Shadows
    'rgba(0, 0, 0, 0.1)': 'rgba(0, 0, 0, 0.5)',
    'rgba(0, 0, 0, 0.05)': 'rgba(0, 0, 0, 0.3)',
    'rgba(0, 0, 0, 0.15)': 'rgba(0, 0, 0, 0.6)',
    'rgba(0, 0, 0, 0.2)': 'rgba(0, 0, 0, 0.7)',
    'rgba(0, 0, 0, 0.3)': 'rgba(0, 0, 0, 0.8)',
    'rgba(0, 0, 0, 0.4)': 'rgba(0, 0, 0, 0.9)',
    'rgba(0,0,0,0.1)': 'rgba(0, 0, 0, 0.5)',
    
    # Leftover Indigo/Violet/Light Blues from premium cards & testimonials
    'rgba(99, 102, 241, 0.1)': 'rgba(212, 175, 55, 0.1)',
    'rgba(99, 102, 241, 0.3)': 'rgba(212, 175, 55, 0.3)',
    'rgba(99, 102, 241, 0.45)': 'rgba(212, 175, 55, 0.45)',
    'rgba(99, 102, 241, 0.05)': 'rgba(212, 175, 55, 0.05)',
    'rgba(99, 102, 241, 0.04)': 'rgba(212, 175, 55, 0.04)',
    'rgba(99, 102, 241, 0.2)': 'rgba(212, 175, 55, 0.2)',
    'rgba(99, 102, 241, 0.08)': 'rgba(212, 175, 55, 0.08)',
    '#c084fc': 'var(--primary)',
    'rgba(192, 132, 252, 0.2)': 'rgba(212, 175, 55, 0.2)',
    'rgba(139, 92, 246, 0.3)': 'rgba(212, 175, 55, 0.3)',
    'rgba(139, 92, 246, 0.03)': 'rgba(212, 175, 55, 0.03)',
    '#3b82f6': 'var(--primary)',
    'rgba(59, 130, 246, 0.1)': 'rgba(212, 175, 55, 0.1)',
    '#4ade80': 'var(--primary)',
    '#16a34a': 'var(--primary)',
    '#020617': 'var(--darker)',
    'rgba(69, 26, 3, 0.05)': 'rgba(212, 175, 55, 0.05)',
    'rgba(69, 26, 3, 0.15)': 'rgba(212, 175, 55, 0.15)',
    '#451a03': 'var(--text-main)',
    '#331a00': 'var(--text-main)',
    '#fffbeb': 'rgba(212, 175, 55, 0.05)',
    '#fff7ed': 'var(--glass-bg)',

    # Re-fixing navigation background for luxury and readability
    'background: rgba(255, 255, 255, 0.88)': 'background: var(--glass-bg)',
    
    # Text colors that might be hard-coded
    'color: #331a00': 'color: var(--text-main)',
    'color: #92400e': 'color: var(--text-muted)'
}

for old, new in replacements.items():
    css = css.replace(old, new)

# Fix map buttons and other hardcoded buttons to look luxury
css = css.replace('.btn-map {\n    background: transparent;', '.btn-map {\n    background: rgba(212, 175, 55, 0.1);')

# Increase letter spacing overall for a more premium typography look
css = css.replace(
    'box-sizing: border-box;\n    font-family:',
    'box-sizing: border-box;\n    font-family:'
) # placeholder

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

print('Cleaned up shadows and accent colors for premium theme.')
