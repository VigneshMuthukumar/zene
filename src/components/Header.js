import React , {Component} from 'react';

import { Menu , Icon , Button} from 'semantic-ui-react'

export default class Header extends Component {

    render() {
        const access_token = localStorage.getItem('access_token')
        return (
        <div>
          <Menu stackable inverted style={{borderRadius:0}} size="large">
            <Menu.Item>
                    <Icon name="spotify" size="big"/>
            </Menu.Item>
            <Menu.Item header>Zene Music</Menu.Item>

          {
          access_token && <Menu.Item position="right">  
            <Button color="red"
              as="a"
              style={{ marginLeft: "0.5em" }}
            >
              Logout
            </Button>
          </Menu.Item>}
          </Menu>
        </div>
        )
      }

}