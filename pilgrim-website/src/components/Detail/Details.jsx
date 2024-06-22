import { useParams } from "react-router-dom";
import data from "../Data";

function Detail() {
  let { name, id } = useParams();
  let searchData = data.find((dat) => dat.id == id && dat.name == name);
  console.log(searchData);

  return (
    <div>
      <header
        className="bg-fixed bg-no-repeat bg-cover h-96 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${searchData.imageUrl})` }}
      >
        <div className="bg-black bg-opacity-50 p-5 rounded-md">
          <h1 className="text-4xl font-bold">{searchData.name}</h1>
          <p className="text-xl">{searchData.shortDescription}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          <div className="flex justify-center">
            <img
              src={searchData.imageUrl}
              alt={searchData.name}
              className="w-full h-72 md:w-3/4 rounded-md"
            />
          </div>
          <div>
            <p className="mb-5">{searchData.longDescription}</p>
            <ul className="mb-5 space-y-2">
              <li>
                <strong>Religion:</strong> {searchData.religion}
              </li>
              <li>
                <strong>Language:</strong> {searchData.language}
              </li>
              <li>
                <strong>Dress Code:</strong> {searchData.dressCode}
              </li>
              <li>
                <a
                  href={searchData.locationLink}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See the Location of place
                </a>
              </li>
            </ul>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Nearby Places</h2>
              <ul className="list-disc list-inside">
                {searchData.nearbyPlaces.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Festivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {searchData.festivals.map(({ name, date }) => (
              <div
                key={name}
                className="p-5 border rounded-md shadow-sm bg-white"
              >
                <h3 className="text-xl font-semibold">{name}</h3>
                <p>{date}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Blogs</h2>
          <ul className="space-y-2">
            {searchData.blogs.map((blog, index) => (
              <li key={index}>
                <a
                  href={blog}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Blog {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {searchData.photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-md shadow-sm">
                <img
                  src={photo}
                  alt={searchData.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Detail;
