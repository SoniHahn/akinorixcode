  ///////remove border
 
  $('#form').submit(function(event){
        event.preventDefault();
    var proceed = false;

    $('.characters').each(function(i, character){
      console.log(character,'i')
      if ($(character).is(':checked')){
        console.log('proceed true')
        proceed = true
      }
    })

    console.log('proceed',proceed)

    if (proceed === false) {
      alert('Please select at least one character!')
      return
    }

    var characterSelect = document.getElementsByName('characters');
    var colorMode= document.getElementsByName('charactersColor');
    console.log('characters select: ', characterSelect, 'colorMode: ', colorMode)

    submitResult()
    //setInterval(submitResult,1000)


function submitResult() {

  $('#canvas2').html('')
  $('#header').show();

  var functions = {

      Aki1black:function(){

        var size = 75;

        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 180 / numPoints;
        var radius = 15;
        var noiseStep = 0;

        var noiseCircle = r.polygon(x+size/2+9, y+size/2-5)
        .stroke(0)
        .fill(false)
        .strokeWidth(2).rotate(-90, x+size/2+9, y+size/2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

          noiseCircle.lineTo(j, k);
          noiseStep += 0.1;
        }

        var noiseCircle1 = r.polygon(x+size/2, y+size/2)
        .stroke(0)
        .fill(0)
        .strokeWidth(2).rotate(90, x+size/2, y+size/2);


        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.8;

          noiseCircle1.lineTo(j, k);
          noiseStep += 0.1;
        }

        var path = r.path(x+45,y+34)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(7,0)
        .lineTo(7,Rune.random(2,3))
        .closePath()
        .moveTo(4,Rune.random(-1,-3))
        .lineTo(4,Rune.random(5,7))
        .closePath()
        .moveTo(0,Rune.random(7,9))
        .curveTo(0, 10, 3, 10, 6, 8)
        .stroke(0)
        .strokeWidth(2);

        var path = r.path(x+15,y+51)
        .lineTo(0,Rune.random(8,10))
        .closePath()
        .moveTo(9,2)
        .lineTo(9,Rune.random(8,12))
        .closePath()
        .stroke(0)
        .strokeWidth(2);

        r.ellipse(x+15,y+Rune.random(59,61),Rune.random(5,7),Rune.random(4,5)).fill(0);
        r.ellipse(x+24,y+Rune.random(60,62),Rune.random(5,7),Rune.random(4,5)).fill(0);


      },

      Aki1color:function(){

        var size = 75;
        var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];

        var rectColor = myColors[Math.floor(Math.random() * myColors.length)];

        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 180 / numPoints;
        var radius = 15;
        var noiseStep = 0;

        var noiseCircle = r.polygon(x+size/2+9, y+size/2-5)
        .stroke(0)
        .fill(false)
        .strokeWidth(2).rotate(-90, x+size/2+9, y+size/2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

          noiseCircle.lineTo(j, k);
          noiseStep += 0.1;
        }

        var noiseCircle1 = r.polygon(x+size/2, y+size/2)
        .stroke(false)
        .fill(rectColor)
        .rotate(90, x+size/2, y+size/2);


        
        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.8;

          noiseCircle1.lineTo(j, k);
          noiseStep += 0.1;
        }

        var path = r.path(x+45,y+34)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(7,0)
        .lineTo(7,Rune.random(2,3))
        .closePath()
        .moveTo(4,Rune.random(-1,-3))
        .lineTo(4,Rune.random(5,7))
        .closePath()
        .moveTo(0,Rune.random(7,9))
        .curveTo(0, 10, 3, 10, 6, 8)
        .stroke(0)
        .strokeWidth(2);

        var path = r.path(x+15,y+51)
        .lineTo(0,Rune.random(8,10))
        .closePath()
        .moveTo(9,2)
        .lineTo(9,Rune.random(8,12))
        .closePath()
        .stroke(0)
        .strokeWidth(2);

        r.ellipse(x+15,y+Rune.random(59,61),Rune.random(5,7),Rune.random(4,5)).fill(0);
        r.ellipse(x+24,y+Rune.random(60,62),Rune.random(5,7),Rune.random(4,5)).fill(0);



      },

      Aki2black:function(){

          var size = 75;

          var noise = new Rune.Noise().noiseDetail(0.5);
          var numPoints = 60;
          var pointDegree = 180 / numPoints;
          var radius = 15;
          var noiseStep = 0;

          var noiseCircle = r.polygon(x+size/2, y+size/2)
          .stroke(0)
          .fill(false)
          .strokeWidth(2);

          for(var i = 0; i < numPoints; i++) {

            var noiseRadius = (noise.get(noiseStep) * 3) + radius;
            var j = Math.cos(Rune.radians(pointDegree * i* -1)) * noiseRadius;
            var k = Math.sin(Rune.radians(pointDegree * i* -1)) * noiseRadius*1.3;

            noiseCircle.lineTo(j, k);
            noiseStep += 0.1;
          }

          ///////////////rectangle body shape
          var xStep = 15;

          var noise = new Rune.Noise();

          var noisePath = r.path(x+22,y+37)
          .lineTo(0,26)
          .lineTo(29,25)
          .lineTo(31,1)
          .closePath()
          .stroke(0)
          .fill(0)
          .strokeWidth(2);


          var path = r.path(x+34,y+24)
          .lineTo(0,Rune.random(2,3))
          .closePath()
          .moveTo(10,0)
          .lineTo(10,Rune.random(2,3))
          .closePath()
          .moveTo(5,Rune.random(-1,-2))
          .lineTo(5,Rune.random(5,7))
          .closePath()
          .moveTo(2,Rune.random(8,9))
          .curveTo(2, 10, 6, 10, 9,8)
          .stroke(0)
          .strokeWidth(2);

          ///////////////legs

          var path = r.path(x+30,y+64)
          .lineTo(Rune.random(1,2),Rune.random(8,10))
          .closePath()
          .moveTo(9,-1)
          .lineTo(Rune.random(10,11),Rune.random(8,10))
          .closePath()
          .stroke(0)
          .strokeWidth(2);

          r.ellipse(x+32,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);
          r.ellipse(x+41,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);


          ///////////////arms
          var path = r.path(x+52,y+45)
          .lineTo(Rune.random(6,8),Rune.random(0,1))
          .closePath()
          .moveTo(0,6)
          .lineTo(Rune.random(6,8),Rune.random(7,8))
          .closePath()
          .stroke(0)
          .strokeWidth(2);

          r.ellipse(x+60,y+Rune.random(45,47),Rune.random(4,6),Rune.random(4,6)).fill(0);
          r.ellipse(x+60,y+Rune.random(52,54),Rune.random(4,6),Rune.random(4,6)).fill(0);

      },

     Aki2color:function(){

        var size = 75;
        var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];

        var rectColor = myColors[Math.floor(Math.random() * myColors.length)];
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 180 / numPoints;
        var radius = 15;
        var noiseStep = 0;

        var noiseCircle = r.polygon(x+size/2, y+size/2)
        .stroke(0)
        .fill(false)
        .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 3) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i* -1)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i* -1)) * noiseRadius*1.3;

          noiseCircle.lineTo(j, k);
          noiseStep += 0.1;
        }

        ///////////////rectangle body shape
        var xStep = 15;

        var noise = new Rune.Noise();

        var noisePath = r.path(x+22,y+37)
        .lineTo(0,26)
        .lineTo(29,25)
        .lineTo(31,1)
        .closePath()
        .stroke(false)
        .fill(rectColor);


        var path = r.path(x+34,y+24)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(10,0)
        .lineTo(10,Rune.random(2,3))
        .closePath()
        .moveTo(5,Rune.random(-1,-2))
        .lineTo(5,Rune.random(5,7))
        .closePath()
        .moveTo(2,Rune.random(8,9))
        .curveTo(2, 10, 6, 10, 9,8)
        .stroke(0)
        .strokeWidth(2);

        ///////////////legs

        var path = r.path(x+30,y+64)
        .lineTo(Rune.random(1,2),Rune.random(8,10))
        .closePath()
        .moveTo(9,-1)
        .lineTo(Rune.random(10,11),Rune.random(8,10))
        .closePath()
        .stroke(0)
        .strokeWidth(2);

        r.ellipse(x+32,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);
        r.ellipse(x+41,y+Rune.random(70,71),Rune.random(6,7),Rune.random(3,4)).fill(0);


        ///////////////arms
        var path = r.path(x+52,y+45)
        .lineTo(Rune.random(6,8),Rune.random(0,1))
        .closePath()
        .moveTo(0,6)
        .lineTo(Rune.random(6,8),Rune.random(7,8))
        .closePath()
        .stroke(0)
        .strokeWidth(2);

        r.ellipse(x+60,y+Rune.random(45,47),Rune.random(4,6),Rune.random(4,6)).fill(0);
        r.ellipse(x+60,y+Rune.random(52,54),Rune.random(4,6),Rune.random(4,6)).fill(0);


      },

      Aki3black:function(){


        var size = 75;
       
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 180 / numPoints;
        var radius = 18;
        var noiseStep = 0;


      ////////////top 

      var noiseCircle1 = r.polygon(x+size/2, y+size/2+1)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

        noiseCircle1.lineTo(j, k);
        noiseStep += 0.1;
      }



      ////////////bottom

      var noiseCircle = r.polygon(x+size/2, y+size/2)
      .stroke(0)
      .fill(0)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius;
        var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.2;

        noiseCircle.lineTo(j, k);
        noiseStep += 0.1;
      }


      ////////////face 

      var radius2 = 7;
      var pointDegree2 = 360 / numPoints;

      var noiseCircle2 = r.polygon(x+37, y+52)
      .stroke(0)
      .fill(255)
      .strokeWidth(1);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius;

        noiseCircle2.lineTo(j, k);
        noiseStep += 0.07;
      }



      var path = r.path(x+34,y+49)
      .lineTo(0,Rune.random(2,3))
      .closePath()
      .moveTo(7,0)
      .lineTo(7,Rune.random(2,3))
      .closePath()
      .moveTo(3,Rune.random(-2,0))
      .lineTo(3,Rune.random(4,6))
      .closePath()
      .moveTo(0,Rune.random(5,7))
      .curveTo(0, 8, 3, 8, 5, 7)
      .stroke(0)
      .strokeWidth(2);


      },

      Aki3color:function(){


        var size = 75;
        var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];
        var rectColor = myColors[Math.floor(Math.random() * myColors.length)];
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 180 / numPoints;
        var radius = 18;
        var noiseStep = 0;


        ////////////top 

        var noiseCircle1 = r.polygon(x+size/2, y+size/2+1)
        .stroke(0)
        .fill(255)
        .strokeWidth(2);


        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
          var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

          noiseCircle1.lineTo(j, k);
          noiseStep += 0.1;
        }



        ////////////bottom

        var noiseCircle = r.polygon(x+size/2, y+size/2)
        .stroke(false)
        .fill(rectColor);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius*1.2;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius*1.2;

          noiseCircle.lineTo(j, k);
          noiseStep += 0.1;
        }


        ////////////face 

        var radius2 = 7;
        var pointDegree2 = 360 / numPoints;

        var noiseCircle2 = r.polygon(x+37, y+52)
        .stroke(0)
        .fill(255)
        .strokeWidth(1);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
          var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius;

          noiseCircle2.lineTo(j, k);
          noiseStep += 0.07;
        }



        var path = r.path(x+34,y+49)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(7,0)
        .lineTo(7,Rune.random(2,3))
        .closePath()
        .moveTo(3,Rune.random(-2,0))
        .lineTo(3,Rune.random(4,6))
        .closePath()
        .moveTo(0,Rune.random(5,7))
        .curveTo(0, 8, 3, 8, 5, 7)
        .stroke(0)
        .strokeWidth(2);

      },

    Aki4black:function(){


        var size = 75;
 
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 360 / numPoints;
        var radius = 19;
        var noiseStep = 0;


      ////////////large

      var noiseCircle1 = r.polygon(x+size/2, y+size/2)
      .stroke(false)
      .fill(0);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

        noiseCircle1.lineTo(j, k);
        noiseStep += 0.1;
      }


      ////////////face 

      var radius2 = 9;

      var noiseCircle2 = r.polygon(x+37, y+39)
      .stroke(false)
      .fill(255);
        // .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
          var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

          noiseCircle2.lineTo(j, k);
          noiseStep += 0.1;
        }



        var path = r.path(x+35,y+37)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(6,0)
        .lineTo(6,Rune.random(2,3))
        .closePath()
        .moveTo(3,Rune.random(-2,-1))
        .lineTo(3,Rune.random(5,7))
        .closePath()
        .moveTo(0,Rune.random(7,8))
        .curveTo(0, 10, 4, 10, 7, 8)
        .stroke(0)
        .strokeWidth(2);


      ////////////left leg 

      var radius2 = 7;

      var noiseCircle2 = r.polygon(x+24, y+59)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

        noiseCircle2.lineTo(j, k);
        noiseStep += 0.1;
      }

      ////////////right leg 
      var noiseCircle3 = r.polygon(x+48, y+59)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

        noiseCircle3.lineTo(j, k);
        noiseStep += 0.1;
      }


      },

      Aki4color:function(){


        var size = 75;
        var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];

        var rectColor = myColors[Math.floor(Math.random() * myColors.length)];
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var pointDegree = 360 / numPoints;
        var radius = 19;
        var noiseStep = 0;


      ////////////large

      var noiseCircle1 = r.polygon(x+size/2, y+size/2)
      .stroke(false)
      .fill(rectColor);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius*1.2;

        noiseCircle1.lineTo(j, k);
        noiseStep += 0.1;
      }


      ////////////face 

      var radius2 = 9;

      var noiseCircle2 = r.polygon(x+37, y+39)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
          var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

          noiseCircle2.lineTo(j, k);
          noiseStep += 0.1;
        }



        var path = r.path(x+35,y+37)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(6,0)
        .lineTo(6,Rune.random(2,3))
        .closePath()
        .moveTo(3,Rune.random(-2,-1))
        .lineTo(3,Rune.random(5,7))
        .closePath()
        .moveTo(0,Rune.random(7,8))
        .curveTo(0, 10, 4, 10, 7, 8)
        .stroke(0)
        .strokeWidth(2);


      ////////////left leg 

      var radius2 = 7;

      var noiseCircle2 = r.polygon(x+24, y+59)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

        noiseCircle2.lineTo(j, k);
        noiseStep += 0.1;
      }

      ////////////right leg 
      var noiseCircle3 = r.polygon(x+48, y+59)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree * i*-1)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree * i*-1)) * noiseRadius;

        noiseCircle3.lineTo(j, k);
        noiseStep += 0.1;
      }



      },

      Aki5black:function(){

        var size = 75;
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var noiseStep = 0;

      ////////////face 

      var radius = 7;
      var pointDegree = 360 / numPoints;

      var noiseCircle = r.polygon(x+37, y+21)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius;
        var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
        var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

        noiseCircle.lineTo(j, k);
        noiseStep += 0.05;
      }



      var path = r.path(x+34,y+16)
      .lineTo(0,Rune.random(2,3))
      .closePath()
      .moveTo(7,0)
      .lineTo(7,Rune.random(2,3))
      .closePath()
      .moveTo(3,Rune.random(-1,0))
      .lineTo(3,Rune.random(4,6))
      .closePath()
      .moveTo(0,Rune.random(5,7))
      .curveTo(0, 8, 3, 8, 5, 7)
      .stroke(0)
      .strokeWidth(2);


      ////////////top 
      var radius2 = 17;
      var pointDegree2 = 180 / numPoints;



      var noiseCircle2 = r.polygon(x+size/2, y+52)
      .stroke(0)
      .fill(255)
      .strokeWidth(2);


      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
        var j = Math.cos(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.4;

        noiseCircle2.lineTo(j, k);
        noiseStep += 0.05;
      }



      ////////////left leg

      var radius3 = 5;
      var noiseCircle3 = r.polygon(x+23, y+52)
      .stroke(0)
      .fill(0)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
        var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

        noiseCircle3.lineTo(j, k);
        noiseStep += 0.03;
      }


      ////////////right leg
      var noiseCircle4 = r.polygon(x+51, y+52)
      .stroke(0)
      .fill(0)
      .strokeWidth(2);

      for(var i = 0; i < numPoints; i++) {

        var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
        var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
        var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

        noiseCircle4.lineTo(j, k);
        noiseStep += 0.03;
      }



      },

      Aki5color:function(){

        var size = 75;
        var myColors = ["#9dd08d","#f5bb00","#69c0f4","#677588", "#dc2522", "#f1545f", "#26a878", "#26a878", "#0d5fad", "#984dc2", "#592c24", "#927330", "#f599b8"];
        var rectColor = myColors[Math.floor(Math.random() * myColors.length)];
        var noise = new Rune.Noise().noiseDetail(0.5);
        var numPoints = 60;
        var noiseStep = 0;

        ////////////face 

        var radius = 7;
        var pointDegree = 360 / numPoints;

        var noiseCircle = r.polygon(x+37, y+21)
        .stroke(0)
        .fill(255)
        .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius;
          var j = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
          var k = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

          noiseCircle.lineTo(j, k);
          noiseStep += 0.05;
        }



        var path = r.path(x+34,y+16)
        .lineTo(0,Rune.random(2,3))
        .closePath()
        .moveTo(7,0)
        .lineTo(7,Rune.random(2,3))
        .closePath()
        .moveTo(3,Rune.random(-1,0))
        .lineTo(3,Rune.random(4,6))
        .closePath()
        .moveTo(0,Rune.random(5,7))
        .curveTo(0, 8, 3, 8, 5, 7)
        .stroke(0)
        .strokeWidth(2);


        ////////////top 
        var radius2 = 17;
        var pointDegree2 = 180 / numPoints;



        var noiseCircle2 = r.polygon(x+size/2, y+52)
        .stroke(false)
        .fill(rectColor);


        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius2;
          var j = Math.cos(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.2;
          var k = Math.sin(Rune.radians(pointDegree2 * i*-1)) * noiseRadius*1.4;

          noiseCircle2.lineTo(j, k);
          noiseStep += 0.05;
        }



        ////////////left leg

        var radius3 = 5;
        var noiseCircle3 = r.polygon(x+23, y+52)
        .stroke(0)
        .fill(0)
        .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
          var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
          var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

          noiseCircle3.lineTo(j, k);
          noiseStep += 0.03;
        }


        ////////////right leg
        var noiseCircle4 = r.polygon(x+51, y+52)
        .stroke(0)
        .fill(0)
        .strokeWidth(2);

        for(var i = 0; i < numPoints; i++) {

          var noiseRadius = (noise.get(noiseStep) * 5) + radius3;
          var j = Math.cos(Rune.radians(pointDegree2 * i)) * noiseRadius*1.2;
          var k = Math.sin(Rune.radians(pointDegree2 * i)) * noiseRadius*1.4;

          noiseCircle4.lineTo(j, k);
          noiseStep += 0.03;
        }


      },

      black:function(){

        r.rect(0, 0, r.width, r.height).fill(215)

      },
      color:function(){

        r.rect(0, 0, r.width, r.height).fill(255);

      }

    }

      var r = new Rune({
        container: "#canvas2",
        width: window.innerWidth,
        height: window.innerHeight
});


if ($('#black').is(':checked')) {
  functions.black()

    for(var x = 0; x < r.width; x += 75)
  {
    for(var y = 0; y < r.height; y += 75)
    {

      var ran = Math.random()

      if (ran < .20 && $('#Aki1').is(':checked')) functions.Aki1black()
      else if (ran >= .20 && ran < .40 && $('#Aki2').is(':checked'))  functions.Aki2black()
      else if (ran >= .40 && ran < .60 && $('#Aki3').is(':checked'))  functions.Aki3black()
      else if (ran >= .60 && ran < .80 && $('#Aki4').is(':checked'))  functions.Aki4black()
      else if ($('#Aki5').is(':checked')) functions.Aki5black()


    }
  }

}

else  {

  functions.color()


    for(var x = 0; x < r.width; x += 75)
  {
    for(var y = 0; y < r.height; y += 75)
    {

      var ran = Math.random()

      if (ran < .20 && $('#Aki1').is(':checked')) functions.Aki1color()
      else if (ran >= .20 && ran < .40 && $('#Aki2').is(':checked'))  functions.Aki2color()
      else if (ran >= .40 && ran < .60 && $('#Aki3').is(':checked'))  functions.Aki3color()
      else if (ran >= .60 && ran < .80 && $('#Aki4').is(':checked'))  functions.Aki4color()
      else if ($('#Aki5').is(':checked')) functions.Aki5color()


    }
  }
}



r.draw()
      var rects = document.getElementsByTagName('rect');

      for (var i = 0; i < rects.length; i ++) {
        rects[i].setAttribute('stroke','rgb(255,255,255)');
      };

$('#mycontainer').hide();
 //drawCanvas();
$('#canvas2').show();

setTimeout(function(){


  $(btnBack).show();
  //$(btnBack).addClass('animated zoomIn');
  $(btnRandom).show();
  //$(btnRandom).addClass('animated zoomIn');

  var btnDl = document.createElement('button');
  $(btnDl).addClass('btn2 btnDl')
  var t = document.createTextNode('Download .svg');
    if (!window.addDl)document.getElementById('header').appendChild(btnDl);

  window.addDl = true
  //$(btnDl).addClass('animated zoomIn');
  $(btnDl).css({'z-index':5000,'top':'5px','right':'140px', 'zoom':1.1, position:'absolute'})

  btnDl.appendChild(t);
  $(btnDl).click(function(){
    var svgData = $('svg')[1].outerHTML;
    var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.innerHTML = 'DOWNLOAD'
    downloadLink.download = "pattern.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click()
    document.body.removeChild(downloadLink);

  })




  //downloadLink.click();
  //document.body.removeChild(downloadLink);


},0)



};

var btnBack = document.createElement('button');
    $(btnBack).addClass('btn2 btnBack')
      var t = document.createTextNode('< Go back');       // Create a text node
      btnBack.appendChild(t);
      $(btnBack).css({'z-index':5000,'top':'5px','left':'10px', 'zoom':1.1, position:'absolute'})

      document.getElementById('header').appendChild(btnBack);

      $(btnBack).click(function(){

        window.location.reload();

      });

      $(btnBack).hide()

var btnRandom = document.createElement('button');
$(btnRandom).addClass('btn2 btnRandom')
      var rd = document.createTextNode('Randomize!');       // Create a text node
      btnRandom.appendChild(rd);
      document.getElementById('header').appendChild(btnRandom);
      $(btnRandom).hide()
            $(btnRandom).css({'z-index':5000,'top':'5px','right':'10px', 'zoom':1.1, position:'absolute'})
      $(btnRandom).click(function(){

        document.getElementById('canvas2').innerHTML = '';
        submitResult();


       // document.getElementById("canvas2").contentWindow.location.reload(true);
     });

      


  });


