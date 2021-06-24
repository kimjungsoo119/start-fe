const $btn = document.getElementById('btn');
const $result = document.getElementById('result');

var goGuGu = (line) => {
    $result.innerHTML = '';
    const text = document.getElementById('num').value;
    value = parseInt(text);
if( !!line === false || !Number.isInteger(line) || line < 1 || line > 9 ){
        alert("숫자를 입력해주세요");
        return;
    }  
    
    for(let i =1; i < 10; ++i){
          let tempVar = "";
            for( let j = 1; j < line+1; ++j){
                 tempVar += `${j}*${i}=${i*j} `;
          } 
            console.log(tempVar);
    }
}