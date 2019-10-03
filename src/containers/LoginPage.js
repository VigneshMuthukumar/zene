import React from "react";
import { connect } from "react-redux";
import { Segment, Header, Container } from "semantic-ui-react";
import Login from './../components/Login'
class LoginPage extends React.Component {
    componentDidMount(){
        if(localStorage.getItem('access_token')) 
             this.props.history.push('/') 
    }
    render(){
        return(
            <Segment
                inverted
                textAlign = "center"
                vertical
                className="cover"
            >
                <Segment
                inverted
                className="cover-overlay"
                >
                        <Header
                        as="h1"
                        className="cover-title"
                        >
                        Discover the Music you love.
                        </Header>
                        <br />
                        <Login {...this.props} />
            </Segment>
          </Segment>
        )
    }
}

export default connect()(LoginPage);