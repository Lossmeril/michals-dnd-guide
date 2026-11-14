-- Cold trail: the whole party is hard to track by default. Courier: one horse does what others need a spare for.
-- Base rules: covering the trail (a travel task) and spare horses (a second hour of gallop).

update perks set description = 'Tracking you **and your party** is **disadvantaged**, without anyone trying. Without this perk, a party only gets that by covering its trail on purpose (a travel task, at slow pace). |cs| Stopování tebe **i tvé družiny** je **v nevýhodě**, aniž by se kdokoli snažil. Bez tohoto perku toho družina dosáhne jen tím, že úmyslně zahlazuje stopy (úkol na cestě, pomalým tempem).'
where id = 'cold-trail';

update perks set description = 'On just **your one horse**, you can gallop a second hour a day (+15 km on a road), and it needs no slow day afterwards: what others need a spare horse for. A spare horse adds nothing more. The rest of the party doesn''t get this. |cs| Jen na **svém jediném koni** můžeš cválat druhou hodinu denně (+15 km po cestě) a kůň pak nepotřebuje pomalejší den: na to ostatní potřebují náhradního koně. Náhradní kůň už nic nepřidá. Zbytek družiny to nemá.'
where id = 'courier';

update rulebook_pages set content = replace(content,
 '| **Sneak** (slow or normal pace) |',
 '| **Cover the trail** (slow pace only) | No roll | Tracking the party is disadvantaged | — |
| **Sneak** (slow or normal pace) |')
where slug = 'travel';

update rulebook_pages set content = replace(content,
 '- **Gallop:** a party that all rides can add one hour of gallop, about **+15 km** on a road. The horses then need a slow day or a long rest.',
 '- **Gallop:** a party that all rides can add one hour of gallop, about **+15 km** on a road. The horses then need a slow day or a long rest.
- **Spare horses:** with a spare horse for every rider, swapping mounts, the party can gallop a **second hour** (another +15 km), and the horses need no slow day afterwards.')
where slug = 'travel-days';
