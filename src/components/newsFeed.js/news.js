import React, { Component } from 'react'
import AddNews from './addNews'
import ListNews from './listNews'

class News extends Component {
  render() {
    return (
      <div className="package container">

          <AddNews />
      </div>
    );
  }
}
export default News