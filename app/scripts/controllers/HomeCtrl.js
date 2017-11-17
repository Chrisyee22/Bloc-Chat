(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.openModal=function(){

        $uibModal.open ({
          templateUrl: '../../templates/new-room-modal.html',
          controller:'NewRoomCtrl',
          controllerAs: 'modal'
        });


        this.Message = Message;
        this.newMessage = Message.currentMessages


      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message', '$uibModal', HomeCtrl]);
})();
