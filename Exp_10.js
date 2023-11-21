const number = process.argv[2];

if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
    console.log(`Table of ${number} is: `);
    for (var i=1; i<=10; i++)
    {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}