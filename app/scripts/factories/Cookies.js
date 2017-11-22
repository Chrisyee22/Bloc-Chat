(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

      $uibModal.open({
        templateUrl: '../../templates/login.html',
        controller:'CookiesCtrl',
        controllerAs: 'cookies'

      });
    }
  };

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
