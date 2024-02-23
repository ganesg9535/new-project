 class addemployeePage{
    addemployeesubmenu(){

        return 'Add Employee'
    }

    firstnameInput(){
        return 'input[name="firstName"]'
    }

    lastnameInput(){
        return 'input[name="lastName"]'
    }

    savebutton(){
        return 'button[type="submit"]'
    }

    successmessage(){
        return 'Successfully Saved'
    }

 }
 const addemployee=new addemployeePage()
 export default addemployee