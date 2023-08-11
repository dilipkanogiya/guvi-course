// ()[]  // [[]  // }}  // {{


var str = "[({)}]"
var stack = []
var isbreak = false

for (var i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
        stack.push(str[i])
        continue
    }

    if(stack.length==0){
        console.log("not balanced")
        isbreak=true
        break
    }
    var x;
    if (str[i] == ")") {
        x = stack.pop()
        if (x == "{" || x == "[") {
            console.log("not balanced")
            isbreak=true
            break
        }
    }
    if (str[i] == "}") {
        x = stack.pop()
        if (x == "(" || x == "[") {
            console.log("not balanced")
            isbreak=true
            break
        }
    }
    if (str[i] == "]") {
        x = stack.pop()
        if (x == "(" || x == "{") {
            console.log("not balanced")
            isbreak=true
            break
        }
    }
}

if(!isbreak){
    if(stack.length==0){
        console.log("balanced")
    }else{
        console.log("not balanced")
    }
}