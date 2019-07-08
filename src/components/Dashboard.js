import React, { Component } from 'react';
import moment from 'moment';

class Dashboard extends Component {
    render() {
        console.log(this.props.feedback);
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Feedback Listout
                    </h1>
                </section>
                <section className="content">
                    <div className="col-sm-12">
                        {this.props.feedback.map((feedbackDetails,i) => (
                            <div key={i} className="col-sm-4">
                                <div className="small-box bg-aqua">
                                    <div className="inner">
                                        <p className="static-box-size">{feedbackDetails.feedback}</p>
                                        <span className="time-footer">- {moment(feedbackDetails.created_at).fromNow()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}
export default Dashboard;