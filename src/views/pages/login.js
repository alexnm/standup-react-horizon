import React from "react";
import horizon from "../../utilities/horizon";

const Login = React.createClass( {

    handleAuth( ) {
        horizon.authEndpoint( "github" ).subscribe( ( endpoint ) => {
            window.location.replace( endpoint );
        } );
    },

    render( ) {
        return (
            <div>
                <button className="btn btn-primary" onClick={ this.handleAuth }>Login with Github</button>
            </div>
        );
    },
} );

export default Login;
