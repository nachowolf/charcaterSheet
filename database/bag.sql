create table purse(
    moneyid serial not null primary key,
    coin text not null,
    amount int not null
);

insert into purse (coin, amount) values ('copper', 0);
insert into purse (coin, amount) values ('silver', 0);
insert into purse (coin, amount) values ('gold', 0);
insert into purse (coin, amount) values ('platinum', 0);

create table inventory(
    itemid serial not null primary key,
    item text not null,
    iteminfo text not null
);

create table bag (
    bagid serial not null primary key,
    itemid int,
    moneyid int,
    foreign key (itemid) references inventory(titleid),
    foreign key (moneyid) references purse(moneyid)
);