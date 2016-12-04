const express = require( "express" );
const https = require( "https" );
const path = require( "path" );
const fs = require( "fs" );
const horizon = require( "@horizon/server" );
const config = require( "./config" );

const app = express( );
const PORT = config.port;

// Serve our static stuff like css
app.use( express.static( path.join( __dirname, "dist" ) ) );

// Send all requests to index.html
app.get( "*", ( req, res ) => {
    res.sendFile( path.join( __dirname, "dist", "index.html" ) );
} );

const options = {
    key: fs.readFileSync( path.resolve( __dirname, "./horizon-key.pem" ) ),
    cert: fs.readFileSync( path.resolve( __dirname, "./horizon-cert.pem" ) ),
};

const server = https.createServer( options, app );
server.listen( PORT, ( ) => console.log( `Server started on port: ${ PORT }` ) );

const horizonServer = horizon( server, config.horizonOptions );
horizonServer.add_auth_provider( horizon.auth.github, config.github );
