-- Mighty against an NPC's Soul or Charisma raises what's at stake, not a Danger Level (NPCs have none).
update rulebook_pages set content = replace(content,
  '| **NPC, :soul or :charisma** | Danger Level +1 | Danger Level +2 | If it defends, it first takes damage equal to the attacker''s class level; then in any case Danger Level +2|',
  '| **NPC, :soul or :charisma** | +1 at stake | +2 at stake | If it defends, it first takes damage equal to the attacker''s class level; then in any case +2 at stake|')
where slug = 'manoeuvres';
