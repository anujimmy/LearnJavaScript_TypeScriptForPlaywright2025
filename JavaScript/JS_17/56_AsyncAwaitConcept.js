function getUser(){
      return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                  let success = true;
                  if (success){
                        resolve('user found');
                  }else{
                        reject('404 user not found');
                  }
            },3000);
      });
}

getUser().then(user =>{
      console.log(user);
}).catch(error =>{
      console.log(error);
});