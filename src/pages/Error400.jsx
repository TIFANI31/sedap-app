export default function Error400() {
    return (
      <div className="p-10 text-center">
        <h1 className="text-5xl font-bold text-red-500">400</h1>
        <p className="text-xl mt-4">Bad Request</p>
        <p className="text-gray-500 mt-2">The request cannot be fulfilled due to bad syntax.</p>
      </div>
    );
  }
  