import React from "react";

function MailView(props) {
  const { data, activeMailId } = props;
  const [mail, setMail] = React.useState();

  React.useEffect(() => {
    const activeMaildData = data.filter((d) => {
      console.log(activeMailId);
      return d.mId === activeMailId;
    });
    setMail(activeMaildData);
  }, [activeMailId]);

  React.useEffect(() => {
    setMail();
  }, [data]);

  console.log(mail);

  return (
    <>
      {mail?.length > 0 ? (
        <div className="mail-viewer">
          <p>{mail && mail[0].mId}</p>
          <p>{mail && mail[0].subject}</p>
          <p>{mail && mail[0].content}</p>
        </div>
      ) : (
        <div className="empty-mail">
          <img src="/mail.jpg"></img>
          <p>Select an item to read</p>
        </div>
      )}
    </>
  );
}

export default MailView;
