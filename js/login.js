document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField= document.getElementById('user-mail');
    const email= emailField.value ;

    const passField= document.getElementById('user-pass');
    const pass=passField.value;

    if(email=== 'sazid@gmail.com' && pass=== '12345'){
        window.location.href='bank.html'
    }
    else{
        alert('Invalid email or password')
    }
})