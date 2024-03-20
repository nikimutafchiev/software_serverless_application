CREATE TABLE Movies(
	id int PRIMARY KEY IDENTITY,
	name nvarchar(255) not null,
	year int not null,
	genre nvarchar(255) not null,
	info nvarchar(3000) not null,
	producer nvarchar(255) not null,
	actors nvarchar(3000) not null, 
	average_rating float
);
