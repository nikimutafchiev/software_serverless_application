CREATE TABLE Movies(
	id int PRIMARY KEY IDENTITY,
	rating_id int,
	FOREIGN KEY(rating) id REFERENCES [dbo].[Ratings](id),
	name text not null,
	year int not null,
	genre text not null,
	info text not null,
	producer text not null,
	actors text not null
);
