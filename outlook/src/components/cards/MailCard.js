import React from "react";

function MailCard(props) {
  const [flag, setFlag] = React.useState([]);

  return (
    <div>
      <div
        className={`mail-card `}
        onClick={() => {
          props.setActiveMailId(props.data.mId);
        }}
      >
        {props.data.unread ? <div className="unread"></div> : <></>}

        <div>
          <div className="mail-id">{props.data.mId}</div>
          <div className="subject">{props.data.subject}</div>
          <div className="content-preview">{props.data.content}</div>
        </div>
      </div>
    </div>
  );
}

export default MailCard;
