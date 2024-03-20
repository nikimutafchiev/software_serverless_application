CREATE TABLE Ratings(
    id int PRIMARY KEY IDENTITY,
    movie_id int not null,
    FOREIGN KEY(movie_id) REFERENCES [dbo].[Movies](id),
    rating float not null,
    review NVARCHAR(3000) not null,
    date datetime not null,
    author NVARCHAR(255) not null
);
