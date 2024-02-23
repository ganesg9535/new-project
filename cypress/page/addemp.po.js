class addemployeedetails{

    employeeFirstname(){
        return '[name="firstName"]'
    }

    employeeLastname(){
        return '[name="lastName"]'
    }

    submitbutton(){
        return '[type="submit"]'
    }
    Addemployee(){
        return 'Add Employee'
    }
    successfullmessage ="Successfully Saved"
}
const addemployee=new addemployeedetails()
export default addemployee;