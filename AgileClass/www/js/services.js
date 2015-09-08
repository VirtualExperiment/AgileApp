angular.module('starter.services', [])

.factory('Classes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var classes = [{
    id: 0,
    name: '第一章 绪论(1.1-1.2)',
    link: '../../1.html'
  }, {
    id: 1,
    name: '第一章绪论(1.3-1.4)',
    link: '../../2.html'
  }, {
    id: 2,
    name: '第二章 可行性研究',
    link: '../../3.html'
  }];

  return {
    all: function() {
      return classes;
    },
    remove: function(onlineclass) {
      classes.splice(classes.indexOf(onlineclass), 1);
    },
    get: function(onlineclass) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].id === parseInt(onlineclass)) {
          return classes[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});