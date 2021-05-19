import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navs/Navbar";
import AppsideBar from "./components/containers/AppsideBar";
import MailList from "./components/containers/MailList";
import MailView from "./components/containers/MailView";

function App() {
  const [activeType, setActiveType] = React.useState("Inbox");
  const [data, setData] = React.useState([]);
  const [activeMailId, setActiveMailId] = React.useState("");
  const inbox = [
    {
      mId: "guid-1",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-2",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    {
      mId: "guid-10",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-11",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    {
      mId: "guid-12",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-21",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
    {
      mId: "guid-ew1",
      unread: true,
      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-2s",
      unread: false,
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
  ];

  const spam = [
    {
      mId: "guid-3",
      unread: true,
      subject: "Pre Approved Loan",
      content:
        "Congratulations ! <u>Credit card<u> is being shipped to you today!",
    },
    {
      mId: "guid-4",
      unread: true,
      subject: "You won a lottery!",
      content:
        "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
    },
  ];

  const custom = [
    {
      mId: "guid-5",
      unread: true,
      subject: "Greetings virat",
      content:
        "Congratulations ! <u>Credit card<u> is being shipped to you today!",
    },
    {
      mId: "guid-6",
      unread: true,
      subject: "You won a lottery!",
      content:
        "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
    },
  ];

  const deleted = [];

  const inboxUnread = inbox.filter((d) => {
    return d.unread === true;
  }).length;

  const spamUnread = spam.filter((d) => {
    return d.unread === true;
  }).length;
  const customUnread = custom.filter((d) => {
    return d.unread === true;
  }).length;

  React.useEffect(() => {
    if (activeType === "Inbox") {
      setData(inbox);
    } else if (activeType === "Spam") {
      setData(spam);
    } else if (activeType === "Custom Folder") {
      setData(custom);
    } else {
      setData(deleted);
    }
  }, [activeType]);

  return (
    <div className="App">
      <Navbar />
      <div className="app-layout">
        <div class="sidebar">
          <AppsideBar
            inboxUnread={inboxUnread}
            spamUnread={spamUnread}
            customUnread={customUnread}
            activeType={activeType}
            setActiveType={setActiveType}
          />
        </div>
        <div class="mails-list">
          <MailList
            setActiveMailId={setActiveMailId}
            data={data}
            activeType={activeType}
          />
        </div>
        <div class="mail-view">
          <MailView data={data} activeMailId={activeMailId} />
        </div>
      </div>
    </div>
  );
}

export default App;
