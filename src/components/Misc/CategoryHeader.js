import React from "react";
import Select from "./Select";

export default function CategoryHeader({ categoryName, resultQty, options }) {
    return (
        <div>
            <div className="category-tint" />
            <div className={`category-image-header category-image-header-${categoryName.toLowerCase()}`} />
            <div className="category-header">
                <h1>Shop {categoryName}</h1>
                <div class="squiggle-holder">
                    <div class="ellipse"></div>
                    <div class="ellipse ellipse2"></div>
                </div>
            </div>
            <div className="category-misc">
                <span>{resultQty} result(s)</span>
                <Select options={options} />
            </div>
        </div>
    );
}
