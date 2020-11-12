function Addition(){
    let a=parseInt(document.getElementById('so a').value) ;
    let b= parseInt(document.getElementById('so b').value);
    let Addition= (a+b);
    document.getElementById('ketqua').innerText='Result :'+ Addition;

}
function Subtration(){
    let a=parseInt(document.getElementById('so a').value) ;
    let b= parseInt(document.getElementById('so b').value);
    let Subtration= (a-b);
    document.getElementById('ketqua').innerText='Result :'+ Subtration;
}
function Multiplication(){
    let a=parseInt(document.getElementById('so a').value) ;
    let b= parseInt(document.getElementById('so b').value);
    let Multiplication= (a*b);
    document.getElementById('ketqua').innerText='Result :'+ Multiplication;
}
function Division(){
    let a=parseInt(document.getElementById('so a').value) ;
    let b= parseInt(document.getElementById('so b').value);
    let Division= (a/b);
    document.getElementById('ketqua').innerText='Result :'+ Division;
}