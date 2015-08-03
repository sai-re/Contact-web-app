$(document).ready(function() {
    
//constructor for object 
    function ContactItem (name, email, number,address) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.address = '6539 Wilton Ave' + '<br>' + 'Culver City CA 90234';
    }
//new object instances of constructor intalized in array of objects
    var contactarray = [
        new ContactItem('Christian', 'christian@yahoo.com', '323-555-124'),
        new ContactItem('Rich', 'rich@tripod.com', '323-555-124'),
        new ContactItem('Scott', 'scott@mailinator.com', '555-555-555'),
        new ContactItem('Danny', 'danny@hotmail.com', '323-555-124'),
        new ContactItem('Taka', 'taka@myspace.com', '323-555-124'),
        new ContactItem('Tim', 'tim@netscape.com', '323-555-124'),
        new ContactItem('Patrick', 'patrick@live.com', '323-555-124'),
        new ContactItem('Jacques', 'jacques@aol.com', '323-555-124')
    ];
    
    //variable defined for html elements
    var contact = $('#contacts'), 
        contactinfo = $('#contactinfo'),
        contactbox = $('#contactbox'); //save
    
//function to print out names into list
    (function displayName() {
        //for loop that loops through array of objects to append list items to unordered list element
        for (var i = 0; i < contactarray.length; i++) {
            contact.append('<li class="itemname"><a href="#">' + contactarray[i].name + '</a></li>');
        }
    }()); //IIFE as it's always running
    
//function to print other information based on option choice 
    function displayinfo () {
        contactinfo.empty(); //empties the list so it doesn't add on existing 
        for (var i = 0; i < contactarray.length; i++) {
            contactinfo.append('<li class="itemname">' + contactarray[i][$('#dropdown').val()] + '</li>');
            //uses the value of #dropdown that matches object property 
            $(".itemname").css("background-color", "inherit"); //changes css back to default after back btn is pressed
            contactbox.empty();
            
        } 
        
        $(contactinfo).css("display", "inline-block");
            
    }
    
//function that contains full user information
    function displaysingle(contactid) {
        //gets access to object information 
        var Email = contactarray[contactid].email,
            Number = contactarray[contactid].number,
            Address = contactarray[contactid].address,
            backBtn = '<a id="backbtn" href="#">Back</a>',
            space = '<br><br>';

        var boxcontent = '<div class="contactcontent"> <a id="link">'+ Email +'</a>' + space + Number + space + Address + space + backBtn + '</div>';
        
        contactbox.append(boxcontent); //appends box content to list
    }
    
    displayinfo();
    $('#dropdown').change(displayinfo); //calls function again if there is a change to #dropdown
    
//click event listener to display user information if user is clicked
    $('.itemname').on('click', function(event) {
        //for in loop to gain access to name property 
        for (i in contactarray) {
            //if target of what I click on page is same as property name run code
            if ( $(event.target).html() === contactarray[i].name ) {  
                
                $(".itemname").css("background-color", "inherit");//changes what i previously clicked to default
                $(this).css("background-color", "rgb(79,79,79"); //changes what I click to white
                
                contactid = i; 
                contactbox.empty(); //empty list when name is clicked
                $(contactinfo).css("display", "none");
                displaysingle(contactid);
            }
        }
    })
    
    //click event for back button
        contactbox.on('click','#backbtn', function(event) {
            //event.preventDefault();
            contactbox.empty();
            displayinfo(); 
    })
})