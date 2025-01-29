import React from "react";

function ScrapedPages() {
  const dummyPages = [
    { url: "https://example.com/home", status: "Scraped" },
    { url: "https://example.com/about", status: "Pending" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold">Scraped Pages</h2>
        {dummyPages.map((page, index) => (
          <div key={index} className="p-3 border-b">
            {page.url} - {page.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapedPages;
