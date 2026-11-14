-- Singed eyebrows gives resistance to fire instead of advantage; Battlemage gets Playing with fire.

update perks set description = 'Your own charges, corrosives and gases never hurt you. You have **resistance to fire**. |cs| Tvé vlastní nálože, žíraviny a plyny ti nikdy neublíží. Máš **odolnost vůči ohni**.'
where id = 'singed-eyebrows';

insert into perks (id, name, kind, flavour, description) values
('playing-with-fire', 'Playing with fire |cs| Hra s ohněm', 'perk',
 'Mother always said you''d get burnt. Mother was wrong. |cs| Máma vždycky říkala, že se spálíš. Máma se mýlila.',
 'You have **resistance to fire**. |cs| Máš **odolnost vůči ohni**.');

insert into class_perks (class_id, perk_id, sort) values ('warlock', 'playing-with-fire', 74);
insert into perk_requirements (perk_id, kind, required_perk_id) values ('playing-with-fire', 'has_aspect', 'battlemage');
