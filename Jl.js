function tercs() {
var mensaje="Sin igualdad"
var nombre= document.getElementById("nomb").value;
var x1=Math.trunc(Math.random()*10) + 1;
var x2=Math.trunc(Math.random()*10) + 1;
var x3=Math.trunc(Math.random()*10) + 1;
  switch (x1) {
      case 1:
      document.getElementById("box1").innerHTML="<img src='J1.png'>";
      break;
      case 2:
      document.getElementById("box1").innerHTML="<img src='Dia.jpg'>";
      break;
      case 3:
      document.getElementById("box1").innerHTML="<img src='Lau.jpg'>";
      break;
      case 4:
      document.getElementById("box1").innerHTML="<img src='Is.jpg'>";
      break;
      case 5:
      document.getElementById("box1").innerHTML="<img src='Ga.png'>";
      break;
      case 6:
      document.getElementById("box1").innerHTML="<img src='Mon.png'>";
      break;
      case 7:
      document.getElementById("box1").innerHTML="<img src='San.png'>";
      break;
      case 8:
      document.getElementById("box1").innerHTML="<img src='Com.png'>";
      break;
      case 9:
      document.getElementById("box1").innerHTML="<img src='Cre.png'>";
      break;
      case 10:
      document.getElementById("box1").innerHTML="<img src='Comu.png'>";
      break;               
  }
        switch (x2) {
      case 1:
      document.getElementById("box2").innerHTML="<img src='J1.png'>";
      break;
      case 2:
      document.getElementById("box2").innerHTML="<img src='Dia.png'>";
      break;
      case 3:
      document.getElementById("box2").innerHTML="<img src='Lau.png'>";
      break;
      case 4:
      document.getElementById("box2").innerHTML="<img src='Is.png'>";
      break;
      case 5:
      document.getElementById("box2").innerHTML="<img src='Ga.png'>";
      break;
      case 6:
      document.getElementById("box2").innerHTML="<img src='Mon.png'>";
      break;
      case 7:
      document.getElementById("box2").innerHTML="<img src='San.png'>";
      break;
      case 8:
      document.getElementById("box2").innerHTML="<img src='Com.png'>";
      break;
      case 9:
      document.getElementById("box2").innerHTML="<img src='Cre.png'>";
      break;
      case 10:
      document.getElementById("box2").innerHTML="<img src='Comu.png'>";
      break;               
  }  
          switch (x3) {
      case 1:
      document.getElementById("box3").innerHTML="<img src='J1.png'>";
      break;
      case 2:
      document.getElementById("box3").innerHTML="<img src='Dia.png'>";
      break;
      case 3:
      document.getElementById("box3").innerHTML="<img src='Lau.png'>";
      break;
      case 4:
      document.getElementById("box3").innerHTML="<img src='Is.jpg'>";
      break;
      case 5:
      document.getElementById("box3").innerHTML="<img src='Ga.png'>";
      break;
      case 6:
      document.getElementById("box3").innerHTML="<img src='Mon.png'>";
      break;
      case 7:
      document.getElementById("box3").innerHTML="<img src='San.png'>";
      break;
      case 8:
      document.getElementById("box3").innerHTML="<img src='Com.png'>";
      break;
      case 9:
      document.getElementById("box3").innerHTML="<img src='Cre.png'>";
      break;
      case 10:
      document.getElementById("box3").innerHTML="<img src='Comu.png'>";
      break;               
  }
 if ((x1==x2)&&(x1==x3))
    mensaje="Tercias";
 else if ((x1==x2)||(x2==x3))
    mensaje="Pares";
 else 
    mensaje="Sin igualdad"
document.getElementById("Sal01").innerHTML="Hola "+nombre+" Tu resultado es:";
document.getElementById("resul").innerHTML=mensaje;
}     