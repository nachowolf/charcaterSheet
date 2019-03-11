create table social(
    social serial not null primary key,
    class text not null,
    charlevel int not null,
    race text not null,
    background text not null,
    alignment text not null,
    playername text not null,
    experiencepoints int not null,
    faction text not null,
    dcinumber text not null,
);

create table physicaltraits(
    physicaltraits serial not null primary key,
    age int not null,
    height dec 
)