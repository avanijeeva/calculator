function displayValue(num){
    let txt_box=document.querySelector("#result")
    txt_box.value+=num
}
// let displayValue=(num)=>result.value+=num

function clearBox(){
    document.querySelector('#result').value="";
}
// let clearBox=()=>result.value=""
function evaluateExpression(){
    let txt_box=document.querySelector("#result")
    // let out=eval(txt_box.value)
    // txt_box.value=out or
    txt_box.value=eval(txt_box.value)

}
// let evaluateExpression=()=>result.value=eval(result.value)
function removeElement(){
    let text_box=document.querySelector('#result')
    text_box.value=text_box.value.slice(0,-1)
}
// let removeElement=()=>result.value=result.value.slice(0,-1)