import React from "react";

export default function Select({ options }) {
    return (
        <select className="select-component">
            {options?.map((option) => (
                <option>{option}</option>
            ))}
        </select>
    );
}
