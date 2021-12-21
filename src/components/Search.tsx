import React, { useState } from "react";
import { Input, AutoComplete } from "antd";

const mockVal = (str: string, repeat: number = 1) => ({
  value: str.repeat(repeat),
});

const SearchBar: React.FC = () => {
  // const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };
  return (
    <>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{width: '100%'}}
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
