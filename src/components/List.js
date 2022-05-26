import React from "react";
import thumbTack from "../images/thumbtack.png";
import thumbTackW from "../images/thumbtack-w.png";
import "./List.css";

const List = ({list, onTogglePin}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Alias</td>
            <td>Command</td>
            <td>Pin</td>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => {
            const { id, alias, command, isPinned } = e;
            return (
              <tr key={id} className={isPinned === "pinned" ? "pinned" : ""}>
                <td>{alias}</td>
                <td>{command}</td>
                <td className="hasButton">
                  <button onClick={() => onTogglePin(id)}>
                    {isPinned === "pinned" ? (
                      <img width="20px" src={thumbTackW} alt="thumbtack" />
                    ) : (
                      <img width="20px" src={thumbTack} alt="thumbtack" />
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;