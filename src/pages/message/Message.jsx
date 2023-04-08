import "./Message.scss";
import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>{" "}
          {">"} QUILLON {">"}
        </span>

        <div className="messages">
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eligendi temporibus quam inventore, quo, perspiciatis nulla qui
              aliquam et alias tenetur corporis consequatur atque quos veniam
              laboriosam, esse minima libero.
            </p>
          </div>

          <hr />

          <div className="write">
            <textarea
              name=""
              placeholder=" write a message..."
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
