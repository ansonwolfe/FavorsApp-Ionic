angular.module('favorsapp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Barry Obama', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.', owes: 'Owes you 3 favors', received: 'Got 1 favor from you' },
    { id: 1, title: 'Sergey Bin', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.', owes: 'Owes you 3 favors', received: 'Got 3 favors from you' },
    { id: 2, title: 'Page Larry', description: 'Everyone likes turtles.', owes: 'Owes you 0 favors', received: 'Got 1 favor from you' },
    { id: 3, title: 'Mike Zuckerbug', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.', owes: 'Owes you 1 favor', received: 'Got 1 favor from you' }
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
    { id: 0, name: 'Sergey Bin', role: 'Gave', description: 'Picked him up from airport in heavy snowstorm up in Chicago.', date: '12/4/2013' },
    { id: 1, name: 'Page Larry', role: 'Received', description: 'Sent me a wonderful sweater on Christmas.', date: '1/1/2014' },
    { id: 2, name: 'Barry Obama', role: 'Gave', description: 'Found him his campaign manager who got him his social networking presence.', date: '1/3/2014'  },
    { id: 3, name: 'Mike Zuckerbug', role: 'Gave', description: 'That was my idea.', date: '1/15/2014'  },
    { id: 4, name: 'Sergey Bin', role: 'Received', description: 'Picked him up from airport at SFO.', date: '11/4/2013' },
    { id: 5, name: 'Page Larry', role: 'Received', description: 'Sent me a tree on Christmas.', date: '1/2/2014' },
    { id: 6, name: 'Barry Obama', role: 'Gave', description: 'Found him his campaign manager who got him his social networking presence.', date: '1/3/2014'  },
    { id: 7, name: 'Mike Zuckerbug', role: 'Gave', description: 'That was my idea.', date: '2/15/2014'  },
    { id: 8, name: 'Mike Zuckerbug', role: 'Received', description: 'Made me a new FB page.', date: '11/15/2012'  },
  ];

  return {
    all: function() {
      return favors;
    },
    get: function(favorId) {
      // Simple index lookup
      return favors[favorId];
    },
    count: function(){
      return favors.length;
    }
  }
});