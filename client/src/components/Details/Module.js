import React from "react";

// id={strain._id}
// name={strain.name} 
// info={strain.information}
// inStock={strain.inStock}
// date={strain.date}

function Module(props) {
    return (
        <div id={"module" + props.id} class="modal fade" role="dialog">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title"> {props.name} </h4>
                    </div>
                    <div class="modal-body">
                        <p> {props.info} </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Module;