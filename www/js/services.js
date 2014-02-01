angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})


// fake favor data 
.factory('FavorService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var favors = [
    { id: 0, name: 'Sergey Bin', role: 'gave', description: 'Picked him up from airport in heavy snowstorm up in Chicago.', date: '12/4/2013' },
    { id: 1, name: 'Page Larry', role: 'received', description: 'Sent me a wonderful sweater on Christmas.', date: '1/1/2014' },
    { id: 2, name: 'Barry Obama', role: 'gave', description: 'Found him his campaign manager who got him his social networking presence.', date: '1/3/2014'  },
    { id: 3, name: 'Mike Zuckerbug', role: 'gave', description: 'That was my idea.', date: '1/15/2014'  }
  ];

  return {
    all: function() {
      return favors;
    },
    get: function(favorId) {
      // Simple index lookup
      return favors[favorId];
    }
  }
});