class loginpage{
    username(){
        return '[placeholder="Username"'
    }

    password(){
        return '[placeholder="Password"]'
    }

    submittbutton(){
        return '[type="submit"]'
    }

    dashboard(){
        return 'Dashboard'
    }
    pimmodule(){
        return 'PIM'
    }
   
}
const login=new loginpage()
export default login;