-- Whole suits of armour are gone; pieces carry Protection and Burden instead.
-- Split from 20261031165129, which was applied without this line.

alter table items drop column armour_rating;
