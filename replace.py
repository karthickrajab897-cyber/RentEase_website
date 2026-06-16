import re

css_path = r'e:\RENTEASE - 2\style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Replace root variables
css = re.sub(
    r':root \{[\s\S]*?\}',
    ''':root {
    --primary: #d4af37;
    --accent: #b49020;
    --accent-light: #f3e5ab;
    --highlight: #ffffff;
    --dark: #09090b;
    --darker: #000000;
    --text-main: #ffffff;
    --text-muted: #94a3b8;
    --glass-bg: rgba(15, 15, 18, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    --shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
    --nav-height: 80px;
}''',
    css
)

replacements = {
    'background: white;': 'background: var(--dark);',
    'color: #333;': 'color: var(--text-main);',
    'color: #ccc;': 'color: var(--text-muted);',
    'border: 1px solid #eee;': 'border: 1px solid var(--glass-border);',
    'color: #331a00;': 'color: var(--text-main);',
    'color: #451a03;': 'color: var(--text-main);',
    'color: #92400e;': 'color: var(--text-muted);',
    'color: #5c3e00;': 'color: var(--text-muted);',
    'background: rgba(255, 255, 255, 0.88);': 'background: var(--glass-bg);',
    'background: rgba(255, 255, 255, 0.8);': 'background: var(--glass-bg);',
    'background: #ffffff !important;': 'background: var(--darker) !important;',
    'background: radial-gradient(circle at center, #fffbeb 0%, #fff7ed 50%, #ffffff 100%);': 'background: radial-gradient(circle at center, #0a0a0c 0%, #050505 50%, #000000 100%);',
    'background: rgba(255, 255, 255, 0.98);': 'background: var(--glass-bg);',
    'border-bottom: 1px solid rgba(0, 0, 0, 0.05);': 'border-bottom: 1px solid var(--glass-border);',
    'border-right: 1px solid #eee;': 'border-right: 1px solid var(--glass-border);',
    'border-bottom: 1px solid #fff7ed;': 'border-bottom: 1px solid var(--glass-border);',
    'background: #fffbeb;': 'background: rgba(255, 255, 255, 0.05);',
    'border: 1px solid #fbd38d;': 'border: 1px solid var(--glass-border);',
    'background: rgba(255, 255, 255, 0.5);': 'background: rgba(255, 255, 255, 0.03);',
    'background: linear-gradient(135deg, #60a5fa, #c084fc);': 'background: linear-gradient(135deg, #d4af37, #f3e5ab);',
    'background: linear-gradient(135deg, #60a5fa, #a78bfa);': 'background: linear-gradient(135deg, #d4af37, #f3e5ab);',
    'background: linear-gradient(135deg, #f472b6, #c084fc);': 'background: linear-gradient(135deg, #d4af37, #f3e5ab);',
    'background: radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%);': 'background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent 70%);',
    'background: radial-gradient(circle, rgba(251, 146, 60, 0.1), transparent 70%);': 'background: radial-gradient(circle, rgba(180, 144, 32, 0.1), transparent 70%);',
    'border-left: 3px solid var(--accent);': 'border-left: 3px solid var(--primary);',
    'background: linear-gradient(135deg, #b45309, #f59e0b);': 'background: linear-gradient(135deg, #d4af37, #f3e5ab);',
}

for old, new in replacements.items():
    css = css.replace(old, new)
    
with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

html_path = r'e:\RENTEASE - 2\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

html_replacements = {
    'background: linear-gradient(135deg,#6366f1,#8b5cf6);': 'background: linear-gradient(135deg,#d4af37,#b49020);',
    'background: linear-gradient(135deg,#0ea5e9,#6366f1);': 'background: linear-gradient(135deg,#b49020,#d4af37);',
    'rgba(251, 146, 60, 0.05)': 'rgba(212, 175, 55, 0.05)',
    'stroke="#60a5fa"': 'stroke="#d4af37"',
    'stroke="#a78bfa"': 'stroke="#d4af37"',
    'stroke="#f472b6"': 'stroke="#d4af37"',
    'background: #111;': 'background: #000;'
}

for old, new in html_replacements.items():
    html = html.replace(old, new)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print('Replaced styles for premium theme.')
