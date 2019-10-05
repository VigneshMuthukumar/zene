import React, { Component } from "react";
import '../App.css'
import {  Card, Search , Grid, Container , Image , Segment , Header, List , Label , Button } from "semantic-ui-react";
import Player from './Player';
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
      results: [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0a6rlKqFyJl2rBtU4UTpO7"
          },
          "followers": {
            "href": null,
            "total": 4
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/0a6rlKqFyJl2rBtU4UTpO7",
          "id": "0a6rlKqFyJl2rBtU4UTpO7",
          "images": [],
          "name": "Master Vignesh",
          "popularity": 19,
          "type": "artist",
          "uri": "spotify:artist:0a6rlKqFyJl2rBtU4UTpO7"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7JZpVZJRgN6mMiNiJldFf0"
          },
          "followers": {
            "href": null,
            "total": 12107
          },
          "genres": [
            "tamil pop"
          ],
          "href": "https://api.spotify.com/v1/artists/7JZpVZJRgN6mMiNiJldFf0",
          "id": "7JZpVZJRgN6mMiNiJldFf0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ef689b33ddc708548af501c916f83e16a73b1f23",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/df5b32298421d8bd17cc92ab6ea952fa387d88cd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/952a1001095f1e72f1e285cd189fbc9f3bdb0c16",
              "width": 64
            }
          ],
          "name": "Anirudh Ravichander and Vignesh Shivan",
          "popularity": 21,
          "type": "artist",
          "uri": "spotify:artist:7JZpVZJRgN6mMiNiJldFf0"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1yzwPGlvrRLlhYkCRYde5z"
          },
          "followers": {
            "href": null,
            "total": 21
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1yzwPGlvrRLlhYkCRYde5z",
          "id": "1yzwPGlvrRLlhYkCRYde5z",
          "images": [],
          "name": "Vignesh Shivan",
          "popularity": 17,
          "type": "artist",
          "uri": "spotify:artist:1yzwPGlvrRLlhYkCRYde5z"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2SbRYFTH2UxgAM18rDoHu5"
          },
          "followers": {
            "href": null,
            "total": 23
          },
          "genres": [
            "carnatic vocal",
            "indian classical"
          ],
          "href": "https://api.spotify.com/v1/artists/2SbRYFTH2UxgAM18rDoHu5",
          "id": "2SbRYFTH2UxgAM18rDoHu5",
          "images": [],
          "name": "Vignesh Ishwar",
          "popularity": 12,
          "type": "artist",
          "uri": "spotify:artist:2SbRYFTH2UxgAM18rDoHu5"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1lSvO0nN0XCmQfOPhL3Oac"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1lSvO0nN0XCmQfOPhL3Oac",
          "id": "1lSvO0nN0XCmQfOPhL3Oac",
          "images": [],
          "name": "Vignesh Narayanan",
          "popularity": 13,
          "type": "artist",
          "uri": "spotify:artist:1lSvO0nN0XCmQfOPhL3Oac"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3cGZqGPKhq8ChGYotV0mlS"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3cGZqGPKhq8ChGYotV0mlS",
          "id": "3cGZqGPKhq8ChGYotV0mlS",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4cbf1ad34f5d8eb4d32f536518e9cf811f6acc56",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/7206de00589116242c783b8ccc4807224f980f3a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c8a643cb67a5b8be6d5b3374f20967f21dce2bf8",
              "width": 64
            }
          ],
          "name": "Sai Vignesh",
          "popularity": 9,
          "type": "artist",
          "uri": "spotify:artist:3cGZqGPKhq8ChGYotV0mlS"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0OkUetOds0PiYPcdFgPeLJ"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/0OkUetOds0PiYPcdFgPeLJ",
          "id": "0OkUetOds0PiYPcdFgPeLJ",
          "images": [],
          "name": "Vignesh Natarajan",
          "popularity": 10,
          "type": "artist",
          "uri": "spotify:artist:0OkUetOds0PiYPcdFgPeLJ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43DWDwFbZB2qTm3fMgcUbu"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/43DWDwFbZB2qTm3fMgcUbu",
          "id": "43DWDwFbZB2qTm3fMgcUbu",
          "images": [],
          "name": "Vignesh Sai Charan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:43DWDwFbZB2qTm3fMgcUbu"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6tedGtYCTwa2OT6Te0xJiA"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/6tedGtYCTwa2OT6Te0xJiA",
          "id": "6tedGtYCTwa2OT6Te0xJiA",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738bb1a90af821d72482248f0f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028bb1a90af821d72482248f0f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518bb1a90af821d72482248f0f",
              "width": 64
            }
          ],
          "name": "Vignesh RV",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:6tedGtYCTwa2OT6Te0xJiA"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7uADUzNvbJjeqVlefSvcOw"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/7uADUzNvbJjeqVlefSvcOw",
          "id": "7uADUzNvbJjeqVlefSvcOw",
          "images": [],
          "name": "Vignesh Narayan",
          "popularity": 1,
          "type": "artist",
          "uri": "spotify:artist:7uADUzNvbJjeqVlefSvcOw"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2xFGUtBPbTcPVDsvx8YGaj"
          },
          "followers": {
            "href": null,
            "total": 7
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/2xFGUtBPbTcPVDsvx8YGaj",
          "id": "2xFGUtBPbTcPVDsvx8YGaj",
          "images": [],
          "name": "Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:2xFGUtBPbTcPVDsvx8YGaj"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6y1APgF7dSQe04vlTEHAVF"
          },
          "followers": {
            "href": null,
            "total": 3
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/6y1APgF7dSQe04vlTEHAVF",
          "id": "6y1APgF7dSQe04vlTEHAVF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b95a767e9cff52dc1f01101edbda34bcd1b72647",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/eb0c002bb4dc2b5f07eaa4769b08a08a9797ab13",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/6a5601761c895cb4f697391cf8d3b5e13411801d",
              "width": 160
            }
          ],
          "name": "Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:6y1APgF7dSQe04vlTEHAVF"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3AkAXCAtJYxCHr1daf1fPf"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3AkAXCAtJYxCHr1daf1fPf",
          "id": "3AkAXCAtJYxCHr1daf1fPf",
          "images": [],
          "name": "Vignesh Venkat",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3AkAXCAtJYxCHr1daf1fPf"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3QOURHex7Y1xBBcmKrUJyQ"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3QOURHex7Y1xBBcmKrUJyQ",
          "id": "3QOURHex7Y1xBBcmKrUJyQ",
          "images": [],
          "name": "Vignesh Ravichandran",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3QOURHex7Y1xBBcmKrUJyQ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3UvaXMyfJDZPS8r2vXirOt"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3UvaXMyfJDZPS8r2vXirOt",
          "id": "3UvaXMyfJDZPS8r2vXirOt",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/d2c8e63980e6718067288b382b3b03cf14d34dc2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/6d4021a0c8f8a4e6b10a692280426b259b03f793",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/412b56bbfc1fb3e1c4fadc4197032b7bfc9086db",
              "width": 64
            }
          ],
          "name": "Vignesh Rammohan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3UvaXMyfJDZPS8r2vXirOt"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3vqtyq4SAjcetVFB3VzbX7"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3vqtyq4SAjcetVFB3VzbX7",
          "id": "3vqtyq4SAjcetVFB3VzbX7",
          "images": [],
          "name": "Vignesh Srinivasan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3vqtyq4SAjcetVFB3VzbX7"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4GflUwYJF4bugcyRhGP04C"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/4GflUwYJF4bugcyRhGP04C",
          "id": "4GflUwYJF4bugcyRhGP04C",
          "images": [],
          "name": "Hari Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:4GflUwYJF4bugcyRhGP04C"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Zrk1Hy6rRdLxZpZOeHFAQ"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/5Zrk1Hy6rRdLxZpZOeHFAQ",
          "id": "5Zrk1Hy6rRdLxZpZOeHFAQ",
          "images": [],
          "name": "Vignesh Ravi",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:5Zrk1Hy6rRdLxZpZOeHFAQ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7jO7CbnNzPoJWW6fRfxA7R"
          },
          "followers": {
            "href": null,
            "total": 4
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/7jO7CbnNzPoJWW6fRfxA7R",
          "id": "7jO7CbnNzPoJWW6fRfxA7R",
          "images": [],
          "name": "Shobana Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:7jO7CbnNzPoJWW6fRfxA7R"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1iJJ4vPDtcm9yuzgrQlbDG"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1iJJ4vPDtcm9yuzgrQlbDG",
          "id": "1iJJ4vPDtcm9yuzgrQlbDG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/49332efe2d875971ce646ff6dd65c2ef2acf8c37",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/884ad4b8c0a67bb130c3efcfee9b0126396873a6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c36f6186b3df27931ac532420324a890438bd432",
              "width": 64
            }
          ],
          "name": "Vignesh Baskaran",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:1iJJ4vPDtcm9yuzgrQlbDG"
        },
         {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0a6rlKqFyJl2rBtU4UTpO7"
          },
          "followers": {
            "href": null,
            "total": 4
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/0a6rlKqFyJl2rBtU4UTpO7",
          "id": "0a6rlKqFyJl2rBtU4UTpO7",
          "images": [],
          "name": "Master Vignesh",
          "popularity": 19,
          "type": "artist",
          "uri": "spotify:artist:0a6rlKqFyJl2rBtU4UTpO7"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7JZpVZJRgN6mMiNiJldFf0"
          },
          "followers": {
            "href": null,
            "total": 12107
          },
          "genres": [
            "tamil pop"
          ],
          "href": "https://api.spotify.com/v1/artists/7JZpVZJRgN6mMiNiJldFf0",
          "id": "7JZpVZJRgN6mMiNiJldFf0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ef689b33ddc708548af501c916f83e16a73b1f23",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/df5b32298421d8bd17cc92ab6ea952fa387d88cd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/952a1001095f1e72f1e285cd189fbc9f3bdb0c16",
              "width": 64
            }
          ],
          "name": "Anirudh Ravichander and Vignesh Shivan",
          "popularity": 21,
          "type": "artist",
          "uri": "spotify:artist:7JZpVZJRgN6mMiNiJldFf0"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1yzwPGlvrRLlhYkCRYde5z"
          },
          "followers": {
            "href": null,
            "total": 21
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1yzwPGlvrRLlhYkCRYde5z",
          "id": "1yzwPGlvrRLlhYkCRYde5z",
          "images": [],
          "name": "Vignesh Shivan",
          "popularity": 17,
          "type": "artist",
          "uri": "spotify:artist:1yzwPGlvrRLlhYkCRYde5z"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2SbRYFTH2UxgAM18rDoHu5"
          },
          "followers": {
            "href": null,
            "total": 23
          },
          "genres": [
            "carnatic vocal",
            "indian classical"
          ],
          "href": "https://api.spotify.com/v1/artists/2SbRYFTH2UxgAM18rDoHu5",
          "id": "2SbRYFTH2UxgAM18rDoHu5",
          "images": [],
          "name": "Vignesh Ishwar",
          "popularity": 12,
          "type": "artist",
          "uri": "spotify:artist:2SbRYFTH2UxgAM18rDoHu5"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1lSvO0nN0XCmQfOPhL3Oac"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1lSvO0nN0XCmQfOPhL3Oac",
          "id": "1lSvO0nN0XCmQfOPhL3Oac",
          "images": [],
          "name": "Vignesh Narayanan",
          "popularity": 13,
          "type": "artist",
          "uri": "spotify:artist:1lSvO0nN0XCmQfOPhL3Oac"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3cGZqGPKhq8ChGYotV0mlS"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3cGZqGPKhq8ChGYotV0mlS",
          "id": "3cGZqGPKhq8ChGYotV0mlS",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4cbf1ad34f5d8eb4d32f536518e9cf811f6acc56",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/7206de00589116242c783b8ccc4807224f980f3a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c8a643cb67a5b8be6d5b3374f20967f21dce2bf8",
              "width": 64
            }
          ],
          "name": "Sai Vignesh",
          "popularity": 9,
          "type": "artist",
          "uri": "spotify:artist:3cGZqGPKhq8ChGYotV0mlS"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0OkUetOds0PiYPcdFgPeLJ"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/0OkUetOds0PiYPcdFgPeLJ",
          "id": "0OkUetOds0PiYPcdFgPeLJ",
          "images": [],
          "name": "Vignesh Natarajan",
          "popularity": 10,
          "type": "artist",
          "uri": "spotify:artist:0OkUetOds0PiYPcdFgPeLJ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/43DWDwFbZB2qTm3fMgcUbu"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/43DWDwFbZB2qTm3fMgcUbu",
          "id": "43DWDwFbZB2qTm3fMgcUbu",
          "images": [],
          "name": "Vignesh Sai Charan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:43DWDwFbZB2qTm3fMgcUbu"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6tedGtYCTwa2OT6Te0xJiA"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/6tedGtYCTwa2OT6Te0xJiA",
          "id": "6tedGtYCTwa2OT6Te0xJiA",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2738bb1a90af821d72482248f0f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e028bb1a90af821d72482248f0f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048518bb1a90af821d72482248f0f",
              "width": 64
            }
          ],
          "name": "Vignesh RV",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:6tedGtYCTwa2OT6Te0xJiA"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7uADUzNvbJjeqVlefSvcOw"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/7uADUzNvbJjeqVlefSvcOw",
          "id": "7uADUzNvbJjeqVlefSvcOw",
          "images": [],
          "name": "Vignesh Narayan",
          "popularity": 1,
          "type": "artist",
          "uri": "spotify:artist:7uADUzNvbJjeqVlefSvcOw"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2xFGUtBPbTcPVDsvx8YGaj"
          },
          "followers": {
            "href": null,
            "total": 7
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/2xFGUtBPbTcPVDsvx8YGaj",
          "id": "2xFGUtBPbTcPVDsvx8YGaj",
          "images": [],
          "name": "Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:2xFGUtBPbTcPVDsvx8YGaj"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6y1APgF7dSQe04vlTEHAVF"
          },
          "followers": {
            "href": null,
            "total": 3
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/6y1APgF7dSQe04vlTEHAVF",
          "id": "6y1APgF7dSQe04vlTEHAVF",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/b95a767e9cff52dc1f01101edbda34bcd1b72647",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/eb0c002bb4dc2b5f07eaa4769b08a08a9797ab13",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/6a5601761c895cb4f697391cf8d3b5e13411801d",
              "width": 160
            }
          ],
          "name": "Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:6y1APgF7dSQe04vlTEHAVF"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3AkAXCAtJYxCHr1daf1fPf"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3AkAXCAtJYxCHr1daf1fPf",
          "id": "3AkAXCAtJYxCHr1daf1fPf",
          "images": [],
          "name": "Vignesh Venkat",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3AkAXCAtJYxCHr1daf1fPf"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3QOURHex7Y1xBBcmKrUJyQ"
          },
          "followers": {
            "href": null,
            "total": 1
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3QOURHex7Y1xBBcmKrUJyQ",
          "id": "3QOURHex7Y1xBBcmKrUJyQ",
          "images": [],
          "name": "Vignesh Ravichandran",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3QOURHex7Y1xBBcmKrUJyQ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3UvaXMyfJDZPS8r2vXirOt"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3UvaXMyfJDZPS8r2vXirOt",
          "id": "3UvaXMyfJDZPS8r2vXirOt",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/d2c8e63980e6718067288b382b3b03cf14d34dc2",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/6d4021a0c8f8a4e6b10a692280426b259b03f793",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/412b56bbfc1fb3e1c4fadc4197032b7bfc9086db",
              "width": 64
            }
          ],
          "name": "Vignesh Rammohan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3UvaXMyfJDZPS8r2vXirOt"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3vqtyq4SAjcetVFB3VzbX7"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/3vqtyq4SAjcetVFB3VzbX7",
          "id": "3vqtyq4SAjcetVFB3VzbX7",
          "images": [],
          "name": "Vignesh Srinivasan",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:3vqtyq4SAjcetVFB3VzbX7"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4GflUwYJF4bugcyRhGP04C"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/4GflUwYJF4bugcyRhGP04C",
          "id": "4GflUwYJF4bugcyRhGP04C",
          "images": [],
          "name": "Hari Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:4GflUwYJF4bugcyRhGP04C"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Zrk1Hy6rRdLxZpZOeHFAQ"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/5Zrk1Hy6rRdLxZpZOeHFAQ",
          "id": "5Zrk1Hy6rRdLxZpZOeHFAQ",
          "images": [],
          "name": "Vignesh Ravi",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:5Zrk1Hy6rRdLxZpZOeHFAQ"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7jO7CbnNzPoJWW6fRfxA7R"
          },
          "followers": {
            "href": null,
            "total": 4
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/7jO7CbnNzPoJWW6fRfxA7R",
          "id": "7jO7CbnNzPoJWW6fRfxA7R",
          "images": [],
          "name": "Shobana Vignesh",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:7jO7CbnNzPoJWW6fRfxA7R"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1iJJ4vPDtcm9yuzgrQlbDG"
          },
          "followers": {
            "href": null,
            "total": 0
          },
          "genres": [],
          "href": "https://api.spotify.com/v1/artists/1iJJ4vPDtcm9yuzgrQlbDG",
          "id": "1iJJ4vPDtcm9yuzgrQlbDG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/49332efe2d875971ce646ff6dd65c2ef2acf8c37",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/884ad4b8c0a67bb130c3efcfee9b0126396873a6",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/c36f6186b3df27931ac532420324a890438bd432",
              "width": 64
            }
          ],
          "name": "Vignesh Baskaran",
          "popularity": 0,
          "type": "artist",
          "uri": "spotify:artist:1iJJ4vPDtcm9yuzgrQlbDG"
        }
      ],
      value: "",
      isLoading: false,
      albums : [
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "album",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6akEvsycLGftJxYudPjmqK"
          },
          "href": "https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK",
          "id": "6akEvsycLGftJxYudPjmqK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
              "width": 64
            }
          ],
          "name": "Place In The Sun",
          "release_date": "2004-02-02",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6akEvsycLGftJxYudPjmqK"
        },
        {
          "album_group": "appears_on",
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0aXuMYPvjBGthmsiknR0DY"
              },
              "href": "https://api.spotify.com/v1/artists/0aXuMYPvjBGthmsiknR0DY",
              "id": "0aXuMYPvjBGthmsiknR0DY",
              "name": "Andy Gordon",
              "type": "artist",
              "uri": "spotify:artist:0aXuMYPvjBGthmsiknR0DY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1FrhRifX9s3sjpkoYG9N81"
          },
          "href": "https://api.spotify.com/v1/albums/1FrhRifX9s3sjpkoYG9N81",
          "id": "1FrhRifX9s3sjpkoYG9N81",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/406e09bbe8a799e57cb40b47a7c1c704d6ff87bf",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/11a9d097f9b4ce63c82ab0b5b270d586f1e11b5d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/d116b203d67d258ff608b4815aa1fd5486ef35f3",
              "width": 64
            }
          ],
          "name": "The Reverent Jorfy (Live)",
          "release_date": "2013",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:1FrhRifX9s3sjpkoYG9N81"
        }
      ],
      tracks : [
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 276773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
          },
          "href": "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
          "id": "2TpxZ7JUBn3uw46aR7qd6V",
          "is_local": false,
          "name": "All I Want",
          "preview_url": "https://p.scdn.co/mp3-preview/12b8cee72118f995f5494e1b34251e4ac997445e?cid=1a37e29e4d0e416c8ec4db1f047474e4",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 276773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
          },
          "href": "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
          "id": "2TpxZ7JUBn3uw46aR7qd6V",
          "is_local": false,
          "name": "All I Want",
          "preview_url": "https://p.scdn.co/mp3-preview/12b8cee72118f995f5494e1b34251e4ac997445e?cid=1a37e29e4d0e416c8ec4db1f047474e4",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 276773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
          },
          "href": "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
          "id": "2TpxZ7JUBn3uw46aR7qd6V",
          "is_local": false,
          "name": "All I Want",
          "preview_url": "https://p.scdn.co/mp3-preview/12b8cee72118f995f5494e1b34251e4ac997445e?cid=1a37e29e4d0e416c8ec4db1f047474e4",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 276773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
          },
          "href": "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
          "id": "2TpxZ7JUBn3uw46aR7qd6V",
          "is_local": false,
          "name": "All I Want",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
        },
        {
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
              },
              "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
              "id": "08td7MxkoHQkXnWAYD8d6Q",
              "name": "Tania Bowra",
              "type": "artist",
              "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "disc_number": 1,
          "duration_ms": 276773,
          "explicit": false,
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2TpxZ7JUBn3uw46aR7qd6V"
          },
          "href": "https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V",
          "id": "2TpxZ7JUBn3uw46aR7qd6V",
          "is_local": false,
          "name": "All I Want",
          "preview_url": "https://p.scdn.co/mp3-preview/12b8cee72118f995f5494e1b34251e4ac997445e?cid=1a37e29e4d0e416c8ec4db1f047474e4",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2TpxZ7JUBn3uw46aR7qd6V"
        },
      ]
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.artists && nextProps.artists.length > 0)
        return {...prevState, results : nextProps.artists}
      return prevState;
  }
  handleSearchChange = (e, { value }) => {
      // if(value.length > 0)
      //   this.props.searchArtist(value);  
      
      this.setState({
            value
      })

  };
  handleResultSelect = (e, { result }) =>{
    this.setState({ value: result.name });
  }

  render() {
    const { isLoading, value, results , albums, tracks } = this.state;
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
              {...this.props}
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
                              <Card key={key} color='teal' onClick={() => {
                                // onSelectPlaylist(playlist)
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
                                          // onPlay(track)
                                          // onSetTrack(tracks)
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
        <Player />
      </Container>
    );
  }
}
