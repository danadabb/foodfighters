import React, { useState } from "react";
import { Input, AutoComplete } from "antd";

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

type Props = {
  onSearchTerm: Function;
};
const SearchBar = (props: Props): JSX.Element => {
  // const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [mockVal(searchText)]);
    props.onSearchTerm(searchText);
  };
  const onSelect = (data: string) => {
    console.log("onSelect", data);
    props.onSearchTerm(data);
  };

  return (
    <>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: "100%" }}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
    </>
  );
};

export default SearchBar;
