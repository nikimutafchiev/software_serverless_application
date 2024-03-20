module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const movie_id = req.body.movie_id, rating = req.body.rating, review = req.body.review, date = req.body.date, author = req.body.author;
    context.bindings.Rating = JSON.stringify([{
        movie_id: movie_id,
        rating: rating,
        review: review,
        date: date,
        author: author
    }]);
    const movie_name = context.bindings.MovieName[0].name;
    const responseMessage = `Successfully added rating for movie with name: ${movie_name}`
    context.res = {
        body: responseMessage
    };
}