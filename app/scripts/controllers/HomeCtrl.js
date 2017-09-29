(function() {
    function HomeCtrl(Room) {
        var home = this;
        home.room = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();