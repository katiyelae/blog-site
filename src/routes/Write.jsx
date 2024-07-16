import React from "react"
import "./Write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
            className="write-img"
            src="#"
            alt="img associated with post"
            />
            <form className="write-form">
            <div className="write-form-grp">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input id="file-input" type="file" style={{ display: "none" }} />
          <input
            className="write-input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="write-form-grp">
          <textarea
            className="write-input write-text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>

            </form>
        </div>
    )
}