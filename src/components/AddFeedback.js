import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class AddFeedback extends Component {
    render() {
        return(
            <div className="col-sm-12">
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Fill In Details</h3>
                                </div>
                                <form id="add_coupon" method="post">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Coupon Code</label>
                                            <input className="form-control" name="coupon_code" id="coupon_code" type="text" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label>Percentage Off</label>
                                            <input className="form-control" name="percent" id="percent" type="text" value="" />
                                        </div>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default AddFeedback;

