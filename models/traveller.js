const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationList = this.journeys.map((journey) =>{
    return journey.startLocation;
  });
  return startLocationList;
};

Traveller.prototype.getJourneyEndLocations = function() {
  const endLocationList = this.journeys.map((journey) =>{
    return journey.endLocation;
  });
  return endLocationList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return foundJourneys
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const minDistanceList = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  console.log(`This is ${minDistanceList}`);
  return minDistanceList
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
