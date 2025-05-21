import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";
import { Video } from "../components/Video";

export const MovieList = ({ apiPath, title, showVideo = false }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <>
      <main>
        {showVideo && (
          <div className="w-full">
            <Video />
          </div>
        )}

        <section className="max-w-7xl mx-auto py-7 px-4 ">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
