import React, { Component } from "react";
import axios from 'axios';
import Suggestions from "../Suggestions/Suggestions"

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  searchStrains = () => {
    axios.get("/api/strains/")
      .then(({ data }) => {
      this.setState({
        results: data.name
      });
    });
  };

  

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.searchStrains()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search strains..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }

}

export default Search;
