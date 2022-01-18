import React from "react";

export default function StockDisplayer({ stock }) {
  return (
    <div className="my-auto">
      {stock < 20 && stock > 0 && (
        <div className="stock-display">
          <span style={{ color: "red", fontSize: "0.8em", opacity: "0.5" }}>
            Low stock
          </span>
        </div>
      )}
      {stock === 0 && (
        <div className="stock-display">
          <span style={{ color: "pink", fontSize: "0.8em", opacity: "0.5" }}>
            No stock
          </span>
        </div>
      )}
    </div>
  );
}
