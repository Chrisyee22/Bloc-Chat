(function() {
    function HomeCtrl() {
      this.rooms = "Bloc Chat";
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();
