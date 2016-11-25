import React from "react";
import { render } from "react-dom";
import { Main } from "./views/pages";

const rootHtml = (
    <Main />
);

render( rootHtml, document.getElementById( "react-root" ) );
