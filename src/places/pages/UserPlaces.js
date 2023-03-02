import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACE = [
  {
    id: "p1",
    title: "Emprie state building",
    description: "one teh most famos sky scrapers in the world!",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=s680-w680-h510",
    address: "20 W 34th St., New York, NY 10001, Hoa Kỳ",
    location: {
      lat: "40.7484445",
      lng: "-73.9878531,17",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emprie state building",
    description: "one teh most famos sky scrapers in the world!",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=s680-w680-h510",
    address: "20 W 34th St., New York, NY 10001, Hoa Kỳ",
    location: {
      lat: "40.7484445",
      lng: "-73.9878531,17",
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACE.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserPlaces;
