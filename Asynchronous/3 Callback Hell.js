
function task1(callback)
{
    setTimeout(() => {
        console.log('Task 1 Complete')
        callback()
    }, 2000);
}

function task2(callback)
{
    setTimeout(() => {
        console.log('Task 2 Complete')
        callback()
    }, 2000);
}

function task3(callback)
{
    setTimeout(() => {
        console.log('Task 3 Complete')
        callback()
    }, 2000);
}

function task4(callback)
{
    setTimeout(() => {
        console.log('Task 4 Complete')
        callback()
    }, 2000);
}

function task5()
{
    setTimeout(() => {
        console.log('Task 5 Complete')       
    }, 2000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5()
            })
        })
    })
})

