var fs = require('fs');

var data = fs.readFileSync('./style.css', 'utf-8'); //Запись в строку из файла




//Заменяем подключение файла стилей, на простенький строковый литерал, содержащий css классы
var style = '.store {width: 100%;margin-bottom: 20px;}.div2 {float: left;display: inline-block;}.div3 {float: right;display: inline-block;padding: 5px;}.heading td {background: #E7EFEF;}.address, .product {border-collapse: collapse;}';








//Создание новой строки
function removeTheBrekets(data) {
     var entry = false; var number = 1;
	 var cleanData = new String();
for(var i=0; i<data.length; i++){
	if(data[i]=='{'){
		entry = true; 
		
	}else if(data[i] =='}'){
		entry= false;
	} 
	else if(entry==false && data[i] !='}'){
		cleanData +=data[i];
	}
  }
    return cleanData;
}



/*Функция для удаления лишних символов из строки имен классов(точки, запятые, лишние пробелы, обрезаю по бокам пробелы)*/
function delCharacters(data){
     data = data.replace(/\.|\,/gi, ""); //Удаляем точки и запятые
     data= data.replace(/\s{2}/gi, " "); //Удаляем лишние пробелы
	 data = data.trim();//Обрезаем лишние пробелы
	 return data;
}


//Функция обфускатор
function obfuscation(word){	
	var symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	var num = 6;
	var newnameclass= '';
	var temp=0;
	for(var i=0; i<word.length; i++){	
	   if(word[i]==" "){
			newnameclass+=" ";
			continue;			
	   }
	     
	   
	   else if(i==0 && symbol.indexOf(word[i]) <52) 
	   {
		    temp=symbol.indexOf(word[i])+num;
	       newnameclass+=symbol[temp];
	     }  
	   else{  
	           temp = symbol.indexOf(word[i])+num;
				 if(symbol.indexOf(word[i]) > 63) {
					temp = symbol.indexOf(word[i])+num;
					newnameclass+=symbol[temp];
				} else 
				newnameclass+=symbol[temp];
	   } 
	}
	return newnameclass;//Возвращаю строку с новыми обфусцированными именами классов CSS	
}


function objNewCss(data, newData){
      var obj = {};
	  for(i=0;i<data.length; i++){
			obj.data[i] = this.newData[i];
	  }
	  return obj;

} 
//Создадим  Объект обфусцированных классов

function createArrayStyleName(data){
      var allstylecss = data.split(" ");
	  for(var i=0;i<allstylecss.length;i++){
	  }
	  return allstylecss;
}  


module.exports = function (data) {
	var cleanData = clearCharCode(data);
	var delCh =delCharacters(cleanData);
	var spaceDel = createArrayStyleName (delCh);
	var newname = obfuscation(spaceDel);
	objNewCss(spaceDel, newname);
    
    return objNewCss;
}; 




