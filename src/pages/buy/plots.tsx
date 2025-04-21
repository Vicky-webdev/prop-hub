import { Link } from 'react-router-dom';
// Removed unused React import


const PlotsPage = () => {
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

      <div className="flex flex-wrap gap-4 justify-center my-6">
        <Link to="/buy/plots" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Plots</Link>
        <Link to="/buy/villas" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Villas</Link>
        <Link to="/buy/independent-homes" className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Independent Homes</Link>
        <Link to="/buy/flats" className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">Flats/Apartments</Link>
      </div>

      </main>
    );
  };
  
  export default PlotsPage;