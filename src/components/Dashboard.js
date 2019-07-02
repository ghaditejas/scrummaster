import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
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
                                        <h3></h3>
                                        <p className="static-box-size">{feedbackDetails.feedback}</p>
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