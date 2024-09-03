import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TextExpander>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam
        molestiae excepturi, dolorum repellat voluptates nulla obcaecati ratione
        quos perferendis exercitationem similique reprehenderit?
      </TextExpander>

      <TextExpander
        collapseNumWords={20}
        expandButtonText="show more"
        collapseButtonText="show less"
        buttonColor="#ff6622"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam
        molestiae excepturi, dolorum repellat voluptates nulla obcaecati ratione
        quos perferendis exercitationem similique reprehenderit?
      </TextExpander>
      <TextExpander expanded={false} className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam
        molestiae excepturi, dolorum repellat voluptates nulla obcaecati ratione
        quos perferendis exercitationem similique reprehenderit?
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapseNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapseNumWords).join(" ") + "...";

  const btnStyle = {
    background: "none",
    border: "none",
    color: buttonColor,
    cursor: "pointer",
    font: "inherit",
    marginLeft: "6px",
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={btnStyle} onClick={() => setIsExpanded((isE) => !isE)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default App;
