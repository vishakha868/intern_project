import React from 'react';
import classNames from "classnames";
import Button from '@material-ui/core/Button';
import {  blueGrey } from '@material-ui/core/colors';
import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';
import Mods from './Mods'
import './style1.css';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});
const modal = (props) => {

    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>New Tweet</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                   <Mods></Mods>
              
            </div>
        </div>
    )
}

export default modal;