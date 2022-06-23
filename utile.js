const square = (x) => {
    return x*x;
}

const tasks = {
    task:'name',
    completed:true,

    getName: () =>{
       return  console.log(this.task);
    }
}

console.log(tasks.getName())