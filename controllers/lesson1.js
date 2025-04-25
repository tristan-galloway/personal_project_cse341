const samanthaRoute = (req, res) => {
    res.send("Samantha Galloway's Web Server is running!");
};

const tristanRoute = (req, res) => {
    res.send("Tristan Galloway's Web Server is running!");
};

module.exports = {
    samanthaRoute,
    tristanRoute
};