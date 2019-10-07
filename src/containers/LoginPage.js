import React from "react";
import { connect  } from "react-redux";
import { Segment, Header, Container } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import Login from './../components/Login'
import {login} from '../actions/'

const mapDispatchToProps = dispatch => {
    return {
        login: bindActionCreators(login, dispatch)
    };
  };
  
class LoginPage extends React.Component {
    componentDidMount(){
        if(localStorage.getItem('access_token')) 
             this.props.history.push('/') 
    }
    render(){
        return(
            <Segment
                vertical
                className="cover"
            >
                <Segment
                className="cover-overlay"
                >
                    <Container>
                        <Header
                        as="h1"
                        className="cover-title"
                        >
                            Discover the Music you love.
                        </Header>
                        <br />
                        <Login {...this.props} />
                    </Container>
            </Segment>
          </Segment>
        )
    }
}

export default connect(null,mapDispatchToProps)(LoginPage);