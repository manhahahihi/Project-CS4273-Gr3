import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";

const override = css`
  display: inline;
  margin-top: 0 auto;
  border-color: red;
`;

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      name: "",
      roll: "",
      branch: "",
      year: "",
      phone: "",
      issued: "",
      id: "",
      found: false,
      bookid: "",
      loading: true,
    };
  }

  searchstudent = (event) => {
    let s = event.target.value;
    this.setState({ search: s }, () => {
      fetch(`https://stark-hamlet-65683.herokuapp.com/students/${s}`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0)
            this.setState({
              found: true,
              name: data[0].name,
              roll: data[0].roll,
              branch: data[0].branch,
              year: data[0].year,
              phone: data[0].phone,
              id: data[0].id,
              issued: data[0].issued,
            });
        });
    });
  };

  static showModal() {
    document.getElementById("issueBook").showModal();
  }
  static hideModal() {
    document.getElementById("issueBook").close();
  }

  static preventHide(e) {
    e.stopPropagation();
  }

  issue = () => {
    let {
      bookid,
      id,
      roll,
      bookname,
      name,
      author,
      publisher,
      edition,
      isbn,
    } = this.state;

    fetch("https://stark-hamlet-65683.herokuapp.com/bookissue", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookid: bookid,
        studentid: id,
        roll: roll,
        bookname: bookname,
        studentname: name,
        author: author,
        publisher: publisher,
        edition: edition,
        isbn: isbn,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        List.hideModal();
        this.props.fetchBooks();
        toast.info(data, {
          position: toast.POSITION.BOTTOM_RIGHT,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 3000,
          draggable: true,

          hideProgressBar: false,
        });
      });
  };

  /* eslint-disable no-unused-vars */

  render() {
    let wid = "20vw";
    let itemList;
    if (this.props.books && this.props.books.length > 0) {
      const none = <div style={{ marginLeft: "20px" }}>-</div>;

      itemList = this.props.books.map((item) => {
        const none = <div style={{ marginLeft: "20px" }}>-</div>;
        return (
          <tr key={item.id} className="tableRow" style={{ fontSize: "0.9em" }}>
            <td className="">
              <img
                style={{ width: "65px" }}
                src={"/assets/book/" + `${item.id}` + ".jpg"}
              />
            </td>
            <td
              className=""
              title="Click to know more about this book"
              style={{ width: "200px" }}
            >
              <Link to={"/book/" + item.id} draggable="false" className="">
                {item.name == "HHHH" ? "Game" : item.name}
              </Link>
            </td>
            <td className="">{item.isbn ? item.isbn || "-" : "IDBOOK397"}</td>
            <td className="">{item.author ? item.author || "-" : "UIT"}</td>

            <td className="">
              {item.publisher ? item.publisher || "-" : "UIT"}
            </td>
            <td style={{ marginLeft: "5px" }} className="copies">
              {item.availablecopies ? item.availablecopies || "-" : "0"}
            </td>

            <td className="">
              {item.availablecopies ? (
                <a
                  style={{ marginLeft: "-12px" }}
                  onClick={() => {
                    this.setState(
                      {
                        bookid: item.id,
                        bookname: item.name,
                        author: item.author,
                        publisher: item.publisher,
                        edition: item.edition,
                        isbn: item.isbn,
                      },
                      List.showModal()
                    );
                  }}
                >
                  <button className="btn  btn_normal mr5 mb3 mt3">
                    <i class="far fa-id-card" /> &nbsp; &nbsp; Borrow
                  </button>
                </a>
              ) : (
                <a
                  style={{ marginLeft: "-12px" }}
                  className="btn  mr5 mb3 mt3 btndefaul red"
                  style={{
                    cursor: "not-allowed",
                    opacity: "0.6",
                    marginLeft: "4px",
                  }}
                >
                  {" "}
                  <i class="far fa-times-circle" /> &nbsp; &nbsp; Borrow
                </a>
              )}
            </td>
          </tr>
        );
      });
    } else {
      itemList = (
        <tr key="nodata">
          <td className="noData" colSpan="6">
            <div className="sweet-loading">
              <ScaleLoader
                css={override}
                sizeUnit={"px"}
                color={"#0099cc"}
                size={60}
                height={35}
                width={8}
                radius={2}
                loading={this.state.loading}
              />
            </div>
          </td>
        </tr>
      );
    }

    return (
      <div className="pageRow" id="booksBlock">
        <div className="thisBlock">
          <div className="blockBody">
            <div className="thisTable mt10 table-height-book">
              <div className="tbl-header">
                <table>
                  <thead>
                    <tr style={{ fontSize: "19px" }}>
                      <th style={{ color: "white" }} className="">
                        Image
                      </th>
                      <th
                        style={{
                          color: "white",
                          width: "200px",
                          height: "50px",
                        }}
                      >
                        Name
                      </th>
                      <th style={{ color: "white" }} className="">
                        ID
                      </th>
                      <th style={{ color: "white" }} className="">
                        Author
                      </th>

                      <th style={{ color: "white" }} className="">
                        Publisher
                      </th>
                      <th style={{ color: "white" }} className="">
                        Available
                      </th>

                      <th style={{ color: "white" }} className=" ">
                        Action
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table>
                  <tbody>{itemList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <dialog
          id="issueBook"
          className="dialogBox"
          onClick={List.hideModal}
          style={{ width: "50vw" }}
        >
          <div
            style={{ background: "#282829" }}
            className="dialogTitle"
            onClick={List.preventHide}
          >
            Borrow Book
            <button onClick={List.hideModal}>X</button>
          </div>
          {!this.state.found || !this.state.search ? (
            <div
              style={{ background: "white" }}
              className="dialogBody"
              onClick={List.preventHide}
            >
              <div style={{ width: wid }}>
                <label>Search Student</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="form1"
                    onChange={this.searchstudent}
                    name="search"
                    placeholder="Search by ID or Name"
                    value={this.state.search}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{ background: "white" }}
              className="dialogBody"
              onClick={List.preventHide}
            >
              <div style={{ width: wid }}>
                <label>Search Student</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    onChange={this.searchstudent}
                    name="search"
                    placeholder="Search by ID or Name"
                    value={this.state.search}
                  />
                </div>
              </div>
              <div style={{ width: wid }}>
                <label>Name</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    name="search"
                    placeholder="Name"
                    value={this.state.name}
                  />
                </div>
              </div>
              <div style={{ width: wid }}>
                <label>ID Student</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    name="Roll"
                    placeholder="Roll"
                    value={this.state.roll}
                  />
                </div>
              </div>

              <div style={{ width: wid }}>
                <label>Phone</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    name="Phone"
                    placeholder="Phone"
                    value={this.state.phone}
                  />
                </div>
              </div>

              <div style={{ width: wid }}>
                <label>Borrow Books</label>

                <div className="form-outline">
                  <input
                    className="form-control"
                    name="issued"
                    placeholder="None"
                    value={this.state.issued}
                  />
                </div>
              </div>

              <div style={{ width: wid }}>
                <label style={{ color: "#3e8177" }}>
                  <i class="far fa-calendar-alt" /> Recommended To Return By :
                </label>
                <div className="form-outline">
                  <input
                    className="form-control"
                    name="recommend"
                    placeholder="None"
                    value={new Date(
                      new Date().getTime() + 15 * 24 * 60 * 60 * 1000
                    ).toDateString()}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="dialogFooter" onClick={List.preventHide}>
            <button
              className="btn btndefaul"
              onClick={this.issue}
              disabled={
                !this.state.found ||
                !this.state.search ||
                this.state.issued >= 3
              }
            >
              {" "}
              Borrow
            </button>
            <button className="btn  btn_normal" onClick={List.hideModal}>
              {" "}
              <i className="fas fa-times-circle" />&nbsp;Cancel
            </button>
          </div>
        </dialog>
      </div>
    );
  }
}
