interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  genre: string;
  release_date: string;
  audio_file: string;
}
type RequestedSong = Song | null;
type IgnoredParent = any;
type SongInput = {songInput : Omit<Song, "id">};
type RemoveSongInput = {id : string};
type GetSongInput = RemoveSongInput;

export type { Song, GetSongInput , RequestedSong, RemoveSongInput, IgnoredParent, SongInput };