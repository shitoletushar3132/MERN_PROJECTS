import data from "../Data";

function Gallery() {
  const photoData = data.flatMap(({ photos, name }) =>
    photos.map((photo) => ({ photo, name }))
  );

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-semibold mb-5">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {photoData.map(({ photo, name }, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md shadow-md shadow-black hover:scale-105 transition duration-1000"
          >
            <img
              src={photo}
              alt={`Gallery image from ${name}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300">
              <span className="flex justify-center items-center w-full h-full text-white opacity-0 hover:opacity-100">
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
