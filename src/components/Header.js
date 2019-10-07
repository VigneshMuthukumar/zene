import React , {Component} from 'react';

import { Menu , Icon , Button, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logout} from "../actions/"
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => {
    return {
      logout: bindActionCreators(logout, dispatch)
    };
  };

  const mapStateToProps = (state) => {
    return {
      auth: state.AuthReducer.isAuthenticated
    };
  }
class Header extends Component {

    render() {
        const  isAuthenticated  = this.props.auth;
        return (
        <div>
          <Menu 
           inverted 
           style={{borderRadius:0}} 
           fixed="top"
           size="large">
             <Container fluid>
            <Menu.Item>
                    <Icon name="spotify" size="big"/>
            </Menu.Item>
            <Menu.Item header>Zene Music</Menu.Item>

          {
          isAuthenticated && <Menu.Item position="right">  
            <Button color="red"
              as="a"
              style={{ marginLeft: "0.5em" }}
              onClick={()=>{
                this.props.logout()
                this.props.history.push('/login');
              }}>
             Logout
            </Button>
          </Menu.Item>}

             </Container>
          </Menu>
        </div>
        )
      }
}




export default connect(mapStateToProps,mapDispatchToProps) (Header);