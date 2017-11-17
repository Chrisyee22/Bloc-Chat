(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      this.openModal=function(){

        $uibModal.open ({
          templateUrl: '../../templates/new-room-modal.html',
          controller:'NewRoomCtrl',
          controllerAs: 'modal'
        });
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
