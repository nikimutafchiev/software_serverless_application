CREATE TABLE Movies(
	id int PRIMARY KEY IDENTITY,
	name text not null,
	year int not null,
	genre text not null,
	info text not null,
	producer text not null,
	actors text not null
);
