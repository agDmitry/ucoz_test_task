const 
  path = require( 'path' ),
  express = require( 'express' ),
  app = express(),
  port = 8000;

app.use( express.static( path.resolve( __dirname ) ) );

app.listen( port, () => console.log( `Static http server listening on port ${port}!` ) );