(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;
      // Room.add("newRoom");
      $uibModal.open ({
        templateUrl: '../../templates/new-room-modal.html',
        controller:'NewRoomCtrl',
        controllerAs: 'modal'
      });
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
