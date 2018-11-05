
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './ButtonAppBar';
import IntegrationAutosuggest from './IntegrationAutosuggest.js'

function App(){
    return (
        <div>
            <ButtonAppBar/>
            <IntegrationAutosuggest/>

        </div>
    )
}

ReactDOM.render(
    /*<ButtonAppBar />,*/
    <App />,
    document.querySelector('#root')
);
      