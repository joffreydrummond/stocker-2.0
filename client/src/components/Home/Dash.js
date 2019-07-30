import React from "react";
import API from "../../utils/API";
import DashNote from "./DashNote/index";
import Module from "../Details/Module";
import firebase from 'firebase';

class Dash extends React.Component {
  state = {
    strains: []
  };

  loadStrains = () => {
    API.getStrains()
      .then( res => this.setState({ strains: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadStrains();
  };

  render() {
    return (
      <div className="dash">

        <div className="list-group">

          <div className="list-group-item list-group-item-action bg-dark text-white">Stocked Items</div>

       
          {this.state.strains.length ? (
                            <div>
                                {this.state.strains.map(strain => (
                                  <div className="strainItem">

                                  <DashNote 
                                  id={strain._id} 
                                  name={strain.name} 
                                  inStock={strain.inStock}
                                  />   

                                  <Module
                                  id={strain._id}
                                  name={strain.name} 
                                  info={strain.information}
                                  inStock={strain.inStock}
                                  date={strain.date}
                                  /> 
                                  </div>
                     
                                ))}
                            </div>
                        ) : (
                                <h3>No results</h3>
                            )}

        </div>

      </div>
      
    )
  }

}

export default Dash;