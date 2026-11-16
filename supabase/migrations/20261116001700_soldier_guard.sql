-- The Guard folds into the Soldier: the Levy archetype becomes the Guard
update public.backgrounds set archetypes = replace(replace(archetypes,
  'Levy | A peasant handed a polearm and pointed at the enemy. | Poor arms: billhook or pitchfork, padded hood',
  'Guard | Kept the gate, walked the walls at night, and knows every face that comes through. | Commoner arms: spear and crossbow, iron cap'),
  'Odvedenec | Sedlák, kterému strčili do ruky žerďovou zbraň a ukázali na nepřítele. | Chudá výzbroj: kosíř nebo vidle, prošívaná kápě',
  'Strážný | Hlídal bránu, v noci obcházel hradby a zná každou tvář, která projde. | Prostá výzbroj: kopí a kuše, železná čapka')
where id = 'soldier';
