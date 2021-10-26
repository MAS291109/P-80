var array_names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	array_names_of_people.push(GuestName);
	document.getElementById("display_name").innerHTML = array_names_of_people;
	console.log(GuestName);    
    console.log(array_name_of_people);
    var lenght_of_name = array_names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=array_names_of_people.toString();
   }



function show()
{
	var i= array_names_of_people.join("<br>");
	console.log(array_names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}


function sorting()
	{
		array_names_of_people.sort();
		var i= array_names_of_people.join("<br>");
		console.log(array_names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<array_names_of_people.length; j++)
		{
			if(s==array_names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
