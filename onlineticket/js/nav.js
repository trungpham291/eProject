// JavaScript Document

function tic()

{
	
	
	var name = document.getElementById('n4').value
	var name2 = document.getElementById('n5').value
	var add = document.getElementById('ad').value
	var p = document.getElementById('pass1').value
	var cp = document.getElementById('cpass1').value
	var da = document.getElementById('date').value
	var e = document.getElementById('e2').value
	var check = document.getElementById('chi').checked
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2) && check == true )
	{
	
	$(document).ready(function(e) {
    $(".Card_In").show("slow")
        
    
});

$(document).ready(function(e) {
    $(".Per_In").hide("slow")
        
    
});

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='' && add=='' && da=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( (/^\D{1,10}$/).exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	else if  ( check == false)
	{
		alert('Please Agree the Park Policies ')
	}
	
}



function Card()

{
	
	
	var name = document.getElementById('card').value
	var name2 = document.getElementById('pi').value
	var add = document.getElementById('cardn').value
	var p = document.getElementById('zc').value
	var sel = document.getElementById('s').value
	
	

	
	
	if(name!=''  && name2!='' &&  add!=''   && p!='' && /^\d{4}-\d{4}-\d{4}-\d{4}$/.exec(name) && /^\d{4}$/.exec(name2) &&
	/^\d{3}$/.exec(add) && /^\d{5}$/.exec(p) && sel!=1  )
	{
	
	
             alert('You have successfully order Tickets')
            window.location.assign('ticket.html')



	
	
	
	}
	else if(name=='' && name2==''  && add=='' && p=='' )
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a Cradit Card Number')
	}
	else if (!(/^\d{4}-\d{4}-\d{4}-\d{4}$/).exec(name))
	{
		alert('Your Cradit Card Number is Incorrect \n Follow this Pattern 1234-5678-1234-5678')
	}
	
	
	else if (name2=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (!(/^\d{4}$/.exec)(name2))
	{
		alert('Your Pin Code is Incorrect')
	}

	else if (add=='')
	{
		alert('Please Enter a Last 3 Digits of Card Number')
	}
	
	else if (!(/^\d{3}$/).exec(add))
	{
		alert('Your Last 3 Digits of Card Number')
	}
	
	
	else if (p=='')
	{
		alert('Please Enter a Zipcode Code')
	}
	
	else if (!(/^\d{5}$/).exec(p))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	else if (sel==1)
	{
		alert('Please Select Ticket')
	}
	
	
}



function contact()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('me').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{

		alert('Thank You Your Message Has Been Send')
window.location.assign('Contact.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}
function feed1()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                 window.location.assign('index.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed2()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                 window.location.assign('Resturant.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}


function feed3()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('Gallery.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}


function feed4()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('Entertainment.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed5()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                 window.location.assign('attraction.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed6()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
                        
		alert('Thanks For Feedback')
		 window.location.assign('ticket.html')
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed7()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('ticket2.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}




function feed8()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                 
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}




function feed9()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('About.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed10()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
              window.location.assign('Indoor.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed11()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('Outdoor.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed12()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                 window.location.assign('shows.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed13()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



function feed14()
{
	var c = document.getElementById('n').value
	var en = document.getElementById('e').value
	var m = document.getElementById('m').value
	
	
	if(c!='' && en!='' && m!='' && /^\D{1,20}$/.exec(c) && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(en)  )
	{
		alert('Thanks For Feedback')
                window.location.assign('Contact.html')
		
	}
	
	else if(c=='' )
	{
		alert('Please Enter a name')
		
	}
	
	else if(!(/^\D{1,20}$/).exec(c))
	{
		alert('Your Name is Incorrect')
		
	}
	
	else if(en=='')
	{
		alert('Please Enter a Email')
		
	}
	else if(!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(en))
	{
		alert('Your email is Incorrect \n Follow this Pattren = [mjunaid725@gmail.com]')
		
	}
	
	else if(m=='' )
	{
		alert('Please Enter a Message')
		
	}
}



$(document).ready(function(e) {
    $("#Diff_List").click(function(e) {
        $("#Drob_ul").slideToggle("slow")
        
    });
});

$(document).ready(function(e) {
    $(".row-bot,#content").click(function(e) {
        $("#Drob_ul").hide("slow")
        
    });
});




$(document).ready(function(e) {
    $("#Login_List").click(function(e) {
        $("#Drob_Login").show("slow")
        
		
    });
});


$(document).ready(function(){
  $(".row-bot,#content").click(function(){
    $("#Drob_Login").hide("slow");
  });
});

$(document).ready(function(e) {
    $("#junaid").click(function(e) {
        $("#junaid2").show("slow")
        
    });
});

$(document).ready(function(){
  $(".row-bot,#content").click(function(){
    $("#junaid2").hide("slow");
  });
});

function Login()
{
	
	
	var name = document.getElementById('n1').value
	
	
	var name2 = document.getElementById('n2').value
	var im = document.getElementById('img').value
	var p = document.getElementById('pass').value
	var cp = document.getElementById('cpass').value
	var e = document.getElementById('e1').value
	
	
	
	if(name!='' && name2!='' && im!='' && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2) )
	{
	
	('localStorage' in window) && window['localStorage'] !== null 
	{
		 name = document.getElementById('n1').value
		localStorage.setItem('jun' , name)
		
		name2 = document.getElementById('n2').value
		localStorage.setItem('jun1' , name2)
		
		 im = document.getElementById('img').innerHTML = '<a href="#"><img class="img" id="img" style="border-radius:50px;" src="images/avatar_2x.png" height="50" width="50"" /></a>'
		 localStorage.setItem('imge' , im) 
		 
		 e = document.getElementById('e1').value
		localStorage.setItem('email' , e)
		
		
		
		
		window.location.assign('user_profile.html')
		
		
		}
	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	
}





function Log()

{
	var name = document.getElementById('in2').value
	var name2 = document.getElementById('in1').value
	
	var add = document.getElementById('addr').value
	var p = document.getElementById('pass1').value
	var cp = document.getElementById('cpass1').value
	var da = document.getElementById('date').value
	var e = document.getElementById('e2').value
	var c = document.getElementById('card').value
	var pin = document.getElementById('pi').value
	var cardno = document.getElementById('cardn').value
	var zp = document.getElementById('zc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2) && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Zinger Burger your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}

function Log1()
{
		

	var name = document.getElementById('inn2').value
	var name2 = document.getElementById('inn1').value
	
	var add = document.getElementById('addrr').value
	var p = document.getElementById('passs1').value
	var cp = document.getElementById('cpasss1').value
	var da = document.getElementById('datee').value
	var e = document.getElementById('ee2').value
	var c = document.getElementById('cardd').value
	var pin = document.getElementById('ppi').value
	var cardno = document.getElementById('cardnn').value
	var zp = document.getElementById('zcc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Pizza your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}





function Log2()
{
		

	var name = document.getElementById('innn2').value
	var name2 = document.getElementById('innn1').value
	
	var add = document.getElementById('addrrr').value
	var p = document.getElementById('passss1').value
	var cp = document.getElementById('cpassss1').value
	var da = document.getElementById('dateee').value
	var e = document.getElementById('eee2').value
	var c = document.getElementById('carddd').value
	var pin = document.getElementById('pppi').value
	var cardno = document.getElementById('cardnnn').value
	var zp = document.getElementById('zccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Bar B Q your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}



function Log3()
{
		

	var name = document.getElementById('innnn2').value
	var name2 = document.getElementById('innnn1').value
	
	var add = document.getElementById('addrrrr').value
	var p = document.getElementById('passsss1').value
	var cp = document.getElementById('cpasssss1').value
	var da = document.getElementById('dateeee').value
	var e = document.getElementById('eeee2').value
	var c = document.getElementById('cardddd').value
	var pin = document.getElementById('ppppi').value
	var cardno = document.getElementById('cardnnnn').value
	var zp = document.getElementById('zcccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Chicken Sandwish your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}



function Log4()
{
		

	var name = document.getElementById('innnnn2').value
	var name2 = document.getElementById('innnnn1').value
	
	var add = document.getElementById('addrrrrr').value
	var p = document.getElementById('passssss1').value
	var cp = document.getElementById('cpassssss1').value
	var da = document.getElementById('dateeeee').value
	var e = document.getElementById('eeeee2').value
	var c = document.getElementById('carddddd').value
	var pin = document.getElementById('pppppi').value
	var cardno = document.getElementById('cardnnnnn').value
	var zp = document.getElementById('zccccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Ice Cream your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}




function Log5()
{
		

	var name = document.getElementById('innnnnn2').value
	var name2 = document.getElementById('innnnnn1').value
	
	var add = document.getElementById('addrrrrrr').value
	var p = document.getElementById('passsssss1').value
	var cp = document.getElementById('cpasssssss1').value
	var da = document.getElementById('dateeeeee').value
	var e = document.getElementById('eeeeee2').value
	var c = document.getElementById('cardddddd').value
	var pin = document.getElementById('ppppppi').value
	var cardno = document.getElementById('cardnnnnnn').value
	var zp = document.getElementById('zcccccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Refrechment Drinks your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}


function Log6()
{
		

	var name = document.getElementById('innnnnnn2').value
	var name2 = document.getElementById('innnnnnn1').value
	
	var add = document.getElementById('addrrrrrrr').value
	var p = document.getElementById('passssssss1').value
	var cp = document.getElementById('cpassssssss1').value
	var da = document.getElementById('dateeeeeee').value
	var e = document.getElementById('eeeeeee2').value
	var c = document.getElementById('carddddddd').value
	var pin = document.getElementById('pppppppi').value
	var cardno = document.getElementById('cardnnnnnnn').value
	var zp = document.getElementById('zccccccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Milk Sheak your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}




function Log7()
{
		

	var name = document.getElementById('innnnnnnn2').value
	var name2 = document.getElementById('innnnnnnn1').value
	
	var add = document.getElementById('addrrrrrrrr').value
	var p = document.getElementById('passsssssss1').value
	var cp = document.getElementById('cpasssssssss1').value
	var da = document.getElementById('dateeeeeeee').value
	var e = document.getElementById('eeeeeeee2').value
	var c = document.getElementById('cardddddddd').value
	var pin = document.getElementById('ppppppppi').value
	var cardno = document.getElementById('cardnnnnnnnn').value
	var zp = document.getElementById('zcccccccc').value
	
	
	
	if(name!=''  && name2!='' && da!='' && add!=''  && e!='' && p!='' && cp!='' && p==cp && /^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/.exec(e) 
	&& /^\D{1,10}$/.exec(name) && /^\D{1,10}$/.exec(name2)  && c!=''  && pin!='' &&  cardno!=''   && zp!='' && /^\d{1,19}$/.exec(c) && /^\d{1,4}$/.exec(pin)     )
	{
	
	
        
    
alert('You Are Successfully order Chicken Soup your product will soon sent on your address')

	
	
	
	}
	else if(name=='' && name2==''  && e=='' && p=='' && cp=='')
	{
		alert('please fillup the form')
	}
	else if (name=='')
	{
		alert('Please Enter a First Name')
	}
	
	else if ( !(/^\D{1,20}$/).exec(name) || !(/^\D{1,20}$/).exec(name2)  )
	{
		alert('Please Enter a Correct name')
	}
	
	else if (name2=='')
	{
		alert('Please Enter a Last Name')
	}

	else if (add=='')
	{
		alert('Please Enter a Full Address')
	}
	
	else if (e=='')
	{
		alert('Please Enter a Email')
	}
	else if (!(/^\w+([\.-]?\w)*@+\w+([\.-]?\w)*(\.\w{2,3})+$/).exec(e))
	{
		alert('Your email is Incorrect \n Please enter a Correct email Follow this Pattern[mjunaid725@gmail.com]')
	}
	
	
	else if  ( p=='')
	{
		alert('Please Enter a Password')
	}
	
	else if  ( cp=='')
	{
		alert('Please Enter a Confirm Password')
	}
	
	
	
	else if (p!=cp)
	{
		alert('Your Password donot Match')
		
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( da=='')
	{
		alert('Please Enter Your Date of Birth')
	}
	
	else if  ( /^\D{1,10}$/.exec(da))
	{
		alert('Your Date of Birth is Incorrect')
	}
	
	else if  ( c=='')
	{
		alert('Please Enter a Credit Card Number')
	}
	
	else if  ( c=='')
	{
		alert('Your Credit Card Number is Incorrect')
	}
	
	else if (/^\D{1,19}$/.exec(c))
	{
		alert('Your Card Number is Incorrect')
	}
	
	
	else if (pin=='')
	{
		alert('Please Enter a Pin Code')
	}
	
	else if (/^\D{1,4}$/.exec(pin))
	{
		alert('Your Pin Code is Incorrect')
	}
	
	
	else if (cardno=='')
	{
		alert('Please Enter a 3 Digits Card Number')
	}
	
	else if (/^\D{1,3}$/.exec(cardno))
	{
		alert('Your Card Number is Incorrect')
	}
	
	else if (zp=='')
	{
		alert('Please Enter a Postal Code')
	}
	
	else if (/^\D{1,5}$/.exec(zp))
	{
		alert('Your Zipcode is Incorrect')
	}
	
	
}


















	function resets()
{
	if(('localStorage' in window) && window['localStorage']!==null)
	{
	localStorage.removeItem('jun')
	localStorage.removeItem('imge')
	localStorage.removeItem('jun1')
	localStorage.removeItem('email')
	
	}
	else
	{
		alert('Your Browser Does Not Support')
	}
}
	
	
	
	


	

function prints()
{
	
	 
	var name = localStorage.getItem('jun')
	document.getElementById('lbl1').innerHTML =  name 
	
	var name2 = localStorage.getItem('jun1')
	document.getElementById('lbl3').innerHTML =  name2 
	
	var im = localStorage.getItem('imge')
	document.getElementById('lbl2').innerHTML =  im 
	
	var em = localStorage.getItem('email')
	document.getElementById('lbl4').innerHTML =  em
	
	var pname = localStorage.getItem('jun')
	document.getElementById('lbl5').innerHTML =  name
	
	var pname2 = localStorage.getItem('jun1')
	document.getElementById('lbl6').innerHTML =  name2
	
}

//Hover image
$(document).ready(function() { 
	$(".lightbox-image").append("<span></span>");
	
	$('.lightbox-image')
		.live('mouseenter',function(){
			$(this).find("span").stop()
			.animate({top:'0%'},{duration:350, easing:'easeOutQuart'});
		})
		.live('mouseleave',function(){
			$(this).find("span").stop()
			.animate({top:'-100%'},{duration:350, easing:'easeOutQuart'});
	});
});

//jquery.prettyPhoto


(function($) {
	$.prettyPhoto = {version: '3.1.2'};
	
	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 0, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: false, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: false, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt"> </div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											 {pp_social}\
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: false /* html or false to disable */
		}, pp_settings);
		
		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
		
		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
		
		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								e.preventDefault();
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								e.preventDefault();
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								e.preventDefault();
								break;
						};
						// return false;
					};
				};
			});
		};
		
		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function() {
			
			settings = pp_settings;
			
			if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
			if(settings.ie6_fallback && $.browser.msie && parseInt($.browser.version) == 6) settings.theme = "light_square"; // Fallback to a supported theme for IE6
			
			// Find out if the picture is part of a set
			theRel = $(this).attr('data-gal');
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('data-gal').indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('data-gal').indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('data-gal').indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
			
			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
			rel_index = (isSet) ? set_position : $("a[data-gal^='"+theRel+"']").index($(this));
			
			_build_overlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize)
				$(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
			
			
			$.prettyPhoto.open();
			
			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function(event) {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				if($.browser.msie && $.browser.version == 6) settings.theme = "light_square"; // Fallback to a supported theme for IE6
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = 0;
				_build_overlay(event.target); // Build the overlay {this} being the caller
			}

			if($.browser.msie && $.browser.version == 6) $('select').css('visibility','hidden'); // To fix the bug with IE select boxes
			
			if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.pp_loaderIcon').show();
		
			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

			// Set the description
			if(pp_descriptions[set_position] != ""){
				$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
			}else{
				$pp_pic_holder.find('.pp_description').hide();
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			percentBased=false;
			if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
			if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
			
			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				// Set the title
				(settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(' ');
				
				imgPreloader = "";
				skipInjection = false;
				
				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

						imgPreloader.onload = function(){
							// Fit item to viewport
							pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.prettyPhoto.close();
						};
					
						imgPreloader.src = pp_images[set_position];
					break;
				
					case 'youtube':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						movie = 'http://www.youtube.com/embed/'+getParam('v',pp_images[set_position]);
						(getParam('data-gal',pp_images[set_position])) ? movie+="?data-gal="+getParam('data-gal',pp_images[set_position]) : movie+="?data-gal=1";
							
						if(settings.autoplay) movie += "&autoplay=1";
					
						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						movie_id = pp_images[set_position];
						var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = 'http://player.vimeo.com/video/'+ match[2] +'?title=0&byline=0&portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";
				
						vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
					break;
				
					case 'quicktime':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));
					
						toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
				
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
					break;
					
					case 'ajax':
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport(movie_width,movie_height);
						doresize = true; // Reset the dimensions
					
						skipInjection = true;
						$.get(pp_images[set_position],function(responseHTML){
							toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
							$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
							_showContent();
						});
						
					break;
					
					case 'custom':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
						doresize = true; // Reset the dimensions
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader && !skipInjection){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
				
					// Show content
					_showContent();
				};
			});

			return false;
		};

	
		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0) set_position = $(pp_images).size()-1;
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) set_position = 0;
			}else{
				set_position=direction;
			};
			
			rel_index = set_position;

			if(!doresize) doresize = true; // Allow the resizing of the images
			$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage) currentGalleryPage = 0;
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0) currentGalleryPage = totalPage;
			}else{
				currentGalleryPage = direction;
			};
			
			slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

			slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

			$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = function(){
			if(typeof pp_slideshow == 'undefined'){
				$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
			}else{
				$.prettyPhoto.changePage('next');	
			};
		}


		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = function(){
			$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
				$.prettyPhoto.startSlideshow();
				return false;
			});
			clearInterval(pp_slideshow);
			pp_slideshow=undefined;
		}


		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){
			if($pp_overlay.is(":animated")) return;
			
			$.prettyPhoto.stopSlideshow();
			
			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
			
			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$pp_overlay.fadeOut(settings.animation_speed, function(){
				if($.browser.msie && $.browser.version == 6) $('select').css('visibility','visible'); // To fix the bug with IE select boxes
				
				if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
				
				$(this).remove(); // No more need for the prettyPhoto markup
				
				$(window).unbind('scroll.prettyphoto');
				
				settings.callback();
				
				doresize = true;
				
				pp_open = false;
				
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		function _showContent(){
			$('.pp_loaderIcon').hide();

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;

			$ppt.fadeTo(settings.animation_speed,1);

			// Resize the content holder
			$pp_pic_holder.find('.pp_content')
				.animate({
					height:pp_dimensions['contentHeight'],
					width:pp_dimensions['contentWidth']
				},settings.animation_speed);
			
			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': projectedTop,
				'left': (windowWidth/2) - (pp_dimensions['containerWidth']/2),
				width:pp_dimensions['containerWidth']
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
			
				if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
					$('a.pp_expand,a.pp_contract').show();
				}else{
					$('a.pp_expand').hide();
				}
				
				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
				
				if(settings.deeplinking)
					setHashtag();
				
				settings.changepicturecallback(); // Callback!
				
				pp_open = true;
			});
			
			_insert_gallery();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
			$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
				$('.pp_loaderIcon').show();
				
				callback();
			});
		};
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};
			
				_getDimensions(imageWidth,imageHeight);
				
				if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
					_fitToViewport(pp_containerWidth,pp_containerHeight)
				};
			};
			
			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			
			$pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			if($.browser.msie && $.browser.version==7) detailsHeight+=8;
			$pp_details.remove();
			
			// Get the titles height, to do so, I need to clone it since it's invisible
			$pp_title = $pp_pic_holder.find('.ppt');
			$pp_title.width(width);
			titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
			$pp_title = $pp_title.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			
			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.match(/\b.mov\b/i)){ 
				return 'quicktime';
			}else if(itemSrc.match(/\b.swf\b/i)){
				return 'flash';
			}else if(itemSrc.match(/\biframe=true\b/i)){
				return 'iframe';
			}else if(itemSrc.match(/\bajax=true\b/i)){
				return 'ajax';
			}else if(itemSrc.match(/\bcustom=true\b/i)){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};
	
		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				if(projectedTop < 0) projectedTop = 0;
				
				if(contentHeight > windowHeight)
					return;

				$pp_pic_holder.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			};
		};
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			
			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
		};
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image" && (settings.ie6_fallback && !($.browser.msie && parseInt($.browser.version) == 6))) {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
				}else{
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
				};

				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				
				// Set the proper width to the gallery items
				$pp_gallery
					.css('margin-left',-((galleryWidth/2) + (navWidth/2)))
					.find('div:first').width(galleryWidth+5)
					.find('ul').width(fullGalleryWidth)
					.find('li.selected').removeClass('selected');
				
				goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

				$.prettyPhoto.changeGalleryPage(goToPage);
				
				$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				// $pp_gallery.hide();
			}
		}
	
		function _build_overlay(caller){
			
			settings.markup=settings.markup.replace('{pp_social}',(settings.social_tools)?settings.social_tools:'');
			
			$('body').append(settings.markup); // Inject the markup
			
			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_images.length; i++) {
					if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
						classname = 'default';
						img_src = '';
					}else{
						classname = '';
						img_src = pp_images[i];
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				};
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
				
				$pp_pic_holder.find('#pp_full_res').after(toInject);
				
				$pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
				
				$pp_gallery.find('.pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_gallery.find('.pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
					});

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$pp_gallery_li.each(function(i){
					$(this)
						.find('a')
						.click(function(){
							$.prettyPhoto.changePage(i);
							$.prettyPhoto.stopSlideshow();
							return false;
						});
				});
			};
			
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}
			
			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
			
			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(window).width()
					})
				.bind('click',function(){
					if(!settings.modal) $.prettyPhoto.close();
				});

			$('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });

			$('a.pp_expand').bind('click',function(e){
				// Expand the image
				if($(this).hasClass('pp_expand')){
					$(this).removeClass('pp_expand').addClass('pp_contract');
					doresize = false;
				}else{
					$(this).removeClass('pp_contract').addClass('pp_expand');
					doresize = true;
				};
			
				_hideContent(function(){ $.prettyPhoto.open(); });
		
				return false;
			});
		
			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
		
			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
				$.prettyPhoto.changePage('next');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		};

		if(!pp_alreadyInitialized && getHashtag()){
			pp_alreadyInitialized = true;
			
			// Grab the rel index to trigger the click on the correct element
			hashIndex = getHashtag();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
			hashRel = hashRel.substring(0,hashRel.indexOf('/'));

			// Little timeout to make sure all the prettyPhoto initialize scripts has been run.
			// Useful in the event the page contain several init scripts.
			setTimeout(function(){ $("a[data-gal^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
		}
		
		return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};
	
	function getHashtag(){
		url = location.href;
		hashtag = (url.indexOf('#!') != -1) ? decodeURI(url.substring(url.indexOf('#!')+2,url.length)) : false;
		return hashtag;
	};
	
	function setHashtag(){
		if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
		location.hash = '!' + theRel + '/'+rel_index+'/';
	};
	
	function getParam(name,url){
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  return ( results == null ) ? "" : results[1];
	}
	
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.





//jquery.easing.1.3



// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});






//jquery.bxSlider



(function($){
	
	$.fn.bxSlider = function(options){		
				
		var defaults = {
			mode: 'horizontal',									// 'horizontal', 'vertical', 'fade'
			infiniteLoop: true,									// true, false - display first slide after last
			hideControlOnEnd: false,						// true, false - if true, will hide 'next' control on last slide and 'prev' control on first
			controls: true,											// true, false - previous and next controls
			speed: 500,													// integer - in ms, duration of time slide transitions will occupy
			easing: 'swing',                    // used with jquery.easing.1.3.js - see http://gsgd.co.uk/sandbox/jquery/easing/ for available options
			pager: false,												// true / false - display a pager
			pagerSelector: null,								// jQuery selector - element to contain the pager. ex: '#pager'
			pagerType: 'full',									// 'full', 'short' - if 'full' pager displays 1,2,3... if 'short' pager displays 1 / 4
			pagerLocation: 'bottom',						// 'bottom', 'top' - location of pager
			pagerShortSeparator: '/',						// string - ex: 'of' pager would display 1 of 4
			pagerActiveClass: 'pager-active',		// string - classname attached to the active pager link
			nextText: 'next',										// string - text displayed for 'next' control
			nextImage: '',											// string - filepath of image used for 'next' control. ex: 'images/next.jpg'
			nextSelector: null,									// jQuery selector - element to contain the next control. ex: '#next'
			prevText: 'prev',										// string - text displayed for 'previous' control
			prevImage: '',											// string - filepath of image used for 'previous' control. ex: 'images/prev.jpg'
			prevSelector: null,									// jQuery selector - element to contain the previous control. ex: '#next'
			captions: false,										// true, false - display image captions (reads the image 'title' tag)
			captionsSelector: null,							// jQuery selector - element to contain the captions. ex: '#captions'
			auto: false,												// true, false - make slideshow change automatically
			autoDirection: 'next',							// 'next', 'prev' - direction in which auto show will traverse
			autoControls: false,								// true, false - show 'start' and 'stop' controls for auto show
			autoControlsSelector: null,					// jQuery selector - element to contain the auto controls. ex: '#auto-controls'
			autoStart: true,										// true, false - if false show will wait for 'start' control to activate
			autoHover: false,										// true, false - if true show will pause on mouseover
			autoDelay: 0,                       // integer - in ms, the amount of time before starting the auto show
			pause: 3000,												// integer - in ms, the duration between each slide transition
			startText: 'start',									// string - text displayed for 'start' control
			startImage: '',											// string - filepath of image used for 'start' control. ex: 'images/start.jpg'
			stopText: 'stop',										// string - text displayed for 'stop' control
			stopImage: '',											// string - filepath of image used for 'stop' control. ex: 'images/stop.jpg'
			ticker: false,											// true, false - continuous motion ticker mode (think news ticker)
																					// note: autoControls, autoControlsSelector, and autoHover apply to ticker!
			tickerSpeed: 5000,								  // float - use value between 1 and 5000 to determine ticker speed - the smaller the value the faster the ticker speed
			tickerDirection: 'next',						// 'next', 'prev' - direction in which ticker show will traverse
			tickerHover: false,                 // true, false - if true ticker will pause on mouseover
			wrapperClass: 'bx-wrapper',					// string - classname attached to the slider wraper
			startingSlide: 0, 									// integer - show will start on specified slide. note: slides are zero based!
			displaySlideQty: 1,									// integer - number of slides to display at once
			moveSlideQty: 1,										// integer - number of slides to move at once
			randomStart: false,									// true, false - if true show will start on a random slide
			onBeforeSlide: function(){},				// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			onAfterSlide: function(){},					// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			onLastSlide: function(){},					// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			onFirstSlide: function(){},					// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			onNextSlide: function(){},					// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			onPrevSlide: function(){},					// function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
			buildPager: null										// function(slideIndex, slideHtmlObject){ return string; } - advanced use only! see the tutorial here: http://bxslider.com/custom-pager
		}
		
		var options = $.extend(defaults, options);
		
		// cache the base element
		var base = this;
		// initialize (and localize) all variables
		var $parent = '';
		var $origElement = '';
		var $children = '';
		var $outerWrapper = '';
		var $firstChild = '';
		var childrenWidth = '';
		var childrenOuterWidth = '';
		var wrapperWidth = '';
		var wrapperHeight = '';
		var $pager = '';	
		var interval = '';
		var $autoControls = '';
		var $stopHtml = '';
		var $startContent = '';
		var $stopContent = '';
		var autoPlaying = true;
		var loaded = false;
		var childrenMaxWidth = 0;
		var childrenMaxHeight = 0;
		var currentSlide = 0;	
		var origLeft = 0;
		var origTop = 0;
		var origShowWidth = 0;
		var origShowHeight = 0;
		var tickerLeft = 0;
		var tickerTop = 0;
		var isWorking = false;
    
		var firstSlide = 0;
		var lastSlide = $children.length - 1;
		
						
		// PUBLIC FUNCTIONS
						
		/**
		 * Go to specified slide
		 */		
		this.goToSlide = function(number, stopAuto){
			if(!isWorking){
				isWorking = true;
				// set current slide to argument
				currentSlide = number;
				options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide));
				// check if stopAuto argument is supplied
				if(typeof(stopAuto) == 'undefined'){
					var stopAuto = true;
				}
				if(stopAuto){
					// if show is auto playing, stop it
					if(options.auto){
						base.stopShow(true);
					}
				}			
				slide = number;
				// check for first slide callback
				if(slide == firstSlide){
					options.onFirstSlide(currentSlide, $children.length, $children.eq(currentSlide));
				}
				// check for last slide callback
				if(slide == lastSlide){
					options.onLastSlide(currentSlide, $children.length, $children.eq(currentSlide));
				}
				// horizontal
				if(options.mode == 'horizontal'){
					$parent.animate({'left': '-'+getSlidePosition(slide, 'left')+'px'}, options.speed, options.easing, function(){
						isWorking = false;
						// perform the callback function
						options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
					});
				// vertical
				}else if(options.mode == 'vertical'){
					$parent.animate({'top': '-'+getSlidePosition(slide, 'top')+'px'}, options.speed, options.easing, function(){
						isWorking = false;
						// perform the callback function
						options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
					});			
				// fade	
				}else if(options.mode == 'fade'){
					setChildrenFade();
				}
				// check to remove controls on last/first slide
				checkEndControls();
				// accomodate multi slides
				if(options.moveSlideQty > 1){
					number = Math.floor(number / options.moveSlideQty);
				}
				// make the current slide active
				makeSlideActive(number);
				// display the caption
				showCaptions();
			}
		}
		
		/**
		 * Go to next slide
		 */		
		this.goToNextSlide = function(stopAuto){
			// check if stopAuto argument is supplied
			if(typeof(stopAuto) == 'undefined'){
				var stopAuto = true;
			}
			if(stopAuto){
				// if show is auto playing, stop it
				if(options.auto){
					base.stopShow(true);
				}
			}			
			// makes slideshow finite
			if(!options.infiniteLoop){
				if(!isWorking){
					var slideLoop = false;
					// make current slide the old value plus moveSlideQty
					currentSlide = (currentSlide + (options.moveSlideQty));
					// if current slide has looped on itself
					if(currentSlide <= lastSlide){
						checkEndControls();
						// next slide callback
						options.onNextSlide(currentSlide, $children.length, $children.eq(currentSlide));
						// move to appropriate slide
						base.goToSlide(currentSlide);						
					}else{
						currentSlide -= options.moveSlideQty;
					}
				} // end if(!isWorking)		
			}else{ 
				if(!isWorking){
					isWorking = true;					
					var slideLoop = false;
					// make current slide the old value plus moveSlideQty
					currentSlide = (currentSlide + options.moveSlideQty);
					// if current slide has looped on itself
					if(currentSlide > lastSlide){
						currentSlide = currentSlide % $children.length;
						slideLoop = true;
					}
					// next slide callback
					options.onNextSlide(currentSlide, $children.length, $children.eq(currentSlide));
					// slide before callback
					options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide));
					if(options.mode == 'horizontal'){						
						// get the new 'left' property for $parent
						var parentLeft = (options.moveSlideQty * childrenOuterWidth);
						// animate to the new 'left'
						$parent.animate({'left': '-='+parentLeft+'px'}, options.speed, options.easing, function(){
							isWorking = false;
							// if its time to loop, reset the $parent
							if(slideLoop){
								$parent.css('left', '-'+getSlidePosition(currentSlide, 'left')+'px');
							}
							// perform the callback function
							options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
						});
					}else if(options.mode == 'vertical'){
						// get the new 'left' property for $parent
						var parentTop = (options.moveSlideQty * childrenMaxHeight);
						// animate to the new 'left'
						$parent.animate({'top': '-='+parentTop+'px'}, options.speed, options.easing, function(){
							isWorking = false;
							// if its time to loop, reset the $parent
							if(slideLoop){
								$parent.css('top', '-'+getSlidePosition(currentSlide, 'top')+'px');
							}
							// perform the callback function
							options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
						});
					}else if(options.mode == 'fade'){
						setChildrenFade();
					}					
					// make the current slide active
					if(options.moveSlideQty > 1){
						makeSlideActive(Math.ceil(currentSlide / options.moveSlideQty));
					}else{
						makeSlideActive(currentSlide);
					}
					// display the caption
					showCaptions();
				} // end if(!isWorking)
				
			}	
		} // end function
		
		/**
		 * Go to previous slide
		 */		
		this.goToPreviousSlide = function(stopAuto){
			// check if stopAuto argument is supplied
			if(typeof(stopAuto) == 'undefined'){
				var stopAuto = true;
			}
			if(stopAuto){
				// if show is auto playing, stop it
				if(options.auto){
					base.stopShow(true);
				}
			}			
			// makes slideshow finite
			if(!options.infiniteLoop){	
				if(!isWorking){
					var slideLoop = false;
					// make current slide the old value plus moveSlideQty
					currentSlide = currentSlide - options.moveSlideQty;
					// if current slide has looped on itself
					if(currentSlide < 0){
						currentSlide = 0;
						// if specified, hide the control on the last slide
						if(options.hideControlOnEnd){
							$('.bx-prev', $outerWrapper).hide();
						}
					}
					checkEndControls();
					// next slide callback
					options.onPrevSlide(currentSlide, $children.length, $children.eq(currentSlide));
					// move to appropriate slide
					base.goToSlide(currentSlide);
				}							
			}else{
				if(!isWorking){
					isWorking = true;			
					var slideLoop = false;
					// make current slide the old value plus moveSlideQty
					currentSlide = (currentSlide - (options.moveSlideQty));
					// if current slide has looped on itself
					if(currentSlide < 0){
						negativeOffset = (currentSlide % $children.length);
						if(negativeOffset == 0){
							currentSlide = 0;
						}else{
							currentSlide = ($children.length) + negativeOffset; 
						}
						slideLoop = true;
					}
					// next slide callback
					options.onPrevSlide(currentSlide, $children.length, $children.eq(currentSlide));
					// slide before callback
					options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide));
					if(options.mode == 'horizontal'){
						// get the new 'left' property for $parent
						var parentLeft = (options.moveSlideQty * childrenOuterWidth);
						// animate to the new 'left'
						$parent.animate({'left': '+='+parentLeft+'px'}, options.speed, options.easing, function(){
							isWorking = false;
							// if its time to loop, reset the $parent
							if(slideLoop){
								$parent.css('left', '-'+getSlidePosition(currentSlide, 'left')+'px');
							}
							// perform the callback function
							options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
						});
					}else if(options.mode == 'vertical'){
						// get the new 'left' property for $parent
						var parentTop = (options.moveSlideQty * childrenMaxHeight);
						// animate to the new 'left'
						$parent.animate({'top': '+='+parentTop+'px'}, options.speed, options.easing, function(){
							isWorking = false;
							// if its time to loop, reset the $parent
							if(slideLoop){
								$parent.css('top', '-'+getSlidePosition(currentSlide, 'top')+'px');
							}
							// perform the callback function
							options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
						});
					}else if(options.mode == 'fade'){
						setChildrenFade();
					}					
					// make the current slide active
					if(options.moveSlideQty > 1){
						makeSlideActive(Math.ceil(currentSlide / options.moveSlideQty));
					}else{
						makeSlideActive(currentSlide);
					}
					// display the caption
					showCaptions();
				} // end if(!isWorking)				
			}
		} // end function
		
		/**
		 * Go to first slide
		 */		
		this.goToFirstSlide = function(stopAuto){
			// check if stopAuto argument is supplied
			if(typeof(stopAuto) == 'undefined'){
				var stopAuto = true;
			}
			base.goToSlide(firstSlide, stopAuto);
		}
		
		/**
		 * Go to last slide
		 */		
		this.goToLastSlide = function(){
			// check if stopAuto argument is supplied
			if(typeof(stopAuto) == 'undefined'){
				var stopAuto = true;
			}
			base.goToSlide(lastSlide, stopAuto);
		}
		
		/**
		 * Get the current slide
		 */		
		this.getCurrentSlide = function(){
			return currentSlide;
		}
		
		/**
		 * Get the total slide count
		 */		
		this.getSlideCount = function(){
			return $children.length;
		}
		
		/**
		 * Stop the slideshow
		 */		
		this.stopShow = function(changeText){
			clearInterval(interval);
			// check if changeText argument is supplied
			if(typeof(changeText) == 'undefined'){
				var changeText = true;
			}
			if(changeText && options.autoControls){
				$autoControls.html($startContent).removeClass('stop').addClass('start');
				autoPlaying = false;
			}
		}
		
		/**
		 * Start the slideshow
		 */		
		this.startShow = function(changeText){
			// check if changeText argument is supplied
			if(typeof(changeText) == 'undefined'){
				var changeText = true;
			}
			setAutoInterval();
			if(changeText && options.autoControls){
				$autoControls.html($stopContent).removeClass('start').addClass('stop');
				autoPlaying = true;
			}
		}
		
		/**
		 * Stops the ticker
		 */		
		this.stopTicker = function(changeText){
			$parent.stop();
			// check if changeText argument is supplied
			if(typeof(changeText) == 'undefined'){
				var changeText = true;
			}
			if(changeText && options.ticker){
				$autoControls.html($startContent).removeClass('stop').addClass('start');
				autoPlaying = false;
			}			
		}
		
		/**
		 * Starts the ticker
		 */		
		this.startTicker = function(changeText){
			if(options.mode == 'horizontal'){
				if(options.tickerDirection == 'next'){
					// get the 'left' property where the ticker stopped
					var stoppedLeft = parseInt($parent.css('left'));
					// calculate the remaining distance the show must travel until the loop
					var remainingDistance = (origShowWidth + stoppedLeft) + $children.eq(0).width();			
				}else if(options.tickerDirection == 'prev'){
					// get the 'left' property where the ticker stopped
					var stoppedLeft = -parseInt($parent.css('left'));
					// calculate the remaining distance the show must travel until the loop
					var remainingDistance = (stoppedLeft) - $children.eq(0).width();
				}
				// calculate the speed ratio to seamlessly finish the loop
				var finishingSpeed = (remainingDistance * options.tickerSpeed) / origShowWidth;
				// call the show
				moveTheShow(tickerLeft, remainingDistance, finishingSpeed);					
			}else if(options.mode == 'vertical'){
				if(options.tickerDirection == 'next'){
					// get the 'top' property where the ticker stopped
					var stoppedTop = parseInt($parent.css('top'));
					// calculate the remaining distance the show must travel until the loop
					var remainingDistance = (origShowHeight + stoppedTop) + $children.eq(0).height();			
				}else if(options.tickerDirection == 'prev'){
					// get the 'left' property where the ticker stopped
					var stoppedTop = -parseInt($parent.css('top'));
					// calculate the remaining distance the show must travel until the loop
					var remainingDistance = (stoppedTop) - $children.eq(0).height();
				}
				// calculate the speed ratio to seamlessly finish the loop
				var finishingSpeed = (remainingDistance * options.tickerSpeed) / origShowHeight;
				// call the show
				moveTheShow(tickerTop, remainingDistance, finishingSpeed);
				// check if changeText argument is supplied
				if(typeof(changeText) == 'undefined'){
					var changeText = true;
				}
				if(changeText && options.ticker){
					$autoControls.html($stopContent).removeClass('start').addClass('stop');
					autoPlaying = true;
				}						
			}
		}
				
		/**
		 * Initialize a new slideshow
		 */		
		this.initShow = function(){
			
			// reinitialize all variables
			// base = this;
			$parent = $(this);
			$origElement = $parent.clone();
			$children = $parent.children();
			$outerWrapper = '';
			$firstChild = $parent.children(':first');
			childrenWidth = $firstChild.width();
			childrenMaxWidth = 0;
			childrenOuterWidth = $firstChild.outerWidth();
			childrenMaxHeight = 0;
			wrapperWidth = getWrapperWidth();
			wrapperHeight = getWrapperHeight();
			isWorking = false;
			$pager = '';	
			currentSlide = 0;	
			origLeft = 0;
			origTop = 0;
			interval = '';
			$autoControls = '';
			$stopHtml = '';
			$startContent = '';
			$stopContent = '';
			autoPlaying = true;
			loaded = false;
			origShowWidth = 0;
			origShowHeight = 0;
			tickerLeft = 0;
			tickerTop = 0;
      
			firstSlide = 0;
			lastSlide = $children.length - 1;
						
			// get the largest child's height and width
			$children.each(function(index) {
			  if($(this).outerHeight() > childrenMaxHeight){
					childrenMaxHeight = $(this).outerHeight();
				}
				if($(this).outerWidth() > childrenMaxWidth){
					childrenMaxWidth = $(this).outerWidth();
				}
			});

			// get random slide number
			if(options.randomStart){
				var randomNumber = Math.floor(Math.random() * $children.length);
				currentSlide = randomNumber;
				origLeft = childrenOuterWidth * (options.moveSlideQty + randomNumber);
				origTop = childrenMaxHeight * (options.moveSlideQty + randomNumber);
			// start show at specific slide
			}else{
				currentSlide = options.startingSlide;
				origLeft = childrenOuterWidth * (options.moveSlideQty + options.startingSlide);
				origTop = childrenMaxHeight * (options.moveSlideQty + options.startingSlide);
			}
						
			// set initial css
			initCss();
			
			// check to show pager
			if(options.pager && !options.ticker){
				if(options.pagerType == 'full'){
					showPager('full');
				}else if(options.pagerType == 'short'){
					showPager('short');
				}
			}
						
			// check to show controls
			if(options.controls && !options.ticker){
				setControlsVars();
			}
						
			// check if auto
			if(options.auto || options.ticker){
				// check if auto controls are displayed
				if(options.autoControls){
					setAutoControlsVars();
				}
				// check if show should auto start
				if(options.autoStart){
					// check if autostart should delay
					setTimeout(function(){
						base.startShow(true);
					}, options.autoDelay);
				}else{
					base.stopShow(true);
				}
				// check if show should pause on hover
				if(options.autoHover && !options.ticker){
					setAutoHover();
				}
			}						
			// make the starting slide active
			if(options.moveSlideQty > 1){
				makeSlideActive(Math.ceil(currentSlide / options.moveSlideQty));
			}else{			
				makeSlideActive(currentSlide);			
			}
			// check for finite show and if controls should be hidden
			checkEndControls();
			// show captions
			if(options.captions){
				showCaptions();
			}
			// perform the callback function
			options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
		}
		
		/**
		 * Destroy the current slideshow
		 */		
		this.destroyShow = function(){			
			// stop the auto show
			clearInterval(interval);
			// remove any controls / pagers that have been appended
			$('.bx-next, .bx-prev, .bx-pager, .bx-auto', $outerWrapper).remove();
			// unwrap all bx-wrappers
			$parent.unwrap().unwrap().removeAttr('style');
			// remove any styles that were appended
			$parent.children().removeAttr('style').not('.pager').remove();
			// remove any childrent that were appended
			$children.removeClass('pager');
			
		}
		
		/**
		 * Reload the current slideshow
		 */		
		this.reloadShow = function(){
			base.destroyShow();
			base.initShow();
		}
		
		// PRIVATE FUNCTIONS
		
		/**
		 * Creates all neccessary styling for the slideshow
		 */		
		function initCss(){
			// layout the children
			setChildrenLayout(options.startingSlide);
			// CSS for horizontal mode
			if(options.mode == 'horizontal'){
				// wrap the <ul> in div that acts as a window and make the <ul> uber wide
				$parent
				.wrap('<div class="'+options.wrapperClass+'" style="width:'+wrapperWidth+'px; position:relative;"></div>')
				.wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+wrapperWidth+'px;"></div>')
				.css({
				  width: '999999px',
				  position: 'relative',
					left: '-'+(origLeft)+'px'
				});
				$parent.children().css({
					width: childrenWidth,
				  'float': 'left',
				  listStyle: 'none'
				});					
				$outerWrapper = $parent.parent().parent();
				$children.addClass('pager');
			// CSS for vertical mode
			}else if(options.mode == 'vertical'){
				// wrap the <ul> in div that acts as a window and make the <ul> uber tall
				$parent
				.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>')
				.wrap('<div class="bx-window" style="width:'+childrenMaxWidth+'px; height:'+wrapperHeight+'px; position:relative; overflow:hidden;"></div>')
				.css({
				  height: '999999px',
				  position: 'relative',
					top: '-'+(origTop)+'px'
				});
				$parent.children().css({
				  listStyle: 'none',
					height: childrenMaxHeight
				});					
				$outerWrapper = $parent.parent().parent();
				$children.addClass('pager');
			// CSS for fade mode
			}else if(options.mode == 'fade'){
				// wrap the <ul> in div that acts as a window
				$parent
				.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>')
				.wrap('<div class="bx-window" style="height:'+childrenMaxHeight+'px; width:'+childrenMaxWidth+'px; position:relative; overflow:hidden;"></div>');
				$parent.children().css({
				  listStyle: 'none',
				  position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 98
				});					
				$outerWrapper = $parent.parent().parent();
				$children.not(':eq('+currentSlide+')').fadeTo(0, 0);
				$children.eq(currentSlide).css('zIndex', 99);
			}
			// if captions = true setup a div placeholder
			if(options.captions && options.captionsSelector == null){
				$outerWrapper.append('<div class="bx-captions"></div>');
			}			
		}
		
		/**
		 * Depending on mode, lays out children in the proper setup
		 */		
		function setChildrenLayout(){			
			// lays out children for horizontal or vertical modes
			if(options.mode == 'horizontal' || options.mode == 'vertical'){
								
				// get the children behind
				var $prependedChildren = getArraySample($children, 0, options.moveSlideQty, 'backward');
				
				// add each prepended child to the back of the original element
				$.each($prependedChildren, function(index) {
					$parent.prepend($(this));
				});			
				
				// total number of slides to be hidden after the window
				var totalNumberAfterWindow = ($children.length + options.moveSlideQty) - 1;
				// number of original slides hidden after the window
				var pagerExcess = $children.length - options.displaySlideQty;
				// number of slides to append to the original hidden slides
				var numberToAppend = totalNumberAfterWindow - pagerExcess;
				// get the sample of extra slides to append
				var $appendedChildren = getArraySample($children, 0, numberToAppend, 'forward');
				
				if(options.infiniteLoop){
					// add each appended child to the front of the original element
					$.each($appendedChildren, function(index) {
						$parent.append($(this));
					});
				}
			}
		}
		
		/**
		 * Sets all variables associated with the controls
		 */		
		function setControlsVars(){
			// check if text or images should be used for controls
			// check "next"
			if(options.nextImage != ''){
				nextContent = options.nextImage;
				nextType = 'image';
			}else{
				nextContent = options.nextText;
				nextType = 'text';
			}
			// check "prev"
			if(options.prevImage != ''){
				prevContent = options.prevImage;
				prevType = 'image';
			}else{
				prevContent = options.prevText;
				prevType = 'text';
			}
			// show the controls
			showControls(nextType, nextContent, prevType, prevContent);
		}			
		
		/**
		 * Puts slideshow into auto mode
		 *
		 * @param int pause number of ms the slideshow will wait between slides 
		 * @param string direction 'forward', 'backward' sets the direction of the slideshow (forward/backward)
		 * @param bool controls determines if start/stop controls will be displayed
		 */		
		function setAutoInterval(){
			if(options.auto){
				// finite loop
				if(!options.infiniteLoop){
					if(options.autoDirection == 'next'){
						interval = setInterval(function(){
							currentSlide += options.moveSlideQty;
							// if currentSlide has exceeded total number
							if(currentSlide > lastSlide){
								currentSlide = currentSlide % $children.length;
							}
							base.goToSlide(currentSlide, false);
						}, options.pause);
					}else if(options.autoDirection == 'prev'){
						interval = setInterval(function(){
							currentSlide -= options.moveSlideQty;
							// if currentSlide is smaller than zero
							if(currentSlide < 0){
								negativeOffset = (currentSlide % $children.length);
								if(negativeOffset == 0){
									currentSlide = 0;
								}else{
									currentSlide = ($children.length) + negativeOffset; 
								}
							}
							base.goToSlide(currentSlide, false);
						}, options.pause);
					}
				// infinite loop
				}else{
					if(options.autoDirection == 'next'){
						interval = setInterval(function(){
							base.goToNextSlide(false);
						}, options.pause);
					}else if(options.autoDirection == 'prev'){
						interval = setInterval(function(){
							base.goToPreviousSlide(false);
						}, options.pause);
					}
				}
			
			}else if(options.ticker){
				
				options.tickerSpeed *= 10;
												
				// get the total width of the original show
				$('.pager', $outerWrapper).each(function(index) {
				  origShowWidth += $(this).width();
					origShowHeight += $(this).height();
				});
				
				// if prev start the show from the last slide
				if(options.tickerDirection == 'prev' && options.mode == 'horizontal'){
					$parent.css('left', '-'+(origShowWidth+origLeft)+'px');
				}else if(options.tickerDirection == 'prev' && options.mode == 'vertical'){
					$parent.css('top', '-'+(origShowHeight+origTop)+'px');
				}
				
				if(options.mode == 'horizontal'){
					// get the starting left position
					tickerLeft = parseInt($parent.css('left'));
					// start the ticker
					moveTheShow(tickerLeft, origShowWidth, options.tickerSpeed);
				}else if(options.mode == 'vertical'){
					// get the starting top position
					tickerTop = parseInt($parent.css('top'));
					// start the ticker
					moveTheShow(tickerTop, origShowHeight, options.tickerSpeed);
				}												
				
				// check it tickerHover applies
				if(options.tickerHover){
					setTickerHover();
				}					
			}			
		}
		
		function moveTheShow(leftCss, distance, speed){
			// if horizontal
			if(options.mode == 'horizontal'){
				// if next
				if(options.tickerDirection == 'next'){
					$parent.animate({'left': '-='+distance+'px'}, speed, 'linear', function(){
						$parent.css('left', leftCss);
						moveTheShow(leftCss, origShowWidth, options.tickerSpeed);
					});
				// if prev
				}else if(options.tickerDirection == 'prev'){
					$parent.animate({'left': '+='+distance+'px'}, speed, 'linear', function(){
						$parent.css('left', leftCss);
						moveTheShow(leftCss, origShowWidth, options.tickerSpeed);
					});
				}
			// if vertical		
			}else if(options.mode == 'vertical'){
				// if next
				if(options.tickerDirection == 'next'){
					$parent.animate({'top': '-='+distance+'px'}, speed, 'linear', function(){
						$parent.css('top', leftCss);
						moveTheShow(leftCss, origShowHeight, options.tickerSpeed);
					});
				// if prev
				}else if(options.tickerDirection == 'prev'){
					$parent.animate({'top': '+='+distance+'px'}, speed, 'linear', function(){
						$parent.css('top', leftCss);
						moveTheShow(leftCss, origShowHeight, options.tickerSpeed);
					});
				}
			}
		}		
		
		/**
		 * Sets all variables associated with the controls
		 */		
		function setAutoControlsVars(){
			// check if text or images should be used for controls
			// check "start"
			if(options.startImage != ''){
				startContent = options.startImage;
				startType = 'image';
			}else{
				startContent = options.startText;
				startType = 'text';
			}
			// check "stop"
			if(options.stopImage != ''){
				stopContent = options.stopImage;
				stopType = 'image';
			}else{
				stopContent = options.stopText;
				stopType = 'text';
			}
			// show the controls
			showAutoControls(startType, startContent, stopType, stopContent);
		}
		
		/**
		 * Handles hover events for auto shows
		 */		
		function setAutoHover(){
			// hover over the slider window
			$outerWrapper.find('.bx-window').hover(function() {
				if(autoPlaying){
					base.stopShow(false);
				}
			}, function() {
				if(autoPlaying){
					base.startShow(false);
				}
			});
		}
		
		/**
		 * Handles hover events for ticker mode
		 */		
		function setTickerHover(){
			// on hover stop the animation
			$parent.hover(function() {
				if(autoPlaying){
					base.stopTicker(false);
				}
			}, function() {
				if(autoPlaying){
					base.startTicker(false);
				}
			});
		}		
		
		/**
		 * Handles fade animation
		 */		
		function setChildrenFade(){
			// fade out any other child besides the current
			$children.not(':eq('+currentSlide+')').fadeTo(options.speed, 0).css('zIndex', 98);
			// fade in the current slide
			$children.eq(currentSlide).css('zIndex', 99).fadeTo(options.speed, 1, function(){
				isWorking = false;
				// ie fade fix
				if(jQuery.browser.msie){
					$children.eq(currentSlide).get(0).style.removeAttribute('filter');
				}
				// perform the callback function
				options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
			});
		};
				
		/**
		 * Makes slide active
		 */		
		function makeSlideActive(number){
			if(options.pagerType == 'full' && options.pager){
				// remove all active classes
				$('a', $pager).removeClass(options.pagerActiveClass);
				// assign active class to appropriate slide
				$('a', $pager).eq(number).addClass(options.pagerActiveClass);
			}else if(options.pagerType == 'short' && options.pager){
				$('.bx-pager-current', $pager).html(currentSlide+1);
			}
		}
				
		/**
		 * Displays next/prev controls
		 *
		 * @param string nextType 'image', 'text'
		 * @param string nextContent if type='image', specify a filepath to the image. if type='text', specify text.
		 * @param string prevType 'image', 'text'
		 * @param string prevContent if type='image', specify a filepath to the image. if type='text', specify text.
		 */		
		function showControls(nextType, nextContent, prevType, prevContent){
			// create pager html elements
			var $nextHtml = $('<a href="#" class="bx-next"></a>');
			var $prevHtml = $('<a href="#" class="bx-prev"></a>');
			// check if next is 'text' or 'image'
			if(nextType == 'text'){
				$nextHtml.html(nextContent);
			}else{
				$nextHtml.html('<img src="'+nextContent+'" />');
			}
			// check if prev is 'text' or 'image'
			if(prevType == 'text'){
				$prevHtml.html(prevContent);
			}else{
				$prevHtml.html('<img src="'+prevContent+'" />');
			}
			// check if user supplied a selector to populate next control
			if(options.prevSelector){
				$(options.prevSelector).append($prevHtml);
			}else{
				$outerWrapper.append($prevHtml);
			}
			// check if user supplied a selector to populate next control
			if(options.nextSelector){
				$(options.nextSelector).append($nextHtml);
			}else{
				$outerWrapper.append($nextHtml);
			}
			// click next control
			$nextHtml.click(function() {
				base.goToNextSlide();
				return false;
			});
			// click prev control
			$prevHtml.click(function() {
				base.goToPreviousSlide();
				return false;
			});
		}
		
		/**
		 * Displays the pager
		 *
		 * @param string type 'full', 'short'
		 */		
		function showPager(type){
			// sets up logic for finite multi slide shows
			var pagerQty = $children.length;
			// if we are moving more than one at a time and we have a finite loop
			if(options.moveSlideQty > 1){
				// if slides create an odd number of pages
				if($children.length % options.moveSlideQty != 0){
					// pagerQty = $children.length / options.moveSlideQty + 1;
					pagerQty = Math.ceil($children.length / options.moveSlideQty);
				// if slides create an even number of pages
				}else{
					pagerQty = $children.length / options.moveSlideQty;
				}
			}
			var pagerString = '';
			// check if custom build function was supplied
			if(options.buildPager){
				for(var i=0; i<pagerQty; i++){
					pagerString += options.buildPager(i, $children.eq(i * options.moveSlideQty));
				}
				
			// if not, use default pager
			}else if(type == 'full'){
				// build the full pager
				for(var i=1; i<=pagerQty; i++){
					pagerString += '<a href="#" class="pager-link pager-'+i+'">'+i+'</a>';
				}
			}else if(type == 'short') {
				// build the short pager
				pagerString = '<span class="bx-pager-current">'+(options.startingSlide+1)+'</span> '+options.pagerShortSeparator+' <span class="bx-pager-total">'+$children.length+'</span>';
			}	
			// check if user supplied a pager selector
			if(options.pagerSelector){
				$(options.pagerSelector).append(pagerString);
				$pager = $(options.pagerSelector);
			}else{
				var $pagerContainer = $('<div class="bx-pager"></div>');
				$pagerContainer.append(pagerString);
				// attach the pager to the DOM
				if(options.pagerLocation == 'top'){
					$outerWrapper.prepend($pagerContainer);
				}else if(options.pagerLocation == 'bottom'){
					$outerWrapper.append($pagerContainer);
				}
				// cache the pager element
				$pager = $('.bx-pager', $outerWrapper);
			}
			$pager.children().click(function() {
				// only if pager is full mode
				if(options.pagerType == 'full'){
					// get the index from the link
					var slideIndex = $pager.children().index(this);
					// accomodate moving more than one slide
					if(options.moveSlideQty > 1){
						slideIndex *= options.moveSlideQty;
					}
					base.goToSlide(slideIndex);
				}
				return false;
			});
		}
				
		/**
		 * Displays captions
		 */		
		function showCaptions(){
			// get the title from each image
		  var caption = $('img', $children.eq(currentSlide)).attr('title');
			// if the caption exists
			if(caption != ''){
				// if user supplied a selector
				if(options.captionsSelector){
					$(options.captionsSelector).html(caption);
				}else{
					$('.bx-captions', $outerWrapper).html(caption);
				}
			}else{
				// if user supplied a selector
				if(options.captionsSelector){
					$(options.captionsSelector).html(' ');
				}else{
					$('.bx-captions', $outerWrapper).html(' ');
				}				
			}
		}
		
		/**
		 * Displays start/stop controls for auto and ticker mode
		 *
		 * @param string type 'image', 'text'
		 * @param string next [optional] if type='image', specify a filepath to the image. if type='text', specify text.
		 * @param string prev [optional] if type='image', specify a filepath to the image. if type='text', specify text.
		 */
		function showAutoControls(startType, startContent, stopType, stopContent){
			// create pager html elements
			$autoControls = $('<a href="#" class="bx-start"></a>');
			// check if start is 'text' or 'image'
			if(startType == 'text'){
				$startContent = startContent;
			}else{
				$startContent = '<img src="'+startContent+'" />';
			}
			// check if stop is 'text' or 'image'
			if(stopType == 'text'){
				$stopContent = stopContent;
			}else{
				$stopContent = '<img src="'+stopContent+'" />';
			}
			// check if user supplied a selector to populate next control
			if(options.autoControlsSelector){
				$(options.autoControlsSelector).append($autoControls);
			}else{
				$outerWrapper.append('<div class="bx-auto"></div>');
				$('.bx-auto', $outerWrapper).html($autoControls);
			}
						
			// click start control
			$autoControls.click(function() {
				if(options.ticker){
					if($(this).hasClass('stop')){
						base.stopTicker();
					}else if($(this).hasClass('start')){
						base.startTicker();
					}
				}else{
					if($(this).hasClass('stop')){
						base.stopShow(true);
					}else if($(this).hasClass('start')){
						base.startShow(true);
					}
				}
				return false;
			});
			
		}
		
		/**
		 * Checks if show is in finite mode, and if slide is either first or last, then hides the respective control
		 */		
		function checkEndControls(){
			if(!options.infiniteLoop && options.hideControlOnEnd){
				// check previous
				if(currentSlide == firstSlide){
					$('.bx-prev', $outerWrapper).hide();				
				}else{
					$('.bx-prev', $outerWrapper).show();
				}
				// check next
				if(currentSlide == lastSlide){
					$('.bx-next', $outerWrapper).hide();
				}else{
					$('.bx-next', $outerWrapper).show();
				}
			}
		}
		
		/**
		 * Returns the left offset of the slide from the parent container
		 */		
		function getSlidePosition(number, side){			
			if(side == 'left'){
				var position = $('.pager', $outerWrapper).eq(number).position().left;
			}else if(side == 'top'){
				var position = $('.pager', $outerWrapper).eq(number).position().top;
			}
			return position;
		}
		
		/**
		 * Returns the width of the wrapper
		 */		
		function getWrapperWidth(){
			var wrapperWidth = $firstChild.outerWidth() * options.displaySlideQty;
			return wrapperWidth;
		}
		
		/**
		 * Returns the height of the wrapper
		 */		
		function getWrapperHeight(){
			// if displaying multiple slides, multiple wrapper width by number of slides to display
			var wrapperHeight = $firstChild.outerHeight() * options.displaySlideQty;
			return wrapperHeight;
		}
		
		/**
		 * Returns a sample of an arry and loops back on itself if the end of the array is reached
		 *
		 * @param array array original array the sample is derived from
		 * @param int start array index sample will start
		 * @param int length number of items in the sample
		 * @param string direction 'forward', 'backward' direction the loop should travel in the array
		 */		
		function getArraySample(array, start, length, direction){
			// initialize empty array
			var sample = [];
			// clone the length argument
			var loopLength = length;
			// determines when the empty array should start being populated
			var startPopulatingArray = false;
			// reverse the array if direction = 'backward'
			if(direction == 'backward'){
				array = $.makeArray(array);
				array.reverse();
			}
			// loop through original array until the length argument is met
			while(loopLength > 0){				
				// loop through original array
				$.each(array, function(index, val) {
					// check if length has been met
					if(loopLength > 0){
						// don't do anything unless first index has been reached
					  if(!startPopulatingArray){
							// start populating empty array
							if(index == start){
								startPopulatingArray = true;
								// add element to array
								sample.push($(this).clone());
								// decrease the length clone variable
								loopLength--;
							}
						}else{
							// add element to array
							sample.push($(this).clone());
							// decrease the length clone variable
							loopLength--;
						}
					// if length has been met, break loose
					}else{
						return false;
					}			
				});				
			}
			return sample;
		}
												
		this.each(function(){
			// make sure the element has children
			if($(this).children().length > 0){
				base.initShow();
			}
		});
				
		return this;						
	}
	
	jQuery.fx.prototype.cur = function(){
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
			return this.elem[ this.prop ];
		}

		var r = parseFloat( jQuery.css( this.elem, this.prop ) );
		// return r && r > -10000 ? r : 0;
		return r;
	}

		
})(jQuery);




//Dynalight_400.font







Cufon.registerFont({"w":140,"face":{"font-family":"Dynalight","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"3 2 5 2 3 5 7 7 10 3","ascent":"288","descent":"-72","x-height":"1","bbox":"-63 -271 279.544 113","underline-thickness":"7.20703","underline-position":"-40.7812","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":86},"F":{"d":"266,-231v-5,34,-46,41,-84,36r-41,95r56,0r-8,17r-55,0r-35,83r-22,0r35,-82v-19,1,-41,0,-54,6r-1,-5v16,-11,40,-15,63,-18r44,-99v-34,-9,-65,-28,-104,-28v-20,0,-34,8,-35,27v0,26,32,28,54,19v-4,11,-7,21,-25,20v-23,-2,-38,-11,-38,-34v0,-61,95,-50,131,-26v7,5,17,7,25,10v17,-22,35,-42,69,-42v15,0,24,7,25,21xm253,-234v-16,-31,-56,10,-65,29v31,7,62,-2,65,-29","w":230,"k":{"q":5,"h":5,"i":5,"j":5,"k":5,"l":5,"m":5,"n":5,"p":5,"u":7,"v":7,"w":7,"x":7,"y":7,"z":5,"a":5,"d":5,"g":5,"r":5,"A":19,"'":-11,"\"":-11,"t":4,"o":7,"e":7,".":11,",":11,"c":7,"s":4}},"G":{"d":"89,-229v39,-35,139,-26,110,42v-10,23,-30,39,-54,49r-3,-5v24,-10,42,-34,42,-67v0,-55,-65,-32,-88,-9v-32,32,-61,73,-66,130v-5,55,63,59,93,29r19,-44r22,0v-25,50,-35,112,-94,128v-4,-8,12,-9,15,-16v15,-14,24,-33,32,-53v-38,30,-115,16,-112,-43v3,-69,46,-107,84,-141","w":196,"k":{"q":-4,"h":4,"i":4,"k":4,"l":4,"m":4,"n":4,"p":4,"u":4,"v":4,"w":4,"y":4,"a":-4,"d":-4,"r":2,"A":11,"'":-5,"\"":-5}},"H":{"d":"129,0v3,-26,0,-56,-6,-76r-41,0r-33,76r-22,0r33,-76v-19,-2,-36,-9,-36,-28v0,-27,33,-33,58,-26v13,-37,32,-68,42,-108v0,-4,-2,-8,-6,-8v-48,14,-77,54,-106,90r-3,-24v31,-31,64,-62,112,-72v37,4,12,58,3,78r-23,54v10,7,17,17,23,28r44,0r64,-154r22,0r-64,154r18,0r-7,16r-17,0r-32,76r-23,0xm80,-123v-17,-6,-46,-5,-45,15v0,15,15,16,31,16xm130,-76v6,17,7,35,7,57r24,-57r-31,0xm116,-92v-5,-9,-11,-17,-18,-22r-10,22r28,0","w":236},"I":{"d":"90,-231v24,-21,71,-35,67,16v-2,45,-18,80,-36,122v9,-9,15,-15,22,-24v13,13,-23,29,-31,42v-21,36,-55,95,-111,71v-5,-5,-8,-11,-8,-19r17,-11v-11,34,20,36,39,16v9,-10,21,-23,32,-42v-103,11,-63,-112,-19,-147v10,-8,19,-17,28,-24xm37,-109v0,29,20,47,50,39v23,-49,55,-98,55,-161v0,-8,-1,-15,-9,-15v-48,25,-96,70,-96,137","w":160},"J":{"d":"101,6r14,3v-1,11,-10,6,-18,5v-25,40,-44,90,-97,99v-14,-1,-21,-9,-21,-23v3,-46,31,-73,66,-99v-44,-30,-43,-122,-11,-166v27,-37,59,-78,117,-78v42,0,33,48,23,85v-7,30,-28,78,-42,110v8,-2,21,-15,23,-1r-28,12xm152,-247v-91,0,-152,143,-97,231v16,-11,34,-21,53,-30r49,-133v4,-17,9,-33,10,-50v0,-13,-2,-18,-15,-18xm-1,83v3,20,21,11,34,0v17,-14,39,-47,51,-73v-11,-4,-21,-7,-30,-13v-25,22,-52,44,-55,86xm63,-10v8,5,15,9,25,12v5,-12,11,-24,15,-37","w":187},"K":{"d":"131,-150v5,71,-12,156,36,178v15,3,23,-22,30,-8v-19,27,-70,22,-77,-15v-7,-37,-14,-96,-8,-144v35,-48,90,-87,146,-113r3,25v-55,13,-99,41,-130,77xm121,-252v37,4,12,58,3,78r-75,174r-22,0r95,-226v2,-9,4,-18,-4,-20v-48,14,-77,54,-106,90r-3,-24v31,-31,64,-62,112,-72","w":211,"k":{"h":4,"i":4,"l":4,"m":4,"n":7,"u":9,"w":9,"y":5,"r":7,"'":-25,"\"":-25,"o":5,"e":5,"c":5,"-":25}},"L":{"d":"51,-35v20,22,87,33,92,-10r8,2v-6,53,-83,57,-109,20v-12,24,-74,42,-74,0v0,-35,49,-44,70,-22v38,-67,32,-180,108,-206v57,-19,65,56,20,69r-6,-21v15,0,27,-7,27,-21v0,-30,-48,-26,-57,-4v-36,54,-42,140,-79,193xm4,-48v-27,0,-38,42,-10,42v18,0,28,-14,37,-27v-9,-7,-14,-15,-27,-15","w":189,"k":{"i":7,"u":11,"x":5,"y":11,"t":7,"-":25,"Y":4}},"M":{"d":"196,-242v36,4,10,58,2,78r-17,40v22,-31,39,-64,80,-73v35,4,11,58,4,77v-17,47,-42,90,-54,142v0,5,1,8,6,8v15,1,20,-24,32,-15v-10,11,-17,23,-36,23v-43,0,-8,-66,-1,-86v17,-46,40,-86,53,-136v-40,-15,-85,62,-102,103r-34,81r-22,0r89,-217v2,-8,5,-18,-4,-19v-84,41,-108,151,-150,236r-22,0r102,-242v2,-8,5,-18,-4,-19v-48,13,-78,51,-106,88r-3,-22v32,-31,63,-63,112,-73v42,10,3,74,-6,97v23,-30,41,-62,81,-71","w":301,"k":{"i":5,"n":5,"u":5,"y":5,"r":4,"t":4,"o":4,"e":4,"c":4,"s":4}},"N":{"d":"179,12v-11,20,-55,37,-57,1v20,-93,70,-154,93,-244v-48,-18,-101,61,-121,107r-53,124r-22,0r97,-229v0,-11,12,-30,1,-36v-48,13,-77,52,-105,88r-3,-22v31,-31,62,-63,111,-72v36,5,13,58,4,78r-14,32v30,-38,49,-76,101,-85v35,5,12,58,4,78v-25,62,-55,120,-74,187v8,18,25,-5,33,-12","w":230,"k":{"i":5,"u":5,"y":5,"o":4,"e":4}},"O":{"d":"92,-134v-4,32,25,47,43,29v4,12,-13,20,-27,20v-67,-15,-15,-127,13,-148v10,-8,23,-19,39,-19v64,0,41,120,17,159v-28,45,-60,89,-121,98v-94,-13,-40,-166,-2,-202v15,-15,29,-31,46,-41r3,4v-40,41,-70,102,-77,176v-3,39,27,67,58,44v53,-39,101,-104,98,-194v-1,-18,-5,-38,-25,-38v-44,12,-59,60,-65,112","w":204,"k":{"q":-4,"f":-4,"h":-2,"a":-4,"d":-4,"g":-4,"r":-4,"A":9,"t":-4,"o":-4,"e":-4,"c":-4,"s":-4}},"P":{"d":"97,-231v34,-29,117,-29,111,28v-9,83,-85,115,-171,127r-32,76r-23,0r32,-75r-24,0v5,-11,10,-21,31,-17v22,-49,38,-106,76,-139xm184,-206v0,-65,-73,-35,-88,-1v-22,31,-35,77,-52,115v82,-2,140,-36,140,-114","w":190,"k":{"f":2,"i":4,"n":9,"u":9,"y":9,"z":7,"a":9,"d":9,"g":9,"A":47,"'":-9,"\"":-9,"o":9,"e":9,".":35,",":35,"c":9,"s":4,"-":26,";":12,":":12}},"Q":{"d":"205,-186v0,81,-47,133,-97,170r48,0r-6,16r-68,0v-19,11,-41,18,-69,18v-12,0,-19,-3,-19,-11v8,-30,58,-21,95,-23v50,-41,89,-97,95,-183v4,-59,-63,-52,-92,-22v-32,33,-59,75,-63,137v-2,38,42,37,54,10r3,4v-11,16,-22,30,-47,30v-56,0,-31,-95,-12,-125v27,-42,60,-87,124,-87v38,0,54,27,54,66xm31,0v-15,-2,-41,12,-17,12v19,0,35,-5,49,-12r-32,0","w":207,"k":{"q":-4,"f":-4,"h":-2,"a":-4,"d":-4,"g":-4,"r":-4,"A":9,"t":-4,"o":-4,"e":-4,"c":-4,"s":-4}},"R":{"d":"90,-231v32,-31,112,-29,111,28v-2,68,-71,76,-113,104v20,59,45,117,78,164r-24,6v-30,-47,-55,-105,-74,-166v9,-24,53,-20,72,-41v20,-15,36,-36,37,-69v-1,-65,-70,-37,-88,-3v-34,63,-60,140,-91,208r-23,0v38,-77,57,-174,115,-231","w":190,"k":{"h":4,"i":4,"u":4,"x":4,"y":5,"A":21,"'":-5,"\"":-5,"-":26,"Y":-7,"T":-11}},"S":{"d":"76,-147v-49,-56,20,-135,91,-96v10,6,15,11,21,20r-17,13v-11,-17,-21,-35,-46,-35v-28,0,-44,18,-45,46v9,54,66,70,66,130v0,49,-44,67,-95,72v-62,6,-84,-61,-44,-98v5,-5,12,-11,19,-16r14,17v-21,11,-42,24,-42,52v0,26,25,35,54,36v57,2,92,-55,54,-98","w":187,"k":{"q":-4,"b":4,"h":4,"i":4,"k":4,"l":4,"m":4,"n":4,"p":4,"u":4,"v":4,"w":4,"x":4,"y":4,"z":4,"a":-4,"d":-4,"g":-4,"'":7,"\"":7,"t":4,"-":21}},"T":{"d":"9,-173v9,-87,150,-93,222,-57v14,7,29,13,46,22r-11,21v-26,-16,-51,-28,-81,-37r-94,224r-23,0r97,-229v-59,-15,-138,-5,-147,50v2,22,39,10,61,13r-6,16v-28,-1,-67,7,-64,-23","w":231,"k":{"h":5,"i":4,"n":44,"u":42,"w":42,"x":42,"y":42,"a":35,"d":18,"g":35,"r":39,"A":56,"'":-30,"\"":-30,"o":40,"e":40,".":26,",":26,"c":40,"s":40,"-":33,";":23,":":23,"L":16}},"U":{"d":"67,3v-39,0,-16,-57,-8,-78v22,-55,48,-104,65,-163v0,-4,-2,-8,-6,-8v-48,14,-77,54,-106,90r-3,-24v31,-31,64,-62,112,-72v37,4,12,57,4,78v-19,54,-46,101,-61,160v1,15,21,6,29,1v75,-46,106,-147,144,-233r23,0r-94,223v-2,8,-2,16,5,17v33,-9,35,-37,57,-63r5,3v-22,29,-30,68,-73,69v-34,-11,-3,-59,4,-79v-27,36,-46,79,-97,79","w":245},"V":{"d":"202,-137v2,9,17,17,7,23v-4,-2,-8,-15,-11,-12v-22,51,-49,99,-94,125v-36,21,-43,-30,-34,-66v15,-61,48,-109,50,-176v-2,-4,-4,-3,-9,-2v-46,14,-70,49,-97,87r-5,-22v31,-30,59,-63,107,-72v37,1,19,55,12,78v-15,51,-37,93,-42,154v-1,14,10,14,20,8v40,-29,69,-75,88,-126v-10,-23,-9,-94,21,-79v8,25,-4,55,-13,80xm208,-198v-14,-2,-16,35,-10,50v4,-15,10,-31,10,-50","w":221,"k":{"i":4,"y":4,"A":9,"t":-2}},"W":{"d":"102,-98v-5,25,-28,70,-9,90v36,-15,51,-59,65,-98r42,-115r21,0v-20,66,-50,122,-61,197v2,28,25,12,35,-1v24,-31,44,-72,60,-113v-10,-23,-9,-94,21,-79v8,25,-4,55,-13,80v2,9,17,17,7,23v-4,-2,-8,-15,-11,-12v-19,46,-40,91,-72,120v-29,26,-51,-8,-43,-47v-16,24,-24,51,-55,56v-43,-10,-17,-77,-8,-109v12,-46,37,-85,39,-137v-2,-4,-4,-3,-9,-2v-46,14,-70,49,-97,87r-5,-22v31,-30,59,-63,107,-72v37,1,20,55,12,78xm269,-198v-14,-2,-14,34,-10,50v4,-16,11,-31,10,-50","w":284,"k":{"h":2,"i":2,"m":2,"u":2,"y":2,"A":9,"t":-2}},"X":{"d":"143,-12v17,1,22,-27,33,-17v-14,14,-20,32,-43,32v-38,0,-17,-68,-24,-104v-38,36,-57,91,-116,105r3,-25v59,-4,79,-62,113,-94r-2,-96v-2,-16,3,-35,-14,-34v-36,14,-51,45,-72,78r-4,-26v26,-27,44,-53,85,-59v43,2,25,66,29,109v37,-35,53,-92,115,-100r-10,22v-57,10,-71,60,-105,93r2,96v1,12,-1,19,10,20","w":221,"k":{"h":4,"i":7,"m":9,"n":9,"p":5,"u":11,"y":11,"r":7,"t":9,"-":21}},"Y":{"d":"67,3v-39,0,-16,-57,-8,-78v22,-55,48,-104,65,-163v0,-4,-2,-8,-6,-8v-48,14,-77,54,-106,90r-3,-24v31,-31,64,-62,112,-72v37,4,12,57,4,78v-19,54,-46,101,-61,160v9,20,36,-3,47,-11v54,-45,86,-123,115,-196r23,0r-101,231r-12,21r23,0r-7,16r-27,0v-20,23,-41,45,-82,46v-17,-1,-30,-6,-29,-23v3,-39,53,-40,99,-39v19,-30,36,-69,51,-106v-28,34,-46,78,-97,78xm21,71v6,29,56,10,65,-5v5,-5,11,-11,17,-19v-34,1,-77,-6,-82,24","w":236,"k":{"i":4,"u":4,"v":4,"A":9}},"Z":{"d":"134,-12v35,3,57,-32,24,-42r15,-14v30,33,-10,72,-56,72v-37,0,-67,-10,-92,-16v-12,7,-25,14,-40,15v-12,0,-20,-4,-20,-15v2,-25,42,-18,64,-14v63,-54,117,-128,162,-201v-43,1,-70,-9,-111,-10v-20,0,-34,9,-35,28v0,25,33,27,54,18v-4,11,-7,21,-25,20v-23,-1,-38,-11,-38,-34v0,-74,112,-37,185,-39v-41,87,-110,161,-180,220v28,6,58,9,93,12xm-26,-15v0,19,30,9,40,0v-12,-2,-32,-12,-40,0","w":223,"k":{"q":-5,"h":4,"i":4,"k":4,"l":4,"m":4,"n":4,"u":5,"v":4,"x":4,"y":5,"a":-5,"d":-5,"g":-5,"r":5,"'":9,"\"":9,"t":4}},"a":{"d":"82,-124v16,-5,15,9,8,22v-6,27,-33,56,-28,82v21,-10,30,-34,46,-49r4,3v-23,21,-32,56,-67,66v-7,0,-11,-5,-12,-11v3,-28,25,-51,27,-76v-27,27,-43,73,-81,88v-28,-7,-9,-49,1,-63v21,-29,45,-59,88,-65r0,3v-39,16,-69,48,-77,95v-1,7,3,9,9,4v32,-30,53,-70,82,-99","w":123},"b":{"d":"45,-13v33,-10,60,-31,80,-56r4,4v-29,37,-64,58,-119,65r0,-3v39,-17,69,-47,76,-94v0,-6,-3,-11,-9,-5v-32,29,-53,75,-84,102v-9,8,-15,-4,-11,-14r42,-99v-13,21,-26,34,-41,55r-5,-4v36,-44,67,-94,89,-152r21,0r-74,175v31,-21,43,-77,84,-88v32,8,5,57,-6,72v-12,16,-28,32,-47,42"},"c":{"d":"9,-7v37,-8,54,-35,77,-61r4,4v-26,27,-41,61,-88,64v-16,-4,-30,-12,-28,-32v4,-53,42,-86,89,-94v22,-4,22,30,5,37v-6,2,-13,5,-19,6v6,-9,14,-16,14,-29v0,-5,-1,-8,-6,-8v-35,16,-57,53,-63,97v-2,11,5,16,15,16","w":102},"d":{"d":"-9,-29v-1,7,3,9,9,4v52,-51,89,-114,117,-189r21,0r-79,190v5,10,13,-2,17,-6r32,-39r4,3v-23,21,-32,56,-67,66v-7,0,-11,-5,-12,-11v3,-28,25,-49,27,-75v-28,27,-41,72,-81,87v-28,-7,-10,-52,1,-66v21,-28,47,-55,88,-62r0,3v-38,17,-69,48,-77,95","w":123},"e":{"d":"74,-107v-4,38,-38,54,-75,60v-6,12,-9,40,8,40v37,-8,54,-35,77,-61r4,4v-25,27,-40,64,-84,64v-19,0,-30,-10,-30,-29v0,-53,35,-88,82,-97v12,-2,19,7,18,19xm56,-111v0,-12,-11,-9,-17,-2v-16,15,-30,38,-38,61v29,-7,55,-27,55,-59","w":100},"f":{"d":"67,-202v8,-15,42,-24,42,2v0,50,-43,76,-71,105r-41,99v28,-22,51,-44,74,-72v-4,34,-57,61,-80,85r-27,66r-25,8r85,-204r-41,55r-5,-4v39,-41,60,-92,89,-140xm102,-200v0,-15,-12,-11,-18,0v-15,25,-27,62,-40,91v24,-26,58,-49,58,-91","w":87,"k":{"?":-7,"'":-14,"\"":-14}},"g":{"d":"53,-12v19,-17,36,-35,53,-56r5,4v-19,25,-40,44,-63,64v-21,36,-24,92,-73,99v-38,-3,-15,-49,2,-62r49,-36v10,-29,28,-59,34,-88v-27,27,-43,73,-81,88v-28,-7,-9,-49,1,-63v21,-29,45,-59,88,-65r0,3v-39,16,-69,48,-77,95v-1,7,3,9,9,4v33,-29,52,-72,83,-99v8,-7,15,4,11,14xm-40,78v0,17,20,18,29,4v12,-19,22,-48,32,-71v-24,22,-61,28,-61,67","w":122},"h":{"d":"84,-18v-5,12,-35,29,-40,7v8,-34,26,-63,37,-95v-1,-6,-9,-2,-10,1r-70,101v-11,10,-22,-1,-16,-14r40,-96r-42,56r-5,-4v35,-45,68,-93,89,-152r21,0r-72,176v30,-24,35,-75,75,-89v13,-1,17,12,11,22v-7,28,-32,60,-29,85v20,-10,30,-34,46,-49r4,3","w":134},"i":{"d":"51,-180v0,-10,5,-16,14,-16v17,0,13,29,-3,29v-6,1,-11,-7,-11,-13xm28,-18v-6,12,-34,29,-41,7v5,-34,32,-65,35,-94v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,8,15,5,25v-10,26,-25,53,-30,80v22,-3,31,-34,48,-48r4,3","w":77},"j":{"d":"5,-11v20,-17,36,-34,55,-57v4,24,-44,50,-60,70r-36,82r-27,7r85,-196v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,9,16,5,25xm51,-180v0,-10,5,-16,14,-16v17,0,13,29,-3,29v-6,1,-11,-7,-11,-13","w":76},"k":{"d":"52,-33v-2,26,31,17,37,3r32,-39r4,3v-23,21,-33,59,-69,66v-47,-17,1,-70,21,-81v6,-6,16,-27,4,-32v-4,0,-9,5,-10,8r-69,101v-11,10,-23,1,-17,-14r40,-96r-42,56r-5,-4v40,-45,66,-92,88,-152r22,0r-73,174v1,4,3,2,6,-1v18,-26,33,-57,55,-80v11,-12,32,-6,30,13v-3,39,-52,35,-54,75","w":136,"k":{"'":18,"\"":18}},"l":{"d":"23,-18v-5,12,-33,29,-39,7v9,-37,28,-69,41,-104v-11,20,-29,40,-42,57r-5,-4v36,-45,68,-93,89,-152r21,0r-80,190v4,10,14,-1,17,-6r32,-39r5,3","w":72},"m":{"d":"139,-103v1,-8,-7,-7,-10,-2r-55,86v-5,12,-24,29,-30,11v5,-36,39,-70,36,-102v-29,31,-47,75,-75,106v-10,11,-23,-2,-16,-14v9,-28,30,-60,33,-87v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,9,16,5,25v-8,21,-21,42,-24,63v26,-25,35,-68,66,-87v17,-6,23,8,16,24r-26,61v1,3,3,2,6,-1r52,-79v11,-14,39,-4,26,15v-7,28,-32,60,-29,85v21,-10,30,-34,46,-49r4,3v-23,21,-32,56,-66,66v-20,-1,-11,-24,-5,-36","w":192},"n":{"d":"88,-18v-5,12,-35,29,-40,7v8,-34,26,-63,37,-95v-1,-5,-9,-3,-10,1r-70,101v-11,10,-23,-2,-16,-14v9,-28,30,-60,33,-87v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,9,16,5,25v-8,21,-21,42,-24,63v29,-26,36,-74,75,-89v13,-1,15,12,11,22v-11,28,-27,56,-32,84v22,-2,32,-34,49,-48r4,3","w":138},"o":{"d":"64,-121v34,5,19,59,6,78v14,-3,21,-15,30,-24r4,3v-11,13,-18,25,-38,27v-14,18,-27,38,-56,38v-63,0,-25,-100,7,-113v9,-5,21,-16,30,-13v-28,26,-52,56,-52,108v15,25,40,-9,49,-23v-30,-17,-13,-79,20,-81xm64,-113v-28,1,-39,53,-17,68v10,-17,21,-35,23,-59v0,-5,-2,-9,-6,-9","w":117},"p":{"d":"45,-13v33,-10,59,-30,79,-56r5,4v-30,37,-64,59,-120,65r0,-3v39,-17,69,-47,77,-94v1,-8,-5,-11,-11,-4v-48,51,-86,114,-112,184r-25,8r86,-204r-42,55r-4,-3v21,-32,48,-58,64,-95r21,0v-14,38,-35,76,-45,113v28,-26,40,-72,80,-84v31,10,6,57,-6,72v-12,16,-29,32,-47,42"},"q":{"d":"67,-107v6,-8,21,-29,29,-12v-11,38,-29,70,-43,106v19,-16,36,-34,53,-55v6,20,-38,46,-53,63v-4,41,-5,94,-41,104v-23,0,-15,-29,-9,-43r57,-143v-27,27,-43,73,-81,88v-28,-7,-9,-49,1,-63v21,-29,45,-59,88,-65r0,3v-39,16,-69,48,-77,95v-1,7,3,9,9,4v26,-24,48,-56,67,-82xm17,76v-2,3,-6,14,0,15v23,-14,25,-56,30,-89","w":123},"r":{"d":"26,-120v14,3,36,-5,29,17v-9,27,-26,54,-31,82v22,-2,31,-34,48,-48r5,3v-23,21,-32,56,-67,66v-19,-2,-7,-24,-3,-36v8,-24,28,-51,27,-75v-28,1,-32,38,-51,53r-5,-4r40,-52v-17,-5,-6,-34,8,-34v16,1,9,21,0,28","w":88},"s":{"d":"78,-65v-26,30,-56,64,-107,64v-11,-10,8,-33,21,-26v1,4,-3,12,3,12v32,-7,41,-63,28,-96r-40,53r-5,-4r42,-54v-10,-16,17,-41,29,-26v-17,22,12,64,-10,93v-5,12,-14,22,-22,31v22,-13,40,-29,57,-51","w":90},"t":{"d":"30,-20v-9,14,-37,31,-46,8v10,-36,28,-69,41,-103v-11,20,-29,40,-42,57r-5,-4v27,-32,47,-60,65,-97r-43,0r3,-7r43,0r14,-33r21,0r-13,33r49,0r-3,7r-49,0r-57,137v6,13,18,-3,23,-8r32,-39r4,3","w":78,"k":{"'":-23,"\"":-23}},"u":{"d":"19,-112v5,-9,25,-22,30,-5v-9,34,-27,59,-35,95v42,6,43,-97,90,-105v8,-1,11,10,6,16v-8,30,-33,64,-31,91v20,-10,30,-34,46,-49r4,3v-23,21,-32,56,-67,66v-8,0,-12,-4,-12,-11v3,-28,25,-51,27,-76v-26,26,-31,77,-71,87v-18,0,-14,-25,-9,-38v8,-21,25,-47,25,-67v-15,13,-25,31,-38,45r-5,-3"},"v":{"d":"10,1v-24,0,-16,-36,-8,-51v5,-18,21,-39,20,-55v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,9,16,5,25v-11,29,-25,54,-32,87v15,16,34,-21,46,-33v-16,-31,4,-77,35,-80v10,-1,16,7,15,18v-3,28,-18,49,-34,66v23,4,35,-11,46,-24r4,3v-11,16,-29,32,-54,26v-16,17,-32,39,-60,39xm92,-117v-23,-5,-40,40,-29,65v10,-20,31,-39,29,-65","w":136},"w":{"d":"15,-8v41,-17,52,-65,70,-105r21,0r-38,99v15,16,33,-19,45,-30v-16,-33,4,-79,37,-83v11,0,15,7,15,18v-3,31,-22,50,-37,70v27,2,34,-14,48,-28r4,4v-16,18,-28,35,-56,28v-15,16,-32,33,-58,36v-13,1,-17,-15,-14,-29v-12,13,-26,26,-44,29v-23,-1,-14,-37,-7,-51v4,-18,22,-38,19,-55v-15,13,-25,31,-38,45r-4,-3r49,-59v18,-14,22,6,16,21r-33,87v1,3,2,5,5,6xm149,-117v-24,-4,-42,40,-32,67v11,-21,31,-36,32,-67","w":193},"x":{"d":"69,-18v-4,12,-35,29,-37,7r-3,-34v-18,19,-27,41,-57,45v1,-5,-4,-20,4,-16v26,-3,37,-20,52,-37v-3,-16,0,-39,-7,-51v-14,13,-24,30,-37,44r-5,-3v21,-20,31,-50,58,-63v15,4,7,31,12,46v16,-20,23,-37,49,-43r2,21v-24,-4,-36,16,-51,31v4,16,0,40,9,51v21,-10,30,-34,46,-49r4,3","w":119},"y":{"d":"67,-11v21,-16,37,-34,55,-57v4,24,-44,50,-60,70r-36,82r-27,7r78,-178v-26,26,-31,77,-71,87v-18,0,-14,-25,-9,-38v8,-21,25,-47,25,-67v-15,13,-25,31,-38,45r-5,-3v20,-21,32,-50,60,-63v14,1,9,16,5,25v-10,27,-23,49,-30,79v42,6,43,-97,90,-105v8,-1,11,10,6,16","w":138},"z":{"d":"21,-5v23,-18,42,-37,63,-63v0,28,-47,49,-61,73v-5,41,-21,76,-55,88v-6,1,-11,-4,-10,-11v5,-29,29,-49,46,-66v1,-9,1,-20,-2,-27v-7,5,-25,9,-25,-2v0,-11,19,-15,30,-10v16,-19,35,-43,38,-73v2,-14,-14,-15,-24,-7v-14,11,-26,32,-37,43r-5,-3v21,-21,40,-65,75,-65v12,0,18,9,18,22v0,40,-33,67,-58,88v4,3,6,7,7,13xm-36,82v0,8,7,6,12,0v12,-14,21,-34,26,-56v-15,14,-33,33,-38,56xm-19,-13v5,8,27,-5,10,-5v-7,0,-9,1,-10,5","w":100},"0":{"d":"57,-190v35,-36,110,-31,104,34v-6,75,-38,129,-91,154v-76,36,-94,-68,-59,-129v13,-22,29,-42,46,-59xm124,-95v21,-36,23,-143,-35,-104v-43,29,-70,84,-75,151v-4,60,55,47,73,15v15,-16,25,-41,37,-62","w":173},"1":{"d":"24,0r-22,0r80,-191r-76,82r-6,-6r90,-97r22,0","w":111,"k":{"4":4}},"2":{"d":"95,-205v-46,0,-79,47,-59,89r-22,12v-12,-62,31,-108,89,-111v59,-3,55,76,23,106v-38,36,-89,59,-132,91v27,-10,74,10,96,-11r7,3r-24,29v-35,-3,-83,-19,-111,0r-4,-5v54,-47,128,-72,164,-135v14,-26,7,-68,-27,-68","w":155,"k":{"9":-5,"5":-4,"4":5}},"3":{"d":"89,-85v3,-31,-23,-48,-51,-36r-2,-7v30,-11,67,-18,70,-57v0,-13,-8,-23,-21,-22v-26,1,-38,20,-45,39r-14,-18v20,-26,95,-47,104,2v-3,32,-31,41,-57,50v45,3,52,65,24,95v-33,36,-82,56,-142,64r-1,-7v66,-11,129,-32,135,-103","w":150,"k":{"9":4,"6":4,"5":5,"3":7,"1":4}},"4":{"d":"76,-38v-35,1,-71,-15,-100,-1r-3,-6v58,-47,108,-108,150,-169r20,9v-41,58,-95,113,-153,155v22,-17,63,-5,91,-1r44,-104r21,0r-43,104v12,0,23,-1,30,-5v-3,15,-22,12,-35,17r-16,39r-22,0","w":164},"5":{"d":"60,-207v33,-16,75,18,105,-4r2,6v-22,22,-63,27,-94,11v-3,0,-7,1,-10,2r-46,82v23,-34,112,-34,105,24v-9,78,-85,97,-160,111r-1,-7v66,-11,129,-32,135,-103v5,-45,-52,-44,-74,-20r-11,11r-10,-11","w":155,"k":{"9":2,"6":2,"5":4,"3":4,"1":4}},"6":{"d":"49,4v-72,5,-67,-94,-32,-134v36,-41,83,-74,150,-83r0,6v-63,14,-112,49,-139,99v16,-16,36,-32,66,-32v33,0,50,22,50,54v0,53,-40,87,-95,90xm51,-5v51,0,82,-60,62,-111v-7,-8,-13,-12,-28,-12v-41,0,-71,25,-71,71v0,29,8,52,37,52","w":169,"k":{"9":2,"8":-4,"4":-4,"2":-4,"1":2}},"7":{"d":"40,-215v34,7,85,9,118,-1r5,4v-59,65,-125,113,-150,212r-27,0v28,-90,94,-141,153,-199v-32,14,-100,-4,-118,26r-6,-3","w":128,"k":{"9":-4,"8":4,"7":-9,"6":5,"4":14,"3":-4,"2":-4,"1":2}},"8":{"d":"39,-163v-4,-56,100,-74,100,-12v0,35,-31,44,-54,57v14,17,34,30,35,61v3,69,-137,85,-137,13v0,-46,44,-57,76,-72v-10,-13,-19,-26,-20,-47xm41,-7v54,0,75,-60,36,-89r-12,-14v-29,15,-67,25,-67,66v0,24,17,37,43,37xm99,-206v-45,-2,-46,60,-19,81v21,-11,46,-20,46,-51v0,-18,-9,-30,-27,-30","w":155,"k":{"9":2,"5":4,"4":-4,"1":4}},"9":{"d":"99,-215v72,-5,67,93,32,134v-35,41,-84,74,-150,83r0,-6v63,-14,111,-49,139,-98v-16,16,-35,31,-66,31v-33,-1,-50,-21,-50,-53v0,-53,40,-88,95,-91xm97,-206v-50,0,-83,61,-62,111v6,8,13,14,28,13v41,-4,70,-28,71,-72v1,-29,-8,-52,-37,-52","w":169,"k":{"9":-4,"4":5,"3":4}},"$":{"d":"34,-116v-32,-31,-14,-95,41,-86r10,-28r7,2r-9,28v14,3,24,11,31,21r-15,12v-6,-12,-12,-20,-18,-24r-24,71v37,27,31,108,-32,101r-12,35r-8,-2r11,-34v-14,-4,-26,-12,-34,-22r14,-12v7,11,14,19,23,26r24,-75v-5,-6,-4,-7,-9,-13xm73,-195v-41,-7,-49,46,-22,67xm27,-26v40,3,47,-47,23,-69","w":119},"%":{"d":"94,-186v-3,37,-24,71,-59,71v-16,0,-25,-12,-25,-29v2,-38,24,-66,59,-70v16,-2,25,11,25,28xm66,-207v-29,8,-44,47,-37,80v2,2,5,4,8,4v28,-7,37,-37,41,-68v0,-10,-4,-16,-12,-16xm22,0r-15,0r141,-214r15,0xm160,-71v-2,38,-24,71,-59,71v-15,0,-26,-12,-25,-28v3,-37,23,-71,59,-71v15,0,25,12,25,28xm133,-92v-29,7,-47,50,-37,81v31,9,45,-33,48,-64v0,-10,-3,-17,-11,-17","w":189},"#":{"d":"-4,-36r18,-41r-23,0v1,-10,15,-8,26,-8r19,-43r-24,0v1,-11,16,-8,27,-8r17,-37r9,0r-17,37r25,0r16,-37r9,0r-16,37r24,0v-1,11,-16,8,-27,8r-19,43r25,0v-1,11,-17,7,-29,8r-18,41r-8,0r18,-41r-25,0r-18,41r-9,0xm51,-85r19,-43r-25,0r-19,43r25,0","w":118},"+":{"d":"62,-96r-19,48r-15,0r20,-48r-47,0r6,-14r46,0r20,-48r14,0r-19,48r49,0r-6,14r-49,0"},"=":{"d":"-2,-78r6,-13r103,0r-6,13r-103,0xm11,-114r6,-14r102,0r-5,14r-103,0"},"<":{"d":"11,-103r100,-55r-8,19r-71,39r49,49r-5,14"},">":{"d":"105,-92r-100,55r8,-19r70,-39r-49,-49r6,-14"},"|":{"d":"37,58r0,-310r14,0r0,310r-14,0","w":87},"@":{"d":"107,-83v29,-19,43,-85,79,-75v-7,32,-29,60,-34,91v46,-5,66,-56,71,-107v8,-77,-83,-66,-119,-30v-34,34,-64,76,-68,142v-4,57,53,69,93,47r3,6v-45,30,-124,15,-119,-53v7,-90,54,-146,122,-172v51,-20,110,1,105,58v-5,65,-38,113,-100,122v-29,-14,17,-57,12,-76v-24,22,-35,72,-75,76v-24,-48,33,-99,82,-111r0,3v-34,14,-60,43,-67,83v-1,6,3,8,8,4v2,-2,4,-5,7,-8","w":250},"^":{"d":"33,-173r63,-73r19,0r6,73r-20,0r-1,-58r-46,58r-21,0","w":131},"~":{"d":"116,-121v-9,16,-16,36,-38,36v-19,0,-21,-19,-36,-23v-12,3,-15,10,-22,23r-14,0v9,-33,44,-48,64,-17v15,11,26,-7,32,-19r14,0"},"\/":{"d":"-28,0r-16,0r165,-246r15,0","w":92},"\\":{"d":"53,0r-27,-252r13,0r27,252r-13,0","w":92},"'":{"d":"33,-175r-8,0r21,-64r22,0","w":28,"k":{"F":-21,"A":84,"t":-9,"Y":-25,"T":-25,"L":28,"H":-25,"B":28,"D":-30,"K":-18,"M":-26,"N":-26,"P":7,"U":-25,"V":-25,"W":-25,"X":-25,"Z":-21}},"\"":{"d":"62,-175r-8,0r21,-64r22,0xm33,-175r-8,0r21,-64r22,0","w":58,"k":{"F":-21,"A":84,"t":-9,"Y":-25,"T":-25,"L":28,"H":-25,"B":28,"D":-30,"K":-18,"M":-26,"N":-26,"P":7,"U":-25,"V":-25,"W":-25,"X":-25,"Z":-21}},"&":{"d":"75,-83v16,0,24,14,21,31r49,0r-8,16r-46,0v-11,20,-29,39,-58,39v-22,0,-40,-9,-39,-33v2,-40,39,-53,63,-71v-3,-8,-19,-7,-17,-20v2,-28,47,-52,69,-30v12,12,-8,19,-14,26v4,-13,-2,-25,-13,-26v-22,-2,-29,26,-11,34v8,4,15,15,1,18v-27,12,-50,35,-55,68v4,38,59,14,66,-5v-20,1,-32,-7,-34,-23v1,-15,9,-25,26,-24xm90,-52v8,-22,-18,-36,-32,-19v-6,18,13,21,32,19","w":155},"(":{"d":"143,-268v-67,68,-136,155,-120,287r-6,0v-43,-129,45,-233,120,-287r6,0","w":105},")":{"d":"-35,19v66,-67,136,-156,120,-287r6,0v45,125,-46,231,-120,287r-6,0","w":105},"[":{"d":"-23,19r119,-287r44,0v0,13,-16,8,-28,9r-113,269r25,0r-3,9r-44,0","w":115},"]":{"d":"-19,19v0,-13,16,-8,28,-9r113,-269r-25,0r4,-9r44,0r-120,287r-44,0","w":115},"{":{"d":"21,19v-60,-45,33,-102,5,-143v47,-18,35,-97,76,-123v12,-8,24,-15,38,-21v-14,24,-56,37,-56,85v0,30,-14,50,-37,59v29,48,-69,82,-22,139","w":113},"}":{"d":"81,-144v-1,15,15,21,-2,27v-38,15,-24,81,-55,106v-14,12,-31,22,-49,30v-4,-14,23,-12,28,-26v39,-22,15,-102,66,-119v-5,-3,-7,-8,-7,-16v3,-39,41,-49,41,-89v0,-15,-5,-26,-13,-33v13,-8,26,18,27,36v0,39,-33,49,-36,84","w":113},"*":{"d":"66,-172r-13,28r-14,-9r21,-24r-30,-4r6,-16r26,13r-4,-30r17,0r-5,30r27,-13r5,16r-30,4r21,24r-14,9","w":86},".":{"d":"-5,-24v7,-1,13,7,13,13v0,7,-6,13,-13,13v-6,0,-14,-6,-13,-13v-1,-6,7,-14,13,-13","w":47},",":{"d":"-5,-24v27,11,1,42,-15,47v-7,-10,12,-11,13,-21v-14,-2,-14,-26,2,-26","w":47},":":{"d":"35,-111v7,-1,13,7,13,13v0,7,-6,13,-13,13v-7,0,-13,-6,-13,-13v0,-6,6,-14,13,-13xm-16,-11v-1,-9,14,-18,22,-9v7,9,2,22,-9,22v-6,0,-14,-6,-13,-13","w":75},";":{"d":"-3,-24v27,10,1,42,-15,47v-7,-10,12,-11,13,-21v-14,-2,-14,-26,2,-26xm35,-111v7,-1,13,7,13,13v0,7,-6,13,-13,13v-7,0,-13,-6,-13,-13v0,-6,6,-14,13,-13","w":75},"!":{"d":"7,-35r-5,0r85,-211r25,0xm-16,-12v1,-15,24,-15,25,0v0,16,-25,17,-25,0","w":78},"?":{"d":"22,-24v7,-1,13,7,13,13v0,7,-6,13,-13,13v-6,0,-14,-6,-13,-13v-1,-6,7,-14,13,-13xm148,-204v-9,85,-93,99,-117,169r-8,0v22,-68,102,-86,102,-170v0,-18,-8,-34,-27,-34v-30,0,-49,23,-52,54v-2,24,32,32,43,14v5,13,-18,17,-30,20v-18,-1,-31,-11,-32,-29v-3,-62,113,-96,121,-24","w":147},"-":{"d":"10,-72r7,-21r89,0r-7,21r-89,0","k":{"F":46,"Y":44,"T":52,"H":14,"K":28,"M":14,"N":14,"U":39,"V":44,"W":44,"X":37,"S":-4}},"_":{"d":"-38,45r6,-15r85,0r-7,15r-84,0","w":90},"`":{"d":"54,-148r-16,-34r22,0r0,34r-6,0","w":87},"D":{"d":"130,-252v107,-5,123,138,63,204v-23,25,-47,51,-92,51v-26,0,-41,-13,-55,-25v-12,26,-71,39,-73,-1v-2,-33,47,-45,66,-22r47,-110v-34,1,-66,-2,-68,-32v7,-48,57,-63,112,-65xm37,-193v1,25,30,22,56,22r26,-62r22,0r-26,62r57,0r-6,16r-57,0v-18,39,-34,88,-55,122v12,13,24,25,47,25v73,0,105,-73,105,-148v0,-53,-25,-90,-79,-90v-44,0,-83,15,-90,53xm9,-48v-27,-3,-38,42,-10,42v20,0,26,-15,35,-28v-7,-6,-14,-13,-25,-14","w":247},"A":{"d":"200,-240v19,-16,62,-20,59,16v-3,51,-31,88,-46,130r18,0r-7,16r-17,0r-33,78r-23,0r32,-78r-76,0v-22,38,-43,81,-96,81v-22,0,-36,-13,-36,-34v0,-52,57,-64,117,-63r34,-56v23,-35,44,-67,74,-90xm237,-209v9,-20,10,-43,-15,-35v-52,35,-70,93,-106,150r74,0xm-16,-31v-2,36,55,27,66,5v12,-15,23,-34,32,-52v-49,0,-95,5,-98,47","w":258},"B":{"d":"180,-62v-1,42,-30,64,-73,65v-32,0,-48,-16,-67,-29v-11,15,-23,29,-45,29v-16,0,-28,-9,-28,-27v0,-35,43,-42,64,-23v41,-76,43,-192,146,-206v27,2,47,15,47,43v0,45,-49,45,-67,73v5,24,24,45,23,75xm46,-36v16,13,32,28,58,29v57,2,61,-70,35,-109v-2,-5,-3,-9,-3,-12v16,-31,62,-35,65,-81v2,-37,-48,-43,-66,-18v-38,54,-54,134,-89,191xm1,-48v-27,-3,-37,42,-8,42v20,0,26,-16,33,-31v-7,-5,-15,-11,-25,-11","w":223,"k":{"q":-4,"h":2,"i":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"u":2,"v":2,"w":2,"x":2,"y":2,"a":-4,"d":-4,"g":-4,"r":2}},"C":{"d":"79,-218v24,-35,122,-56,122,12v0,40,-27,64,-58,76r-4,-4v24,-11,43,-38,42,-73v-1,-67,-74,-28,-94,-1v-28,38,-59,80,-59,143v0,35,12,60,49,57v21,-2,37,-12,52,-25r4,6v-34,43,-135,42,-130,-37v5,-72,36,-119,76,-154","w":185,"k":{"u":4,"w":4,"y":4,"z":2,"r":-4,"A":18,"'":-5,"\"":-5}},"E":{"d":"59,-176v-11,0,-27,9,-30,-3v11,-1,21,-3,31,-5v8,-35,29,-65,68,-68v12,0,22,9,21,21v-4,34,-41,40,-71,51v1,11,9,17,8,30v-5,49,-71,39,-71,97v0,60,84,52,110,19r4,5v-30,38,-138,52,-138,-20v0,-47,45,-55,69,-79v14,-13,-4,-27,-1,-48xm120,-244v-26,0,-42,26,-43,57v28,-9,53,-17,55,-45v0,-8,-4,-12,-12,-12","w":162,"k":{"q":-7,"b":4,"f":4,"h":4,"i":4,"j":4,"k":4,"l":4,"m":4,"n":4,"p":2,"u":5,"v":5,"w":5,"x":4,"y":5,"z":2,"a":-7,"d":-7,"g":-7,"r":4,"t":4}},"\u00a0":{"w":86}}});