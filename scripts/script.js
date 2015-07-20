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
    
    var contact = $('#contacts'),
        contactinfo = $('#contactinfo');
    
//function to print out names into list
    (function displayName() {
        for (i = 0; i < contactarray.length; i++) {
            contact.append('<li class="itemname"><a href="#">' + contactarray[i].name + '</a></li>');
        }
    })();
//function to print other information based on option choice 
    function displayinfo () {
        contactinfo.empty(); //empties the list 
        for (i = 0; i < contactarray.length; i++) {
            contactinfo.append('<li class="itemname">' + contactarray[i][$('#dropdown').val()] + '</li>');
            $(".itemname").css("background-color", "inherit");
        } //uses the value of #dropdown that matches object property 
    }
//function that contains full user information
    function displaysingle(contactid) {
        var Email = contactarray[contactid].email;
        var Number = contactarray[contactid].number;
        var Address = contactarray[contactid].address;
        
        var backBtn = '<a id="backbtn" href="#">Back</a>';
        var boxcontent = '<li class="single"><a id="link">' + Email+'</a><br><br>' + Number + '<br><br>' + Address + '<br><br>' + backBtn + '</li>';
        
        contactinfo.append(boxcontent);
    }
    
    //displayName();
    displayinfo();
    $('#dropdown').change(displayinfo); //calls function again if there is a change to #dropdown
    
//click event handler to display user information if user is clicked
    $('.itemname').on('click', function(event) {
        for (i in contactarray) {
            if ($(event.target).html() === contactarray[i].name) {  
                
                $(".itemname").css("background-color", "inherit");
                $(this).css("background-color", "rgb(79,79,79");
                
                contactid = i;
                contactinfo.empty();
                displaysingle(contactid);
            }}
    })
    //click event for back button
        contactinfo.on('click','#backbtn', function(event) {
            event.preventDefault();
            displayinfo(); 
    })
})