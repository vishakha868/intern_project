import React from "react";
import PropTypes from "prop-types";
import './style1.css';
import Button from '@material-ui/core/Button';
import {  blueGrey } from '@material-ui/core/colors';
import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import axios from 'axios';
const theme = createMuiTheme({
    palette: {
      primary: blueGrey,
    },
  });
//    const  data=this.inputRef.current.value
export default class Mods extends React.Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()

        this.state={
            data:''
        }
    }
        componentDidMount(){
            console.log(this.inputRef)
            this.inputRef.current.focus()
         const  data=this.inputRef.current.value
        }

          
        hand= (data) => {
            console.log(data)
            alert("l");
            return dispatch => {
                dispatch();
            
                axios
                  .post(`https://postb.in/1596427221169-9039823107887`, {
                    data
                  })
                  .then(res => {
                    dispatch(res.data);
                  })
                  .catch(err => {
                    dispatch(err.message);
                  });
              };
            };
        

    
  render() {
     
      return(
          <div>
        <div className="modal-body">
           <textarea ref={this.inputRef} style={{width:'300px',height:'200px',marginTop:'30px'}} type="text" value={this.state} onChange={this.handler}></textarea>
           </div>
           <div className="modal-footer">
               <ThemeProvider theme={theme}>
               <Button variant="contained" color="primary" onClick={this.hand}> Tweet
             </Button>  </ThemeProvider>
           </div>
           </div>
      )
  }
}
