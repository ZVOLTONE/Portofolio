import os
import re

directory = '/home/zvolt/Portofolio/src'

replacements = [
    (r'blue-600', 'white'),
    (r'blue-500', 'neutral-400'),
    (r'blue-400', 'white'),
    (r'blue-950', 'neutral-900'),
    (r'blue-900', 'neutral-800'),
    (r'blue-800', 'neutral-800'),
    (r'blue-100', 'neutral-200'),
    (r'blue-50', 'neutral-100'),
    (r'indigo-500', 'neutral-500'),
    (r'indigo-400', 'neutral-400'),
    (r'indigo-300', 'neutral-300'),
    (r'purple-600', 'neutral-600'),
    (r'purple-500', 'neutral-500'),
    (r'purple-400', 'neutral-400'),
    (r'purple-300', 'neutral-300'),
    (r'emerald-500', 'neutral-500'),
    (r'emerald-400', 'white'),
    (r'emerald-300', 'neutral-300'),
    (r'amber-500', 'neutral-500'),
    (r'amber-400', 'neutral-400'),
    (r'amber-300', 'neutral-300'),
    (r'rose-500', 'neutral-500'),
    (r'rose-400', 'neutral-400'),
    (r'cyan-500', 'neutral-500'),
    (r'cyan-400', 'neutral-400'),
    (r'slate-950', 'black'),
    (r'slate-900', 'neutral-900'),
    (r'slate-800', 'neutral-800'),
    (r'slate-700', 'neutral-700'),
    (r'slate-400', 'neutral-400'),
    (r'slate-300', 'neutral-300'),
    (r'slate-200', 'neutral-200'),
    (r'slate-100', 'neutral-100'),
    (r'text-blue-', 'text-neutral-'),
    (r'bg-blue-', 'bg-neutral-'),
    (r'border-blue-', 'border-neutral-'),
    (r'from-blue-', 'from-neutral-'),
    (r'via-blue-', 'via-neutral-'),
    (r'to-blue-', 'to-neutral-'),
    (r'hover:text-blue-', 'hover:text-neutral-'),
    (r'hover:bg-blue-', 'hover:bg-neutral-'),
    (r'hover:border-blue-', 'hover:border-neutral-'),
    (r'shadow-blue-', 'shadow-neutral-'),
    (r'bg-\[\#0B0F17\]', 'bg-black'),
]

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.css'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements:
                new_content = re.sub(old, new, new_content)
                
            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f"Updated {path}")
