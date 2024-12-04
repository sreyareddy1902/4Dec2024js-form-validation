

let form=document.getElementById('form')
let username=document.getElementById('username')
let email=document.getElementById('email')
let mobile=document.getElementById('mobile')
let password=document.getElementById('password')
let cpassword=document.getElementById('cpassword')

form.addEventListener('submit',function(e)
{
    e.preventDefault()

    checkRequired([username,email,password,cpassword])
    checkEmail(email)
    checkLength(username,4,15)
    checkLength(password,6,9)
    checkMobileLength(mobile,10,10)
    checkPasswordMatch(password,cpassword)
})

function checkEmail(input)
{
    let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()))
    {
        showSuccess(input)
    }
    else
    {
        showError(input,'email is not valid')
    }
}


function checkRequired(inputArr)
{
    inputArr.forEach(function(input){
        if(input.value.trim()==='')
        {
            showError(input,`${getFieldName(input)} is required`)
        }
        else
        {
            showSuccess(input)
        }
    });
}



function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length>max)
    {
        showError(input,`${getFieldName(input)} must be less than ${max}  characters`)
    }
    else
    {
        showSuccess(input)
    }
}

function checkMobileLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length>max)
    {
        showError(input,`${getFieldName(input)} is less than ${max}  characters`)
    }
    else
    {
        showSuccess(input)
    }
}



function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}


function checkPasswordMatch(input1,input2)
{
    if(input1.value!==input2.value)
    {
        showError(input2,`password does not match`)
    }
}



function showError(input,message)
{
    let formControl = input.parentElement
    formControl.className = 'form-control error'
    let small = formControl.querySelector('small')
    small.innerText=message 
}

function showSuccess(input)
{
    let formControl=input.parentElement
    formControl.className='form-control success'
}