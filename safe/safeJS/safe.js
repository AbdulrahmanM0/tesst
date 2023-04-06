const calcWindow = document.getElementById('windowRes');
const calcButtons = document.getElementsByClassName('grid-buttons')[0];
const resetWindow = document.getElementById('reset'); 
const supBtn = document.getElementById('ok');

calcButtons.onclick = (e) => {
    if(e.target.tagName == "SPAN"){
        if(calcWindow.innerText.length < 5){
            calcWindow.innerHTML += e.target.innerHTML
        }
    }
}
// 44231
let num = '416515 16516 5 4 46151561 654521 651 864 51 5 8 4511651 8465 1 8 452187 +952 62+ 99+ 5  59 55136 845 1 84 5+ +5984 1915 6 1161 44231 6598748 61 5 15 154878 84 46431 145 45 4 51 21315884  415 1  1 5 5 4  5 31 3 31 311 13 14  45';

let arr =[];
arr = num.split(' ');;

// for(let i = 0; i < arr.length ; i++){
//     if(arr[i] = "44231"){
//         console.log(arr.indexOf(arr[i]))
//     }
// }

// reset the CALC
resetFn = () => {
    if(calcWindow.innerText.length > 0){
        calcWindow.innerHTML = '<div id="lamb"></div>';
        const lambWindo = document.getElementById('lamb');
        lambWindo.style.cssText= 'background-color: red';
        setTimeout(()=>{
            lambWindo.style.cssText = "background-color: yellow";
        },500)
        // lambWindo.style.background = 'red';
    }
}
let openedSafe = document.getElementById('opened');

resetWindow.onclick = resetFn;

supBtn.onclick = () =>{
    if(calcWindow.innerText == arr[31]){
        openedSafe.style.display = 'block';
        openedSafe.innerHTML = `<span><img id='msg' src=https://openclipart.org/image/2400px/svg_to_png/17621/lemmling-Blank-sticky-note-1.png  /></span> <img class=db src=https://sc04.alicdn.com/kf/HTB1uzjObgKG3KVjSZFL761MvXXa4.png  /><h2 id=myName >Abdulrahman</h2>`
    }
}
// let msgOP = document.getElementById("msg");
let msgOp = false;
openedSafe.onclick = (e) =>{
    if(e.target.id == "msg"){
        if(msgOp == false){
            document.getElementById("msg").classList.add('opnMSG');
            document.getElementById('myName').innerText = '';
            seeMsg();
            msgOp = true;
        }else if(msgOp == true){
            document.getElementById("msg").classList.remove('opnMSG');
            document.getElementById('myName').innerText = 'Abdulrahman';
            clearMsg()
            msgOp = false;
        }
    }
}
seeMsg = () => {
    document.getElementById("msg").parentElement.innerHTML +=`<img class=des src=img/des.png /><p class=desParagraph >Stand with your "mouse" on this point <br/> for 5 seconds</p>`
}
clearMsg = () => {
    document.getElementById("msg").parentElement.innerHTML = `<span><img id='msg' src=https://openclipart.org/image/2400px/svg_to_png/17621/lemmling-Blank-sticky-note-1.png  /></span> <img class=db src=https://sc04.alicdn.com/kf/HTB1uzjObgKG3KVjSZFL761MvXXa4.png  />`
}



