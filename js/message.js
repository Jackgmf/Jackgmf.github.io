var code = "";//随机验证字符
       var canvas = document.getElementById('canvas');
       var content = canvas.getContext("2d");
       // 1.生成一个随机数
       // 50-120
       function randomNum(min,max){
         return	Math.floor(Math.random()*(max-min)+min);
       }

       //2.生成一个随机颜色
       function randomColor(min,max){
       	var r = randomNum(min,max);
       	var g = randomNum(min,max);
       	var b = randomNum(min,max);
       	return "rgb("+r+","+g+","+b+")";
       }

       var num = randomNum(10,20);console.log(num);
       var color = randomColor(0,255);console.log(color);

       //3.生成随机文字
       
       function randomText(){
       	code = "";
       	var str = "abcdefghijklmnopqrstuvwxyz01234567897ABCDEFGHIJKLMNOPQRSTUVWSYZ";//字符库
       	for(var i=1;i<=4;i++){
         var char= str[randomNum(0,str.length-1)];
         console.log(char);
         code += char;

         //绘制文字 char
         //x位置 20-23 25-30 32-50 55-80
         //y位置 10-25
        
         var x = 20*i+randomNum(5,10);
         var y = randomNum(10,25);
         var z = randomNum(8,18);
         var deg = randomNum(-5,5);//随机变量
         content.font = "18px Arial";
         content.fillStyle=randomColor(0,255);
         content.rotate(deg*Math.PI/180)
         content.fillText(char, x, y);
         content.rotate(-deg*Math.PI/180)
        

       	}
       }
       
       //4.生成随机点
       function randomArc(){
       	
       	for(var i=0;i<=100;i++){
        content.beginPath();
        var x = randomNum(0,120);
       	var y = randomNum(0,30);
       	content.arc(x,y,1,0,2*Math.PI)
       	content.fillStyle=randomColor(0,255);
       	content.fill();
       	content.closePath();
         }
       }
       
       //5.生成随机线条
       function randomLine(){
       	for(var i=0;i<=5;i++){
       		content.beginPath();
       		content.strokeStyle=randomColor(0,255);
       		content.moveTo(randomNum(0,120),randomNum(0,30));
       		content.lineTo(randomNum(0,120),randomNum(0,30));
       		content.stroke();
       		content.closePath();
       	}
       }
       
       //6.绘制
       function draw(){
       	//随机的背景色
        content.fillStyle=randomColor(150,255);
        content.fillRect(0,0,120,30)
       	randomArc();
       	randomLine();
       	randomText();
       };

       draw();
       
       //1)验证码验证：不区分大小写
      var input_obj = document.getElementById('verify');
      input_obj.onblur=function(){
      	if(input_obj.value.toUpperCase()==code.toUpperCase()){
      		console.log("验证码正确");
      	}else{
      		console.log("验证码不正确");
      	}
      }