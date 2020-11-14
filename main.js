var yulu_all=[
'聪明的老师生气了，想怎么样怎么样',
'我就是要你们每天早上起来到实验室去吃点铁钉'
];
var rand_yulu=yulu_all[Math.floor(Math.random()*yulu_all.length)];
window.onload=function(){
  console.log(rand_yulu);
};
