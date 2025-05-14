const btnElement=document.querySelector('button');
const spanElement=document.getElementById('updateContent');

btnElement.onclick=function() {
    const yourName=prompt("Please Enter Your Name:");
    spanElement.textContent=yourName;
}
