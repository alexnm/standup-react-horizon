import React from "react";

const { func } = React.PropTypes;

const StandupForm = React.createClass( {
    propTypes: {
        onSubmit: func.isRequired,
    },

    getInitialState( ) {
        return {
            text: "",
            author: "",
        };
    },

    onSubmit( ) {
        const message = {
            text: this.state.text,
            author: this.state.author,
            date: Date.now( ),
        };

        this.props.onSubmit( message );
        this.setState( {
            text: "",
            author: "",
        } );
    },

    onTextInputKeyPressed( evt ) {
        if ( evt.key === "Enter" ) {
            this.onSubmit( );
        }
    },

    render( ) {
        return (
            <form method="POST">
                <div className="form-group">
                    <input
                        name="author"
                        className="form-control"
                        onChange={ event => this.setState( { author: event.target.value } ) }
                        placeholder="Who are you?"
                    />
                </div>
                <div className="form-group">
                    <input
                        name="text"
                        className="form-control"
                        onChange={ event => this.setState( { text: event.target.value } ) }
                        onKeyPress={ this.onTextInputKeyPressed }
                        placeholder="What are you doing today?"
                    />
                </div>
                <button type="button" onClick={ this.onSubmit } className="btn btn-default">Submit</button>
            </form>
        );
    },
} );

export default StandupForm;
