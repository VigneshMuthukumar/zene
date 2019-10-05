import React , {Component} from 'react';

import { Menu , Icon , Button, Container} from 'semantic-ui-react'

export default class Header extends Component {

    render() {
        const access_token = localStorage.getItem('access_token')
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
          access_token && <Menu.Item position="right">  
            <Button color="red"
              as="a"
              style={{ marginLeft: "0.5em" }}
              onClick={()=>{
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
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