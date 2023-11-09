document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField= document.getElementById('user-mail');
    const email= emailField.value ;

    const passField= document.getElementById('user-pass');
    const pass=passField.value;

    console.log(email,pass)
})