import {gql} from "apollo-server-express";

const typeDefs = gql`
  type Song {
    id: ID!
    title: String!
    artist: String!
    duration: Int!
    genre: String!
    release_date: String!
    audio_file: String!
  }

  type Query {
    getSongs: [Song!]!
    getSong(id: ID!): Song
  }

  input SongInput {
    title: String!
    artist: String!
    duration: Int!
    genre: String!
    release_date: String!
    audio_file: String!
  }

  type Mutation {
    addSong(songInput: SongInput!) : ID!
    removeSong(id : ID!) : Song 
  }
`;

export default typeDefs;