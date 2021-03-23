
var lastPressed = "=";
function clicks(elem){ 
    var char = document.getElementById(elem).value;
    var textbox = document.getElementById("txtbox");
                    
    if(char ==='='){
        if((lastPressed==='+'||lastPressed==='-'||lastPressed==='*'||lastPressed==='/')){
            textbox.value="ERR"
        }
        else{
            textbox.value=eval(textbox.value);
        }
        lastPressed='=';
    }
    else if(char === "AC"){
        textbox.value = "";
        lastPressed='=';
    }
    else{
        if(lastPressed==='='){
            textbox.value = "";
            lastPressed = 'a';
        }
        if((lastPressed==='+'||lastPressed==='-'||lastPressed==='*'||lastPressed==='a'||lastPressed==='=')&&(char==='+'||char==='-'||char==='*'||char==='/')){

        }
        else{
            lastPressed = char;
            textbox.value+=char;

        }

    }
}