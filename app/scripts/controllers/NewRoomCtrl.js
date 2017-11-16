(function() {
    function NewRoomCtrl($uibModalInstance, Room, items){

      var RoomObject = Room;

         this.ok = function (Room) {
           RoomObject.add(Room);
           $uibModalInstance.close(Room);
         };

        this.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };


    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModalInstance', 'Room', NewRoomCtrl]);
})();
