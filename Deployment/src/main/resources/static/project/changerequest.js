Vue.component('mynavbar', {
  template:' <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">'+
  '<div class="container">'+
    '<a class="navbar-brand" href="/Deployment/home/ar/">نظام إدارة الموارد</a>'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">'+
      '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarResponsive">'+
      '<ul class="navbar-nav ml-auto">'+
                    '<li class="nav-item">'+

          

             


          '<a class="nav-link" href="/home.html">'+

           ' الرئيسية'+
            '<span class="sr-only">(current)</span>'+
          '</a>'+
        '<li class="nav-item">'+
          '<a class="nav-link" href="./home.html"> النظام المالي</a>'+
        '</li>'+
         '<li class="nav-item">'+
          '<a class="nav-link" href="/hrs/home.html">نظام الموارد البشرية</a>'+
        '</li>'+
        '<li class="nav-item">'+
        '<a class="nav-link" href="/project/home.html">إدارة المشاريع</a>'+
      '</li>'+
           '<li class="nave-item"><a class="nav-link" href="/logout"> تسجيل خروج   </a></li>'+

                       

         
      '</ul>'+
    '</div>'+
 '</div>'+
'</nav>' });

Vue.component('myfooter', {
  template:' <div> '+
'<div class="container-fluid padding" style="background-color:#0b2047"> '+
      '<div class="row text-center"> '+
          '<div class="col-md-4"> '+
             '<hr class="light"> '+
              '<p>عن المدينة</p> '+

          '</div> '+
          '<div class="col-md-4"> '+
              '<hr class="light"> '+
              '<p>السياسات</p> '+
              '<hr class="light"> '+

          '</div> '+
          '<div class="col-md-4"> '+
              '<hr class="light"> '+
              '<p>الابتكار</p> '+
              '<hr class="light"> '+

          '</div> '+
          '<div class="col-12 footer-copyright"> '+
              '<br> '+
              '<p> مدينة الملك عبدالعزيز للعلوم والتقنية &copy; 2020</p> '+
          '</div> '+

      '</div> '+
  '</div> '+
'</div>'});

     //grab the things we need
    /*const chnageForm = document.getElementById('pchange-form');

    //listen for the submit event
    chnageForm.addEventListener('submit', processForm);
     function processForm(e) {
     e.preventDefault();

    }
*/
var app = new Vue({
    el: '#Change',
    data:{
      p_Description: '',
      p_Justification: '',
      p_ProjectCode: '0',
      p_CreationDate: '0',
      p_ImpactCategory: 'time',
      p_ImpactDetails: '',
     Requests:'',
      errors: {
        name: false,
        email: false
      }
    },
    methods: {
      submitValues: function (event) {
          axios.post('/rest/CreateChangeRequest', {
            p_Description: this.p_Description,
            p_Justification: this.p_Justification,
            p_ProjectCode: this.p_ProjectCode,
            CreationDate: this.CreationDate,
            p_ImpactCategory: this.p_ImpactCategory,
            p_ImpactDetails: this.p_ImpactDetails
            }).then(response => {
              alert('Connection sent');
                window.location.href = '/project/createprojectplan.html';
            }).catch(error => {
                console.log(error.response)
            });
        }//End SubmitValues Method
        
      },//End  Methods
      mounted () {
        axios.get('/rest/ReadAllChangeRequest')
        .then(response => (this.Requests = response.data,
            console.log(this.Requests)
            ))
      }
  
    
});//End Vue Temp