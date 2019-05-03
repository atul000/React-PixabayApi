import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResult from '../image-result/ImageResult'



 class Search extends Component {

    state = {
        searchText: "",
        amount: 10,
        apiUrl: "https://pixabay.com/api",
        apiKey: "8763506-ba60fe5b04914e38432780280",
        images: []
    };

    // onTextChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value }, () => {
    //         axios
    //             .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&
    //             per_page=${this.state.amount}&safesearch=true`)
    //             .then(res => this.setState({ images: res.data.hits }))
    //             .catch(err => console.log(err))
    //     });
    // };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
      };

    onAmountChange = (e, index, value) => this.setState({ amount: value });



  render() {
      console.log(this.state.images)
    return (
      <div  className="App">
      Made with <i class="fas fa-heart fa-2x"></i> by <b>Atul</b>
        <TextField
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText="Search for Images"
        fullWidth={true}
        />
        <br/>

        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResult images={this.state.images} />) : null}

        

      </div>
    )
  }
}

export default Search;