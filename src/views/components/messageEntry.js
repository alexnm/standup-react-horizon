import React from "react";

export const MessageEntry = ( { message } ) => (
    <div className="row">
        <div className="col-xs-12 mv-10">
            <span className="mh-20">{ displayTime( message.date ) }</span>
            <strong>{ message.author }</strong> says <i>{ message.text }</i>
        </div>
    </div>
);

const { number, shape, string } = React.PropTypes;

MessageEntry.propTypes = {
    message: shape( {
        text: string.isRequired,
        author: string.isRequired,
        date: number.isRequired,
    } ),
};

function displayTime( isoDate ) {
    const date = new Date( isoDate );
    const hour = ( date.getHours() < 10 ? "0" : "" ) + date.getHours( );
    const minute = ( date.getMinutes() < 10 ? "0" : "" ) + date.getMinutes( );

    return `${ hour }:${ minute }`;
}

export default MessageEntry;
