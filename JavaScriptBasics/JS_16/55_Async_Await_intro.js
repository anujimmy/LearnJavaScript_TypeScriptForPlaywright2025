
//AC: fetch the data from APO
//get call : url
//response
//parse json



async function fetchData(){
      try {
            console.log('fetching the data !!!');
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            let data = await response.json();
            console.log('title : ' + data.title);
      } catch (error) {
            console.log(error);
      }
      
}

fetchData();

// fetch & .json - returns a promise