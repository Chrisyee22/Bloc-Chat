(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
      Message.currentMessages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      return Message.currentMessages
    };

    Message.send = function(newMessage) {
        
        messages.$add(newMessage);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
