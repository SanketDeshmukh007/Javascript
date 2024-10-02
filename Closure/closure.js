
let name = "Manish"

function outerFunction()
{
    {
        let name = "Sushant"
        console.log(name)
    }

    let name = "Sanket"

    function innerFunction()
    {
        let name = "Suresh"
        console.log(name)
    }

    innerFunction()
}

outerFunction()