(function() {
    function HomeCtrl(Rooms) {
      this.rooms = Rooms;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Rooms', HomeCtrl]);
})();
