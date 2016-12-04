import React from "react";
import horizon from "../../utilities/horizon";
import { Login } from "../pages";

const withAuth = ( WrappedComponent ) => {
    const Wrapper = React.createClass( {
        getInitialState( ) {
            return { };
        },

        componentDidMount( ) {
            if ( horizon.hasAuthToken( ) ) {
                horizon.currentUser().fetch().subscribe( ( user ) => {
                    this.setState( { userId: user.id } );
                } );
            }
        },

        render( ) {
            return horizon.hasAuthToken( )
                ? ( <WrappedComponent { ...this.props } userId={ this.state.userId } /> )
                : ( <Login /> );
        },
    } );

    return Wrapper;
};

export default withAuth;
