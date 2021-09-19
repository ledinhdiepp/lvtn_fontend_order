import React, { Component } from "react";
import Cookie from "js-cookie";
import "../style/purchase.scss";
import axios from "axios";
export default class Confirmpurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticate: true,
      note: "",
      orders: [],
    };
  }
  async componentDidMount() {
    if (Cookie.get("role") === "Public") {
      let response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/orders",
        {
          headers: {
            Authorization: "bearer " + Cookie.get("token"),
          },
        }
      );
      if (!response.ok) {
        return;
      }
      let orders = await response.json();
      this.setState({
        loading: false,
        authenticate: true,
        orders: orders,
      });
      return;
    }
    this.setState({ authenticate: false });
  }
  render() {
    console.log(this.state.orders);
    return (
      <div className="d-flex justify-content-center row">
        {this.state.orders.map((order, index) => {
          if (order.id === this.props.match.params.id) {
            return (
              <div className="col-md-10">
                {order.productList.map((item, index) => {
                
                  if (item.status === "Confirmed") {
                    return (
                      <>
                        <div
                          className="row p-2 bg-white border rounded"
                          key={index}
                        >
                          <div className="col-md-3 mt-1">
                            <img
                              className="img-fluid img-responsive rounded product-image"
                              src={
                                process.env.REACT_APP_BACKEND_URL +
                                item.product.image.url
                              }
                              alt=""
                            />
                          </div>
                          <div className="col-md-6 mt-1">
                            <h5>{item.product.name}</h5>
                            <div className="d-flex flex-row">
                              Category : Kaki
                            </div>
                            <div className="d-flex flex-row">
                              Số cuộn : {item.quantity}
                            </div>
                            <div className="d-flex flex-row">Số Met : {item.met}</div>
                            <div className="mt-1 mb-1 spec-1">
                              <span>Màu: </span>
                              <span className="dot" />
                              <span>{item.color}</span>
                            </div>
                            <div className="mt-1 mb-1 spec-1">
                              <span>Unique design</span>
                              <span className="dot" />
                              <span>For men</span>
                              <span className="dot" />
                              <span>
                                Casual
                                <br />
                              </span>
                            </div>
                            <p className="text-justify text-truncate para mb-0">
                              {item.product.description}
                              <br />
                              <br />
                            </p>
                          </div>
                          <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div className="d-flex flex-row align-items-center">
                              <h4 className="mr-1">{item.product.price}</h4>
                              <span
                                style={{ marginLeft: 80 + "px" }}
                                className="strike-text"
                              >
                                {item.status}
                              </span>
                            </div>
                            <h6 className="text-success">Free shipping</h6>
                            <div className="d-flex flex-column mt-4">
                              <button
                                className="btn btn-primary btn-sm"
                                type="button"
                              >
                                Liên hệ người bán
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            );
          }
        })}
      </div>
    );
  }
}
