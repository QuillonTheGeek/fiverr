import "./Gigs.scss";
import React from "react";
import { useState } from "react";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          FIVERR {">"} GRAPHICS & DESIGN {">"}
        </span>
        <h1>AI Artist</h1>
        <p>
          {`Explore the boundaries of art and technology with fiverr's AI artists`}
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">Best Selling</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                <span>Newest</span>
                <span>Best Selling</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
