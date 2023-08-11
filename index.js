// Check Balance Brackets
var str = "[{}()]";
var stack = [];
var isBreak = false;

for(var i=0; i<str.length; i++){
    if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
        stack.push(str[i]);
        continue;
    }
    // 
    if(stack.length == 0){
        console.log("Not Balanced")
        isBreak = true;
        break;
    }

    var x;
    if(str[i] == ")"){
        x = stack.pop();
        if(x == "{" || x == "["){
            console.log("not balanced")
            isBreak = true;
            break;
        }
    }

    if(str[i] == "}"){
        x = stack.pop();
        if(x == "(" || x == "["){
            console.log("not balanced")
            isBreak = true;
            break;
        }
    }

    if(str[i] == "]"){
        x = stack.pop();
        if(x == "(" || x == "{"){
            console.log("not balanced")
            isBreak = true;
            break;
        }
    }
}

if(!isBreak){
    if(stack.length == 0){
        console.log("balanced");
    }else{
        console.log("not balanced");
    }
}