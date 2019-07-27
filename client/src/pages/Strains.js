import React, { Component } from 'react';
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Strains extends Component {
    state = {
        strains: []
    };

    componentDidMount() {
        console.log("Did this work. Bryton is smart");
        
        this.loadStrains();
    }

    loadStrains = () => {
        API.getStrains()
            .then( res => this.setState({ strains: res.data }))
            .catch(err => console.log(err));
   
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6 sm-12">
                        <h1>Strains of Marijuana</h1>
                        {this.state.strains.length ? (
                            <List>
                                {this.state.strains.map(strain => (
                                    <ListItem key={strain._id}>
                                        <a href={"/strains/" + strain._id}>
                                            <strong>
                                                {strain.name}
                                            </strong>
                                        </a>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No results</h3>
                            )}
                    </Col>
                </Row>
                
         </Container>
     )
 }
   
    
    
}


export default Strains;