(function() {

    var header = document.querySelector("#header");

    new Headroom(header, {
        tolerance: {
          down : 15,
          up : 10
        },
        offset : 75
    }).init();

})();
