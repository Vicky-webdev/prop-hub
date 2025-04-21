const IndependentHousePage = () => {
    const dummyPlots = [
      {
        id: 1,
        title: "DTCP Approved Plot in Tambaram",
        location: "Tambaram, Chennai",
        price: "₹12.5 Lakhs",
        area: "1200 sq.ft",
      },
      {
        id: 2,
        title: "Corner Plot in Avadi",
        location: "Avadi, Chennai",
        price: "₹10 Lakhs",
        area: "1000 sq.ft",
      },
    ];
  
    return (
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Plots & Lands for Sale</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPlots.map((plot) => (
            <div
              key={plot.id}
              className="border p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{plot.title}</h2>
              <p className="text-gray-600">Location: {plot.location}</p>
              <p className="text-gray-600">Area: {plot.area}</p>
              <p className="text-green-600 font-bold mt-2">{plot.price}</p>
            </div>
          ))}
        </div>
      </main>
    );
  };
  
  export default IndependentHousePage;