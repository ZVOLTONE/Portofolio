import os
import re

directory = '/home/zvolt/Portofolio/src'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path, 'r') as f:
                content = f.read()
            
            new_content = content
            
            # Fix hex colors that were missed
            new_content = new_content.replace('bg-[#111827]', 'bg-white')
            new_content = new_content.replace('bg-[#111827]/70', 'bg-white/70')
            new_content = new_content.replace('bg-[#111827]/80', 'bg-white/80')
            new_content = new_content.replace('bg-[#090D14]', 'bg-neutral-50')
            
            def fix_black_black(match):
                class_string = match.group(0)
                if 'bg-black' in class_string and 'text-black' in class_string:
                    return class_string.replace('text-black', 'text-white')
                return class_string
                
            new_content = re.sub(r'className=[\"\']([^\"\']+)[\"\']', fix_black_black, new_content)
            new_content = re.sub(r'className=\{`([^`]+)`\}', fix_black_black, new_content)

            def fix_white_white(match):
                class_string = match.group(0)
                if ('bg-white' in class_string or 'bg-neutral-100' in class_string) and 'text-white' in class_string:
                    # Ignore InteractiveHoverButton component where it might pass custom text-white
                    if 'group-hover:text-white' in class_string:
                        return class_string
                    return class_string.replace('text-white', 'text-black')
                return class_string

            new_content = re.sub(r'className=[\"\']([^\"\']+)[\"\']', fix_white_white, new_content)
            new_content = re.sub(r'className=\{`([^`]+)`\}', fix_white_white, new_content)

            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f'Fixed colors in {path}')
