import React from "react";
import "./style.css";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Filters extends React.Component {
  /*eslint-disable no-unused-expressions */
  constructor() {
    super();
    this.state = {
      bookList: [],
      search: "",
      date: new Date(),
    };
  }

  updateInfo = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (fieldName === "bookname") {
      this.setState({ bookname: fieldValue });
    } else if (fieldName === "author") {
      this.setState({ author: fieldValue });
    } else if (fieldName === "isbn") {
      this.setState({ isbn: fieldValue });
    } else if (fieldName === "publisher") {
      this.setState({ publisher: fieldValue });
    } else if (fieldName === "copyrightyear") {
      this.setState({ copyrightyear: fieldValue });
    } else if (fieldName === "edition") {
      this.setState({ edition: fieldValue });
    } else if (fieldName === "printyear") {
      this.setState({ printyear: fieldValue });
    } else if (fieldName === "stackno") {
      this.setState({ stackno: fieldValue });
    } else if (fieldName === "volume") {
      this.setState({ volume: fieldValue });
    } else if (fieldName === "accessionno") {
      this.setState({ accessionno: fieldValue });
    } else if (fieldName === "pages") {
      this.setState({ pages: fieldValue });
    } else if (fieldName === "totalcopies") {
      this.setState({ totalcopies: fieldValue });
    } else if (fieldName === "availablecopies") {
      this.setState({ availablecopies: fieldValue });
    } else if (fieldName === "type") {
      this.setState({ type: fieldValue });
    } else if (fieldName === "price") {
      this.setState({ price: fieldValue });
    } else if (fieldName === "additionals") {
      this.setState({ additionals: fieldValue });
    } else if (fieldName === "search") {
      this.setState({ searchDevice: fieldValue });
      this.props.searchbook(fieldValue);
    }
  };

  add = (e) => {
    let {
      bookname,
      isbn,
      author,
      publisher,
      copyrightyear,
      edition,
      printyear,
      stackno,
      volume,
      accessionno,
      pages,
      totalcopies,
      type,
      price,
      additionals,
    } = this.state;
    this.props.addBook(
      bookname,
      isbn,
      author,
      publisher,
      copyrightyear,
      edition,
      printyear,
      stackno,
      volume,
      accessionno,
      pages,
      totalcopies,
      totalcopies,
      type,
      price,
      additionals
    );
    Filters.hideModal();

    this.props.fetchBooks();
    this.setState({
      bookname: "",
      isbn: "",
      author: "",
      publisher: "",
      copyrightyear: "",
      edition: "",
      printyear: "",
      stackno: "",
      volume: "",
      accessionno: "",
      pages: "",
      totalcopies: "",
      availablecopies: "",
      type: "",
      price: "",
      additionals: "",
    });
  };

  static showModal() {
    document.getElementById("addBook").showModal();
  }
  static hideModal() {
    document.getElementById("addBook").close();
  }

  static preventHide(e) {
    e.stopPropagation();
  }

  render() {
    let cList, uList, aList;
    let wid = "20vw";

    return (
      <div className="pageRow filters">
        <div className="thisBlock">
          <div className="blockTitle">
            <div className="row">
              <div className="col-lg-3 ml130 mt70">
                <div className="d-flex position-relative float-left">
                  <h1 className="section-title_4">Book List</h1>
                </div>
              </div>
            </div>

            {/*this is button add books*/}
            <div className="row">
              <div style={{ marginTop: "30px" }} className="col-6">
                <div className="text-center ml-288" />
              </div>

              {/*this is search*/}
              <div className="input-group rounded col">
                <input
                  value={this.state.searchDevice}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search by Book Info Or Student Info"
                  autoComplete="off"
                  name="search"
                  onChange={this.updateInfo}
                  aria-label="Search"
                  aria-describedby="search-addon"
                />

                <i style={{ fontSize: "1.5em" }} className="fas fa-search" />
              </div>
            </div>

            <dialog
              id="addBook"
              className="dialogBox"
              onClick={Filters.hideModal}
              style={{ width: "70vw" }}
            >
              <div
                style={{ background: "#87CEFA" }}
                className="dialogTitle"
                onClick={Filters.preventHide}
              >
                Add New Book
                <button onClick={Filters.hideModal}>X</button>
              </div>
              <div
                style={{ background: "#F0F8FF" }}
                className="dialogBody"
                onClick={Filters.preventHide}
              >
                <div style={{ width: wid }}>
                  <label>
                    {" "}
                    <i class="far fa-calendar-alt" /> Add date{" "}
                  </label>
                  <DatePicker
                    className="form-group form-control boder-color "
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Name *</label>
                  <input
                    onChange={this.updateInfo}
                    name="bookname"
                    value={this.state.bookname}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>ID</label>
                  <input
                    onChange={this.updateInfo}
                    name="isbn"
                    value={this.state.isbn}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Author *</label>
                  <input
                    onChange={this.updateInfo}
                    name="author"
                    value={this.state.author}
                  />
                </div>
                <div style={{ width: wid }}>
                  <label>Publisher</label>
                  <input
                    onChange={this.updateInfo}
                    name="publisher"
                    value={this.state.publisher}
                  />
                </div>
                <div style={{ width: wid }}>
                  <label>Copyright Year</label>
                  <input
                    onChange={this.updateInfo}
                    name="copyrightyear"
                    value={this.state.copyrightyear}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Print Year</label>
                  <input
                    onChange={this.updateInfo}
                    name="printyear"
                    value={this.state.printyear}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Volume</label>
                  <input
                    onChange={this.updateInfo}
                    name="volume"
                    value={this.state.volume}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Quantily*</label>
                  <input
                    onChange={this.updateInfo}
                    name="totalcopies"
                    value={this.state.totalcopies}
                  />
                </div>

                <div style={{ width: wid }}>
                  <label>Type</label>
                  <input
                    onChange={this.updateInfo}
                    name="type"
                    value={this.state.type}
                  />
                </div>
                <div style={{ width: wid }}>
                  <label>Price</label>
                  <input
                    onChange={this.updateInfo}
                    name="price"
                    value={this.state.price}
                  />
                </div>
                <div style={{ width: wid }}>
                  <label>Additionals</label>
                  <input
                    onChange={this.updateInfo}
                    name="additionals"
                    value={this.state.additionals}
                  />
                </div>
              </div>
              <div className="dialogFooter" onClick={Filters.preventHide}>
                {/* <button onClick={this.add} disabled={!this.state.bookname || !this.state.author||!this.state.totalcopies}>Add</button> */}
                <button className="btn  btn_normal ml5 mr5" onClick={this.test}>
                  <i className="fa fa-plus" /> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                  Add
                </button>
                {/*<button onClick={Filters.hideModal}>Cancel</button> */}

                <button className="btn btndefaul">
                  <i className="fas fa-times-circle mr-2" /> &nbsp;Cancel
                </button>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    );
  }
}
