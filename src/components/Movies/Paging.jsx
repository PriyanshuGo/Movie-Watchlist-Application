function Paging({ page, setMovie }) {
  return (
    <div className="flex justify-center space-x-6">
      <button
        onClick={() =>
          setMovie((prev) => ({
            ...prev,
            page: Math.max(prev.page - 1, 1),
          }))
        }
        className="cursor-pointer border border-white p-2 my-10"
      >
        Previous
      </button>
      <button
        onClick={() => {
          setMovie((prev) => ({ ...prev, page: prev.page + 1 }));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer border border-white p-2 my-10"
      >
        Next
      </button>
    </div>
  );
}

export default Paging;
