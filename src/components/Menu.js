import React, { useState } from "react";

const Menu = () => {
  const [mode, setMode] = useState(false);
  const [search, setSearch] = useState("");
  const handleMode = () => {
    setMode(!mode)
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="d-flex justify-content-between bg-light">
      <div className="d-flex">
        <h4 className="p-2 flex-grow-1 bd-highlight">Text Utility</h4>
        <div className="p-2 flex-grow-1 bd-highlight">Home</div>
        <div className="p-2 flex-grow-1 bd-highlight">About Us</div>
        <div className="p-2 flex-grow-1 bd-highlight">
          Dropdown
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            Future Action
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            Future Inclusion
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            Future Enhancement
          </div>
        </div>
      </div>
      <form 
      className="d-flex gap-3 align-items-center"
      onSubmit={handleSubmit}
      >
        <div>
          <input 
          type="text" 
          className="form-control" 
          placeholder="search"
          value={search}
          onChange={handleSearch}
          />
        </div>
        <div>
          <button className="btn btn-sm btn-outline-primary form-control">
            Search
          </button>
        </div>
      </form>
      <div className="d-flex form-check form-switch align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={handleMode}
        />
        <label className="form-check-label">
          Enable {mode? "Light" : "Dark"} Mode
        </label>
      </div>
    </div>
  );
};

export default Menu;
