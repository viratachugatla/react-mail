import React from "react";
import MailCard from "../cards/MailCard";

function MailList(props) {
  const [flags, setFlags] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("flags", JSON.stringify(flags));
  });

  console.log(localStorage.getItem("flags"));
  const flag = [];
  return (
    <div>
      <select>
        <option>All</option>
        <option>Flagged</option>
      </select>
      {props.data.map((item, index) => {
        return (
          <>
            <MailCard
              setActiveMailId={props.setActiveMailId}
              key={index}
              data={item}
            />
            <button onClick={() => {}}>delete</button>
            <button
              onClick={() => {
                flag.push(item.mId);
                setFlags([...flags, flag]);
              }}
            >
              flag
            </button>
          </>
        );
      })}
    </div>
  );
}

export default MailList;
