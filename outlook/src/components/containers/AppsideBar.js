import React from "react";

function AppsideBar(props) {
  const { activeType, setActiveType, data } = props;
  const mailTypes = ["Inbox", "Spam", "Deleted Items", "Custom Folder"];

  return (
    <div>
      <div className="search-bar">
        <input
          placeholder="Search Mail and People"
          className="search-input"
        ></input>
      </div>
      <div className="sidebar-menu">
        <p className="heading">Folders</p>
        <ul className="mail-types-navigation-list">
          {mailTypes.map((item, index) => {
            return (
              <li
                className={item === activeType ? "active" : ""}
                onClick={() => {
                  setActiveType(item);
                }}
                key={index}
              >
                {item} -{" "}
                {item === "Inbox"
                  ? props.inboxUnread
                  : item === "Custom Folder"
                  ? props.customUnread
                  : item === "Spam"
                  ? props.spamUnread
                  : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AppsideBar;
