import Link from "next/link";

interface SongPageLayoutProps {
  data: string;
}

export const SongPageLayout = ({ data }: SongPageLayoutProps) => {
  // to come from data.songs
  const songs = [
    { id: "song-1", title: "First Song" },
    { id: "song-2", title: "Second Song" },
  ];

  return (
    <div>
      <h1>Songs Grid</h1>
      <div className="grid">
        {songs.map((song) => (
          <Link key={song.id} href={`/songs/${song.id}`}>
            <div className="card">
              <h2>{song.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
