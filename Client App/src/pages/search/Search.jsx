import React, { useState } from "react";

import Nav from "../../components/browse/Nav";
import SearchResult from "../../components/search/SearchResult";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [genreid, setGenres] = useState("");
  const [media, setMedia] = useState("");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = () => {
    setQuery(searchInput);
  };
  const handleChangeGenreId = (e) => {
    setGenres(e.target.value);
  };
  const handleChangeMedia = (e) => {
    setMedia(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const resetSearch = () => {
    setQuery("");
    setSearchInput("");
    setMedia("");
  };

  return (
    <div className="app">
      <Nav />
      <div className="s009">
        <form>
          <div className="inner-form">
            <div className="basic-search">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Type Keywords"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />
                <div className="icon-wrap">
                  <svg
                    className="svg-inline--fa fa-search fa-w-16"
                    fill="#ccc"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="combo_box">
              <div className="select">
                <select
                  defaultValue={genreid}
                  onChange={handleChangeGenreId}
                  className="select_genre"
                >
                  <option selected value="">
                    Thể Loại Phim
                  </option>
                  <option value="28">Action</option>
                  <option value="12">Adventure</option>
                  <option value="16">Animation</option>
                  <option value="35">Comedy</option>
                  <option value="10749">Romance</option>
                </select>
              </div>
              <div className="select">
                <select
                  defaultValue={media}
                  onChange={handleChangeMedia}
                  className="select_media"
                >
                  <option selected value="">
                    Type Media
                  </option>
                  <option value="movies">Movies</option>
                  <option value="tv">TV</option>
                  <option value="person">Person</option>
                </select>
              </div>
              <div className="select">
                <select
                  defaultValue={language}
                  onChange={handleChangeLanguage}
                  className="select_language"
                >
                  <option selected value="">
                    Language
                  </option>
                  <option value="en">English</option>
                  <option value="ja">Japanese</option>
                  <option value="kr">Korean</option>
                </select>
              </div>
              <div className="select">
                <select
                  defaultValue={year}
                  onChange={handleChangeYear}
                  className="select_year"
                >
                  <option selected value="">
                    Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                </select>
              </div>
            </div>
            <div className="advance-search">
              <div className="row third">
                <div className="input-field">
                  <div className="result-count"></div>
                  <div className="group-btn">
                    <button
                      className="btn-delete"
                      onClick={resetSearch}
                      type="button"
                    >
                      RESET
                    </button>
                    <button
                      className="btn-search"
                      type="button"
                      onClick={() => handleSearch()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <SearchResult
        query={query}
        genreid={genreid}
        media={media}
        language={language}
        year={year}
      />
    </div>
  );
};

export default Search;
