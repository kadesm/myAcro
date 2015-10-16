angular.module('starter.services', [])

  .factory('Chats', function() {
  // Might use a resource here that returns a JSON array
    var chats=[{
      id: 0,
      name: 'Conditioning: High boat/ low boat',
      lastText: '',
      face: 'img/ionic.png',
      video:''
    }, {
      id: 1,
      name: 'Conditioning: Flash lights and wrist push ups',
      lastText: '',
      face: 'img/ionic.png',
      video:''
    }, {
      id: 2,
      name: 'Front Plank',
      lastText: '',
      face: 'img/frontPlank.png',
      video: 'img/frontPlankVideo.mp4'
    },{
      id:3,
      name: 'Throne',
      lastText:'',
      face:'img/throne.png',
      video:'img/throneVideo.mp4'
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

