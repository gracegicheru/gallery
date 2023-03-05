var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://gracegicheru3:FhbOPOXyyQxMa10G@cluster1.fctap6k.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://gracegicheru3:FhbOPOXyyQxMa10G@cluster1.fctap6k.mongodb.net/mongodb+srv://gracegicheru3:0mYLZCGaWmaGlKRe@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://gracegicheru3:FhbOPOXyyQxMa10G@cluster1.fctap6k.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
