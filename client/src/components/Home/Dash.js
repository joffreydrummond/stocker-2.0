import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Dash extends React.Component {
  state = {
    strains: []
  };

  componentDidMount() {
    this.loadStrains();
  };

  loadStrains = () => {
    API.getStrains()
      .then( res => this.setState({ strains: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="dash">

        <div className="list-group">

          <div className="list-group-item list-group-item-action bg-dark text-white">Stocked Items</div>

       
          {this.state.strains.length ? (
                            <div>
                                {this.state.strains.map(strain => (
                                  <Link key={strain._id} to="/details/" className="list-group-item list-group-item-action dashNote">    
                                    {strain.name}
                                  </Link>
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