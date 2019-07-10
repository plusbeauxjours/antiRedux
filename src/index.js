import React from 'react';
import ReactDOM from 'react-dom';
import {
    injectGlobal
} from "styled-components";
import App from './App';
import reset from 'styled-reset';

injectGlobal `
${reset};
body{
    background-color: #ecf0f1
}
`
ReactDOM.render( < App / > , document.getElementById('root'));