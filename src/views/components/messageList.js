import React from "react";
import MessageEntry from "./messageEntry";

const MessageList = ( { messages = [ ], title = "Standup" } ) => (
    <div className="mv-10">
        <h2>{ title }</h2>
        { messages.map( ( msg, index ) => <MessageEntry key={ index } message={ msg } /> ) }
    </div>
);

const { arrayOf, number, shape, string } = React.PropTypes;

MessageList.propTypes = {
    messages: arrayOf( shape( {
        text: string.isRequired,
        author: string.isRequired,
        date: number.isRequired,
    } ) ),
    title: string,
};

export default MessageList;
