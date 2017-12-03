(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.messages = null;
      this.currentUser = $cookies.get('blocChatCurrentUser');

      this.newMessage = {
          content: null,
          roomId: null,
          sentAt: null,
          username: null
        };

      this.openModal=function(){


        $uibModal.open ({
          templateUrl: '../../templates/new-room-modal.html',
          controller:'NewRoomCtrl',
          controllerAs: 'modal'
        });


      };
      this.setCurrentRoom = function (room) {
           this.currentRoom = room;
           this.messages = Message.getByRoomId(room.$id);

       };

      this.sendMessage = function(newMessage){
         this.newMessage.roomId = this.currentRoom.$id;
         this.newMessage.username = this.currentUser;
         this.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
         Message.send(this.newMessage);
         this.newMessage = " ";

      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$uibModal', '$cookies', HomeCtrl]);
})();
