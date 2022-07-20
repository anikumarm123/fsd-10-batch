var fabevy = [
    { 
     photo:'muthu.jpeg' ,  
     name:'Muthukumar M',
     mobile:6374280764,
     batch:"FSD 10",
     git:"anikumarm123",
     referredby:"surenther",
     location:"chennai",
     placementstatus:"Not started"
    },
    {
     photo:'rahul.jpeg',   
     name:'Rahul N',
     mobile:7010068320,
     batch:"FSD 10",
     git:"rahulmahi",
     referredby:"mathan",
     location:"pavoorchathram",
     placementstatus:"Not started"

    },
    {  photo:'chithiral.jpeg',
        name:'Chithirai vel',
        mobile:9003818792,
        batch:"FSD 10",
        git:"chithiraivel",
        referredby:"rahul",
        location:"online",
        placementstatus:"Not started"
    },
];

var head_name= ['photo','Name','Mobile Nuber','Batch','Git','Refered by','Location','placementstatus']

var tbl = document.createElement("table") ;
var first_row = document.createElement("tr");
    
    for(i = 0;i< head_name.length;i++){

     var first_column = document.createElement('th') ;
      
      first_column.textContent = head_name[i];
      
      first_row.append(first_column);

      tbl.append(first_row);
    } 

    for(i = 0;i< fabevy.length;i++){

    var second_row = document.createElement('tr');

    var student_img = document.createElement('img');
    student_img.src = fabevy[i].photo;
    student_img.className ='photos'

    var student_photo = document.createElement('td');
    student_photo.append(student_img);

  
     var student_name = document.createElement('td');
     student_name.textContent = fabevy[i].name;
     
     var student_mobile =document.createElement('td') ;
     student_mobile.textContent = fabevy[i].mobile; 

     var student_batch = document.createElement('td');
     student_batch.textContent = fabevy[i].batch;
        
     var student_refered = document.createElement('td');
     student_refered.textContent = fabevy[i].referredby; 
      
     var student_git = document.createElement('td');
     var atag = document.createElement('a');
     atag.href= fabevy[i].git;
     atag.textContent =fabevy[i].git;
     student_git.append(atag);


     
     var student_location = document.createElement('td');
     student_location.textContent = fabevy[i].location; 

     var student_work = document.createElement('td');
     student_work.textContent = fabevy[i].placementstatus; 
     
    second_row.append(student_photo, student_name,student_mobile,student_batch,student_refered,student_git,student_location,student_work);
    tbl.append(second_row);
    document.body.append(tbl);
    }   
