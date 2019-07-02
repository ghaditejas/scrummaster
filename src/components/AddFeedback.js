import React, { Component } from 'react';
import axios from 'axios';

class AddFeedback extends Component {
    constructor(){
        super();
        this.state = {
            receivers_list: []
        }
    }
    componentWillMount(){
        axios.get('http://10.0.100.226:3001/receiver', { headers: { Authorization: localStorage.getItem('token') } })
        .then(res => {
            console.log(res.data.list);
            this.setState({
                receivers_list: res.data.list
            });
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
    render() {
        return(
            <div className="col-sm-12">
                <section className="add_fb_content content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Add Feedback</h3>
                                </div>
                                {this.state.receivers_list.map((receiver,i) => (
                                    <form key={i} method="post">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <img className="img-user" src={"http://10.0.100.226:3001/"+receiver.profile_photo}/>&nbsp;&nbsp;
                                                <span><b className="user_name">{receiver.name}</b></span>
                                            </div>
                                            <div className="form-group">
                                                <label>Feedback*</label>
                                                <textarea className="form-control" name={"feedback"+i} id={"feedback"+i} type="text"></textarea>
                                            </div>
                                            <button type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default AddFeedback;

