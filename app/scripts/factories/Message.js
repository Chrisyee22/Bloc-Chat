(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.currentMessages = null;

    Message.getByRoomId = function(roomId) {
      Message.currentMessages = $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));

      return Message.currentMessages;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
