import React from "react";

export const SearchBox = ({ placeHolder, changeHandler }) => (
    <input
        type='search'
        placeholder={placeHolder}
        onChange = {changeHandler}
    />
)