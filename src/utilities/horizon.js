import Horizon from "@horizon/client";

const horizon = Horizon( );
export const messageStream = horizon( "messages" );
