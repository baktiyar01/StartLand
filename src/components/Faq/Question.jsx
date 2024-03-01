import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Question = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "block" : "hidden";
  const ansClass = `${expandClass} p-4`;

  return (
    <div className="shadow rounded-md border-gray-100 border-t-0 w-full md:w-3/4 mx-auto">
      <div className="p-8 m-3 text-xl relative font-medium">
        <div className="w-full md:w-5/6 text-black dark:text-opacity-60 font-bold">
          {question}
        </div>
        <button
          aria-label="question-expander"
          className="text-xl absolute top-0 right-0 p-4 focus:ouline-none"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <FontAwesomeIcon icon={faChevronUp} className="w-5" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className="w-5" />
          )}
        </button>
      </div>
      <div className={ansClass}>{answer}</div>
    </div>
  );
};

export default Question;
