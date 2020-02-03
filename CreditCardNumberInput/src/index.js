import React from 'react';
import {render} from 'react-dom';
import CCNInput from "./components/CCNInput";

render (<CCNInput divider='-' onChangeFunction = {onChange}/>, document.getElementById('container'));

function onChange(val) {
    //do nothing;
}