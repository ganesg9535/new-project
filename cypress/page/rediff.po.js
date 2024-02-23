class createaccount{
fullnameInput(){
    return 'input[name^="name"]'
}
reddifmailid(){

    return '#wrapper'
}

password(){
return '#newpasswd'

}
retypepassword(){
    return '#newpasswd1'
}

alternateemail(){
    return 'input[name^="altemail"]'
}
mobileno(){
    return '#mobno'
}
day(){
    return 'select[name^="DOB_Day"]'
}
month(){
    return 'select[name^="DOB_Month"]'
}
year(){
    return 'select[name^="DOB_Year"]'
}

radiobutten(){
    return 'Male'
}
gender(){

    return 'input[name^="gender"][value="m"]'
}
country(){
    return '#country'
}

city(){

    return 'select[name^="city"]'
}


}
const createdata=new createaccount()
export default createdata;