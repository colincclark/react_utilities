import React, { useState, useCallback } from "react";

const ROW_HEIGHT = 50; // Fixed height per item
const VISIBLE_ROWS = 10; // Number of rows visible at once

// height of container
const CONTAINER_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS

const VirtualizedList = ({ items }: { items: string[] }) => {
    const [scrollOffset, setScrollOffset] = useState(0);
    // height of entire content
    const totalHeight = items.length * ROW_HEIGHT;

    // start index - scroll top / row height
    const startIndex = Math.floor(scrollOffset / ROW_HEIGHT);
    // end index - start index + rows, or items length
    const endIndex = Math.min(startIndex + VISIBLE_ROWS, items.length);

    const visibleItems = items.slice(startIndex, endIndex);

    const handleScroll = useCallback((event: React.UIEvent<HTMLUListElement>) => {
      setScrollOffset(event.currentTarget.scrollTop);
  }, []);

    return (
        <ul
            style={{
                height: CONTAINER_HEIGHT,
                overflowY: "auto",
                border: "1px solid #ccc",
                position: "relative",
                listStyle: "none",
                margin: 0,
                padding: 0,
                width: "100%"
            }}
            aria-label="Virtualized list"
            onScroll={handleScroll}
        >
            <li
                aria-hidden="true"
                style={{ height: totalHeight, visibility: "hidden", position: "relative" }}
            />
            {visibleItems.map((item, index) => (
                <li
                    key={startIndex + index}
                    style={{
                        position: "absolute",
                        top: (startIndex + index) * ROW_HEIGHT,
                        left: 0,
                        right: 0,
                        height: ROW_HEIGHT,
                        display: "flex",
                        alignItems: "center",
                        padding: "0 10px",
                        background: (startIndex + index) % 2 === 0 ? "#f9f9f9" : "#fff",
                        borderBottom: "1px solid #ddd"
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}; 

export default VirtualizedList
