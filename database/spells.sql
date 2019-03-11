create table cantrips(
    cantripid serial not null primary key,
    cantrip text not null,
    cantripdesc text not null
);

create table spells(
    spellid serial not null primary key,
    spell text not null,
    spelldesc text not null,
    spelllevel int not null,
);

create table spellbook(
    spellbookid serial not null primary key,
    cantripid int,
    spellid int,
    foreign key cantripid references key cantrips(cantripid),
    foreign key spellid references key spells(spellid) 
);