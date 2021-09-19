import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Nav from "./component/Nav";
import { Link } from "react-router-dom";
import Allpurchase from "./Allpurchase";
import Cancelledpurchase from "./Cancelledpurchase";
import Checkingpurchase from "./Checkingpurchase";
import Confirmpurchase from "./Confirmpurchase";
import Deliveringpurchase from "./Deliveringpurchase";
import Deliveredpurchase from "./Deliveredpurchase";
import {withRouter} from "react-router-dom";
class index extends Component {
  render() {
    // if(this.props.match.params && this.props.match){
    //   console.log(this.props.match.params.id)
    // }
    
    
    return (
      <Switch>
        <div className="Purchase">
          <div className="container mt-5 mb-5 ">
          <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text product-more">
                  <Link to="/">
                    <i className="fa fa-home" /> Home
                  </Link>
                  <Link to="/products">Shop</Link>
                  <span>Chi tiết đơn đặt hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="tabs">
              <Nav id={this.props.match.params.id} />
              <div className="line"></div>
            </div>
            <Route path='/purchase/:id/' exact component={Allpurchase} />
            <Route path='/purchase/:id/cancelled' component={Cancelledpurchase} />
            <Route path='/purchase/:id/checking' component={Checkingpurchase} />
            <Route path='/purchase/:id/comfirmed' component={Confirmpurchase} />
            <Route path='/purchase/:id/delivering' component={Deliveringpurchase} />
            <Route path='/purchase/:id/delivered' component={Deliveredpurchase} />
          </div>
        </div>
      </Switch>
    );
  }
}

export default withRouter(index);
