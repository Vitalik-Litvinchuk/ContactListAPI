import { connect } from "react-redux";

const SideBar = ({ ContactList, IsRequest, SearchList,isSearch }) => {

  let countWork = 0;
  let countPrivate = 0;
  let countFriend = 0;
  let countFamily = 0;
  if (!IsRequest) {
    if (SearchList.length !== 0)
      SearchList.forEach(element => {
        switch (element.Status) {
          case "Friend": ++countFriend; break;
          case "Work": ++countWork; break;
          case "Private": ++countPrivate; break;
          case "Family": ++countFamily; break;
          default: break;
        }
      });
    else if (!isSearch)
      ContactList.forEach(element => {
        switch (element.Status) {
          case "Friend": ++countFriend; break;
          case "Work": ++countWork; break;
          case "Private": ++countPrivate; break;
          case "Family": ++countFamily; break;
          default: break;
        }
      });
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">All contacts<span>{ContactList.length}</span></div>
        <div className="list">
          {/* <div className="input-group">
            <input type="text" className="contacts-search rounded" placeholder="Search" />
          </div> */}
          <div className="head rounded">Labels</div>
          <div className="unit">
            <div className="lab lab-success rounded-pill">Work</div><span>{countWork}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary rounded-pill">Family</div><span>{countFamily}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger rounded-pill">Private</div><span>{countPrivate}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning rounded-pill">Friends</div><span>{countFriend}</span>
          </div>
          {/* <button type="button" className="btn btn-primary font-weight-700">Add new label</button> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ ListReducer }) => {
  const { ContactList, IsRequest, SearchList, isSearch } = ListReducer;
  return { ContactList, IsRequest, SearchList, isSearch };
}

export default connect(mapStateToProps)(SideBar);
