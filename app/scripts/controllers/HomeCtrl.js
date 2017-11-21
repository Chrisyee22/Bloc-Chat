(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.messages = null;


      this.openModal=function(){


        $uibModal.open ({
          templateUrl: '../../templates/new-room-modal.html',
          controller:'NewRoomCtrl',
          controllerAs: 'modal'
        });


      };
      this.setCurrentRoom = function (room) {
           this.currentRoom = room;
           console.log(room)
           this.messages = Message.getByRoomId(room.$id);

       };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$uibModal', HomeCtrl]);
})();
