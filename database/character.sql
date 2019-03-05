create table attributes(
    attributeid serial not null primary key,
    attribute text not null,
    attributelevel int not null
);

insert into attributes (attribute, attributelevel) values ('strength', 9);
insert into attributes (attribute, attributelevel) values ('dexterity', 11);
insert into attributes (attribute, attributelevel) values ('constitution', 15);
insert into attributes (attribute, attributelevel) values ('intelligence', 18);
insert into attributes (attribute, attributelevel) values ('wisdom', 14);
insert into attributes (attribute, attributelevel) values ('charisma', 13);

create table modifiers(
modifierid serial not null primary key,
modifier
)


