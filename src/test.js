
function getFormBody(params){
    let formBody = []
    for (let property in params){
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    return formBody.join('&');
}
const url = "https://bazar-app.herokuapp.com/api/v1/users/create";

    console.log(url);
    fetch(url,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: getFormBody({
            email,
            password,
            phoneNumber:'9410197255',
            firstName:name,
            lastName:'uniyal',
            roles:['customer'],

        }),
    })
        .then((response) => {
            console.log('response received')
            return response.json()
        })
        .then((data) =>{
            console.log(data)
            if (data.success){
            //  localStorage.setItem('token',data.data.token);
            //  dispatch(signupSuccessful(data.data.user));
                return;
            }
        })