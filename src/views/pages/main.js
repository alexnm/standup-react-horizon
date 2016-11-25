import React from "react";
import { messageStream } from "../../utilities/horizon";

const Main = React.createClass( {
    getInitialState( ) {
        return {
            messages: [ ],
        };
    },

    componentDidMount( ) {
        messageStream.watch( ).subscribe( messages => this.setState( { messages } ) );
    },

    render( ) {
        return (
            <div className="container">
                <div>
                    <h2>{ "Today's status:" }</h2>
                </div>
                <div>
                    {
                        this.state.messages.map( ( msg, index ) => <p key={ index }>{ msg.text }</p> )
                    }
                </div>
            </div>
        );
    },
} );

export default Main;
