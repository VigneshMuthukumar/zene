import React, { Component } from "react";
import '../App.css'
import {  Card, Search , Grid, Container , Image , Segment , Header, List , Label , Button } from "semantic-ui-react";
import Player from '../containers/PlayerContainer';
const _ = require('lodash')
const resultRenderer = ({name , id , images}) => {
  return (
    <div className="result" key={id}>
         <div className="image">
            <img src={images[1] && images[1].url} />
         </div>
       <div className="content">
         <div className="title">{name}</div>
       </div>
    </div>
  )
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: "",
      isLoading: false,
      albums : [],
      tracks : []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.artists && nextProps.artists.length > 0)
        return {...prevState, results : nextProps.artists , albums : nextProps.albums, tracks : nextProps.tracks, isLoading : false}

      return prevState;
  }
  handleSearchChange = (e, { value }) => {
      this.setState({
        value,
        isLoading : true
      })
      if(value.length > 0)
        this.props.searchArtist(value);  
      else
        this.setState({
          isLoading : false
        })
      
        

  };
  handleResultSelect = (e, { result }) =>{
    this.props.getAlbumsofArtist(result.id)
    this.setState({ value: result.name });
  }

  render() {
    const { isLoading, value, results , albums, tracks } = this.state;
    const {onPlay,onSetTrack , getTracksofAlbum} = this.props;
    return (
       <Container fluid>
        <Grid inverted style={{marginTop:20}}> 
          <Grid.Column width={5}>
            <Search
              
              loading={isLoading}
              size="huge"
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, {
                leading: true,
              })}
              results={results}
              resultRenderer={resultRenderer}
              value={value}
            />
          </Grid.Column>
          <Grid.Column width={11}>
                <Container style={{marginTop:20}}>
                  <Grid inverted>
                    <Grid.Column width={10} >
                      {     
                        albums && albums.length > 0 ? 
                        <div>
                        <Header as="h1" color="grey" textAlign="left"> Albums </Header>
                        <Card.Group>
                        {
                          albums.map((album, key) => {
                            return (
                              <Card key={key} album={album} color='teal' onClick={() => {                                  
                                getTracksofAlbum(album.id)
                              }}>
                                <Image src={album.images[0].url}/>
                                <Card.Content>
                                  <Card.Header>
                                    {album.name}
                                  </Card.Header>
                                  <Card.Meta>
                                    <span>{album.total_tracks} track{album.total_tracks > 1 ? 's' : ''}</span><br />
                                    <span className='date'> {album.release_date}</span>
                                  </Card.Meta>
                                </Card.Content>
                              </Card>
                            )
                          })
                        }
                        </Card.Group>
                        </div>
                      :
                      null
                      }
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Container > 
                        { tracks && tracks.length > 0 &&
                        <div>
                         <Header as="h3" color="grey" textAlign="left"> Album Name </Header>
                          <List  verticalAlign='top'>
                            {
                              tracks.map((track, key) => {
                                return (
                                  <List.Item key={key}>
                                    <List.Content floated='left'>
                                      <List.Header className="track-name">{track.name}</List.Header>
                                      <List.Header className="track-name">{track.artists[0].name}</List.Header>
                                      
                                    </List.Content>
    
                                    <List.Content floated='right'>
                                      {
                                        !track.preview_url ?
                                          <Label basic size="mini" color='red' pointing='right'>Stream not available</Label> : null
                                      }
                                      <Button circular icon='play' content='Play' onClick={
                                        () => {
                                          onPlay(track)
                                          onSetTrack(tracks)
                                        }
                                      } disabled={!track.preview_url}/>
                                    </List.Content>
                                  </List.Item>
                                )
                              })
                            }
                          </List>
                        </div>
                        }
                        </Container>
                    </Grid.Column>
                  </Grid>
                </Container>
          </Grid.Column>
        </Grid>
        <Player activeTrack={this.props.activeTrack} onNextTrack={this.props.onNextTrack} onPrevTrack={this.props.onPrevTrack}/>
      </Container>
    );
  }
}
