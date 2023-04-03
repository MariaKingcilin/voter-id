let age=prompt("Enter the Age");
let hasVoterId=prompt("Enter Yes/No");

if(age>=18)
{
	if(hasVoterId==="Yes")
	{
		console.log("You are eligible");
	}
	else if(hasVoterId==="No")
	{
		console.log("You are not eligible");
	}
}
else
{
	console.log("You are not eligible");
}