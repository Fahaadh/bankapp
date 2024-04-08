function reg(){
    let signup={
        name:username1.value,
        acc:accountnumber1.value,
        pass:password1.value,
        balance:0

    }
if(signup.name=="" || signup.acc=="" || signup.pass==""){
    alert("Please enter complete details")
}else{
    if(localStorage.getItem(signup.acc)){
        alert("Already added")
    }else{
        localStorage.setItem(signup.acc,JSON.stringify(signup))
        alert("Account details added")
        window.location="./signin.html"
    }
}

}

function log(){
   
    const key = document.getElementById("accno2").value;
    const key1 = document.getElementById("pswd2").value;
    
    const userData = localStorage.getItem(key); //here user data is string 
  
    if (userData === null) {
      alert("No account found .");
      window.location = "./signup.html";
    } else {
      const user = JSON.parse(userData); //now user is a object,which is the account details
      console.log(user);
      localStorage.setItem("name", user.name);
      localStorage.setItem("pass", user.pass);
      localStorage.setItem("balance", user.balance);  
      if (user.pass === key1) {
        alert("Login successful!");
        window.location = "./welcome.html";
        localStorage.setItem("name", user.name);
      } else {
        alert("Incorrect password. Please try again.");
      }
    }
    
  }
    















  
















