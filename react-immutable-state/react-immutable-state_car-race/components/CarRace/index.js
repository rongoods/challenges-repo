import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;

export default function CarRace() {
  const [cars, setCars] = useState(initialCars);

  function moveCar(clickedCar) {
    // const coveredDistance = getRandomDistance();
    // console.log("clickedCar", clickedCar);
    // console.log("coveredDistance", coveredDistance);

    setCars((prevDistances) => {
        return prevDistances.map((prevDistance) => {
            if (prevDistance.lastDistance !== prevDistance){
                return prevDistance;
            }
            return {
                ...prevDistance, 
                distances: prevDistance.
            }
        })
    })
  }

      // setSeasons((prevSeasons) => {
    //   return prevSeasons.map((prevSeason) => {
    //     if (prevSeason.number !== seasonNumber) {
    //       return prevSeason;
    //     }
    //     return {
    //       ...prevSeason,
    //       episodes: prevSeason.episodes.map((prevEpisode) => {
    //         if (prevEpisode.number !== episodeNumber) {
    //           return prevEpisode;
    //         }
    //         return {
    //           ...prevEpisode,
    //           hasSeen: !prevEpisode.hasSeen,
    //         };
    //       }),
    //     };
    //   });
    // });






  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
