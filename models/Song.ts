import { Schema ,model} from "mongoose";

// Song Schema Specifications
// id: (integer or UUID) The unique identifier for the music item.
// title: (string) The title of the music item.
// artist: (string) The artist or band name associated with the music item.
// duration: (integer) The duration of the music item in seconds.
// genre: (string) The genre of the music item.
// release_date: (string or date format) The release date of the music item.

interface Song {
  title: string;
  artist: string;
  duration: number;
  genre: string;
  release_date: string;
  audio_file : string
}

const Song = new Schema<Song>({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  release_date: { type: String, required: true },
  audio_file: { type: String, required: true },
});


export default model<Song>('Song' , Song);