import React from "react";
import { messageStream } from "../../utilities/horizon";
import { MessageList, StandupForm } from "../components";

const Main = React.createClass( {
    getInitialState( ) {
        return {
            messages: [ ],
        };
    },

    componentDidMount( ) {
        messageStream.order( "date" ).watch( ).subscribe( messages => this.setState( { messages } ) );
    },

    sendMessage( message ) {
        messageStream.store( message );
    },

    render( ) {
        return (
            <div className="container">
                <MessageList
                    messages={ this.state.messages }
                    title="What a lovely day to code! What will you be doing?"
                />
                <StandupForm onSubmit={ this.sendMessage } />
            </div>
        );
    },
} );

export default Main;
