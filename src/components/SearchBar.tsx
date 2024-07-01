import React, { useEffect } from "react";

import Colors from "../styles/Colors";
import Styled from "../styles/Styles";
import styled from "styled-components";

const SearchIcon = styled.div`
  position: relative;
  left: -30px;
  top: 6px;
  cursor: pointer;
`;

const selectText = () => {
  const input = document.getElementById("search-box") as HTMLInputElement;
  input.select();
};

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
};

const SearchBar = ({ value, onChange, handleSearch }: Props) => {
  const placeholder = "City or Zip Code";
  useEffect(() => selectText(), []);
  return (
    <>
      <input
        size={30}
        placeholder={placeholder}
        results={0}
        value={value}
        onChange={onChange}
        style={{
          borderRadius: "4px",
          border: `1px solid ${Colors.GRAY}`,
          fontSize: "14px",
          lineHeight: "19px",
          height: "34px",
          fontFamily: "Open Sans"
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            handleSearch();
            selectText();
          }
        }}
        id="search-box"
      />
      <SearchIcon
        onClick={() => {
          handleSearch();
          selectText();
        }}
      >
        <Styled.SearchIcon />
      </SearchIcon>
    </>
  );
};

export default SearchBar;
