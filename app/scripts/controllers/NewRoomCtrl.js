(function() {
    function NewRoomCtrl($uibModalInstance, Room, items){


         this.ok = function () {

           Room.add(this.newRoom);
           $uibModalInstance.close();
         };

        this.cancel = function () {
           $uibModalInstance.dismiss('cancel');
         };


    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModalInstance', 'Room', NewRoomCtrl]);
})();
