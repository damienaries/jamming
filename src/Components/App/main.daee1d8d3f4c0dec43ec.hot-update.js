webpackHotUpdate("main",{

/***/ "./src/Components/App/App.js":
/*!***********************************!*\
  !*** ./src/Components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/Components/App/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchBar_SearchBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar.js */ "./src/Components/SearchBar/SearchBar.js");
/* harmony import */ var _SearchResults_SearchResults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SearchResults/SearchResults.js */ "./src/Components/SearchResults/SearchResults.js");
/* harmony import */ var _Playlist_Playlist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Playlist/Playlist.js */ "./src/Components/Playlist/Playlist.js");
/* harmony import */ var _TrackList_TrackList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackList/TrackList.js */ "./src/Components/TrackList/TrackList.js");
var _jsxFileName = "/Users/Dam/Jamming/jamming/src/Components/App/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: [{
        name: 'name1',
        artist: 'artist1',
        album: 'album1',
        id: 1
      }, {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        id: 2
      }, {
        name: 'name3',
        artist: 'artist3',
        album: 'album3',
        id: 3
      }],
      playlistName: 'My Playlist1',
      playlistTracks: [{
        name: 'playlistName1',
        artist: 'playlistArtist1',
        album: 'playlistAlbum1',
        id: 4
      }, {
        name: 'playlistName2',
        artist: 'playlistArtist2',
        album: 'playlistAlbum2',
        id: 5
      }, {
        name: 'playlistName3',
        artist: 'playlistArtist3',
        album: 'playlistAlbum3',
        id: 6
      }]
    };
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  }

  removeTrack(track) {
    this.setState();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 3
      }
    }, "Ja", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "highlight",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, "mmm"), "ing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar_SearchBar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App-playlist",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResults_SearchResults_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      searchResults: this.state.searchResults,
      onAdd: this.props.addTrack,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Playlist_Playlist_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      playlistName: this.state.playlistName,
      playlistTracks: this.state.playlistTracks,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.daee1d8d3f4c0dec43ec.hot-update.js.map