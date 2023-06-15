import mongoose from "mongoose";
import "dotenv/config";
import {
  GetSongInput,
  RemoveSongInput,
  IgnoredParent,
  SongInput,
} from "../types";
import SongSchema from "../models/Song";

mongoose.connect(`${process.env.MONGO_URI!}/musics`).then(function () {
  console.log("Successfully connected to Song Database...");
});

const resolvers = {
  Query: {
    getSongs: async function (){
      return await SongSchema.find().catch((error: Error) => {
        return error;
      });
    },
    getSong: async function (_: IgnoredParent, { id }: GetSongInput) {
      return await SongSchema.findById(id).catch((error: Error) => {
        return error;
      });
    },
  },
  Mutation: {
    addSong: async function (_: IgnoredParent, { songInput }: SongInput) {
      return await SongSchema.create(songInput)
        .then((songInput) => songInput._id)
        .catch((error: Error) => `Something went wrong : ${error}`);
    },
    removeSong: async function (_: IgnoredParent, { id }: RemoveSongInput) {
      return await SongSchema.findByIdAndDelete(id).catch((error: Error) => {
        return error;
      });
    },
  },
};

export default resolvers;
