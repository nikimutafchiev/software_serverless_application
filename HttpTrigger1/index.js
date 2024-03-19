module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const movie = req.body.movie, year = req.body.year, genre = req.body.genre,  info = req.body.info, producer = req.body.producer, actors = req.body.actors;
    context.bindings.MovieItems = JSON.stringify([{
            name: movie,
            year: year,
            genre: genre,
            info: info,
            producer: producer,
            actors:actors
        }]);
        const responseMessage = `You successfully added movie ${movie}`
    context.res = {
        body: responseMessage
    };
}
