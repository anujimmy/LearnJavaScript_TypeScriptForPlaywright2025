function getUser(iUser){
      return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                  let success = false;
                  if (success){
                        resolve(iUser);
                  }else{
                        reject('404 error - not found');
                  }
            },3000);
      });
}

// //calling the function. - returns a promise
// getUser().then(user =>{
//       console.log(user);
// }).catch(error =>{
//       console.log(error);
// });

async function displayUserDetails(){
      try{
            console.log('getting user info....');
            let ifUserFound = await getUser('joseph'); //ifUserFound is updated only if promise is resolved. So we need a try catch block to avoin unhandled exceptions
            console.log('User : '+ ifUserFound);
      }
      catch(error){
            console.log('errored out....');
            console.log(error);
      }
      
}

displayUserDetails();