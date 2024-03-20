module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var responseMsg = context.bindings.MovieItems;
    if (req.query.name)
        responseMsg = context.bindings.CustomMovieItems;

    context.res = {
        body: responseMsg
    };
}