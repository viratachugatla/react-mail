import React from "react";
import MailCard from "../cards/MailCard";

function MailList(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <MailCard
            setActiveMailId={props.setActiveMailId}
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
}

export default MailList;
