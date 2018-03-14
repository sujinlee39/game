(() => {

  let health = document.getElementById("health")
  health.value -= 10; //Or whatever you want to do with it.

  var health=100;

  ctx.fillStyle="#FF0000";

  ctx.fillRect(0,0,(health/100)*140,25);

  //Whenever you lose health

  health-=1;

})();
