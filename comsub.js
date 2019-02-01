


   

    // };
    
    // function test() {
        //     var x = document.getElementById("Building_type").value
        
        //     if ()
        //     console.log(x)
        // };
        
        // 1e button
        $("#res-form").hide();
        $("#com-form").hide();
        $("#cor-form").hide();
        $("#hyb-form").hide();
        
        //Click Residential
        $(function(){
            
            //Residential
            
            // var RF = document.getElementbyId("res_floor")
            // var RB = document.getElementbyId("res_base")
            
            console.log("base");
            $("#res-form").hide();
            $('#building-choise').change(function(){
                if ($('#building-choise').val() === 'residential_1'){
                    $('#res-form').show();
                }else{
                    $('#res-form').hide();
                }
            });
        });
        
        //calculs Residential
        
        
        function ResidentialCal() {
            
            var RA = document.getElementById('res_app').value;
            console.log(RA);
            var RF = document.getElementById("res_floor").value;
            console.log(RF)
            var MoyLE = ((RA / RF) / 6);
            console.log(MoyLE)
            var Floor20 = Math.ceil(RF / 20);
            console.log(Floor20)
            var resCages = document.getElementById('res_cage')
            var resElev = document.getElementById('res_elev_recom')
            resCages.value = Math.ceil(Floor20 * MoyLE);
            //document.getElementById('Big_tot').innerHTML = Floor20
         
        console.log(resCages.value);
            resElev.value = resCages.value
            

    

    $(document).ready(function(){
        $("input[type='radio']").on('change', function radio_button(){
            var radioValue = $("input[name='grade']:checked").val();
            console.log(radioValue)
            
            if(radioValue == "7565" ){
                var VR = radioValue
                var costvalue = VR * 1.1
                //console.log(costvalue)
                var resElev = document.getElementById('res_elev_recom').value
                
                document.getElementById("P_of_a_e").value = "7565";
                document.getElementById("Inst_fee").value = costvalue;
                var patate = resElev * costvalue
                console.log(patate)
                document.getElementById("TOTAL").value = patate;
                var x = (resElev * costvalue)
                console.log(x)

            }
            if(radioValue == "12345"){
                var VR = radioValue
                var costvalue = VR * 1.13
                //console.log(costvalue)
                var resElev = document.getElementById('res_elev_recom').value
                
                document.getElementById("P_of_a_e").value = "12345";
                document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
                document.getElementById("TOTAL").value = Math.round(resElev * (costvalue*100))/100;
                var x = (resElev * costvalue)
                console.log(x)
                

            }
            if(radioValue == "15400"){
                var VR = radioValue
                var costvalue = VR * 1.16
                //console.log(costvalue)
                var resElev = document.getElementById('res_elev_recom').value
                
                document.getElementById("P_of_a_e").value = "15400";
                document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
                document.getElementById("TOTAL").value = Math.round(resElev * (costvalue*100))/100;
                var x = (resElev * costvalue)
                console.log(x)
                

            }


        });
    });
};  
    
    
    // $(function)() {
//Click Commercial
$(function(){

    //Commercial

    // var CMD = document.getElementbyId('com_distinct')
    // var CMF = document.getElementbyId("com_floor")
    // var CMB = document.getElementbyId("com_base")
    // var CMP = document.getElementbyId("com_park")
    // var CME = document.getElementbyId("com_elevator")

    console.log("base2");
    $("#com-form").hide();
    $('#building-choise').change(function(){
        if ($('#building-choise').val() === 'commercial_1'){
           $('#com-form').show();
        }else{
            $('#com-form').hide()
        }
    });
});

//Commercial Calculs

function ComCal() {
    
    var com_elev = document.getElementById('com_elevator').value
    
    var Big_tot = com_elev;
    
    document.getElementById('com_elev_recom').innerHTML = Big_tot;
    
    // document.getElementById('com_elev_recom').value = Big_tot
    
     $(document).ready(function(){
        $("input[type='radio']").on('change', function radio_button(){
            var radioValue = $("input[name='grade']:checked").val();
     
     if(radioValue == "7565" ){
        var VR = 7565
        var costvalue = VR * 1.1
        //console.log(costvalue)
        // var resElev = document.getElementById('cor_elev_recom').value
        
        document.getElementById("P_of_a_e").value = "7565";
        document.getElementById("Inst_fee").value = costvalue;
        document.getElementById("TOTAL").value = Big_tot * costvalue;
        var x = (Big_tot * costvalue)
        console.log(x)

    }
    if(radioValue == "12345"){
        var VR = radioValue
        var costvalue = VR * 1.13
        //console.log(costvalue)
      
        document.getElementById("P_of_a_e").value = "12345";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
    if(radioValue == "15400"){
        var VR = radioValue
        var costvalue = VR * 1.16
        //console.log(costvalue)
        
        
        document.getElementById("P_of_a_e").value = "15400";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
         

        });
    });
};  
    



//Click Corporate
$(function(){

    //Corporate

    // var CRER = document.getElementbyId("cor_ent_res")
    // var CRF = document.getElementbyId("cor_floor")
    // var CRB = document.getElementbyId("cor_base")
    // var CRP = document.getElementbyId("cor_park")
    // var CRMPF = document.getElementbyId("cor_max_ppl_floor")


   $("#cor-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() === 'corporate_1'){
           $('#cor-form').show();
       }else{
           $('#cor-form').hide()
       }
   });
});

//Corporate calculs

   function CorCal() {

    var cor_max_ppl_floor = parseInt(document.getElementById("cor_max_ppl").value);
    // console.log(cor_max_ppl_floor)
    var cor_floor = parseInt(document.getElementById("cor_floor1").value);
    // console.log(cor_floor)
    var cor_base = parseInt(document.getElementById("cor_base1").value);
    // console.log(cor_base);

     var max_ppl_tot = Math.ceil(cor_max_ppl_floor * (cor_floor + cor_base));
     // console.log(max_ppl_tot)
     var cor_elev_recom = Math.ceil(max_ppl_tot / 1000);
     //console.log(cor_elev_recom)
     var cor_col_elev_recom = Math.ceil((cor_floor + cor_base) / 20) ;
     console.log(cor_col_elev_recom)
     var cor_tot_elev = Math.ceil(cor_elev_recom / cor_col_elev_recom) ;
     console.log(cor_tot_elev)
     var Big_tot = Math.ceil(cor_tot_elev * cor_col_elev_recom);
     console.log(Big_tot)
     
     

    //  var totaltot =  * big_tot2

     
     document.getElementById('cor_elev_recom').value = Big_tot
     
     $(document).ready(function(){
        $("input[type='radio']").on('change', function radio_button(){
            var radioValue = $("input[name='grade']:checked").val();
     
     if(radioValue == "7565" ){
        var VR = 7565
        var costvalue = VR * 1.1
        //console.log(costvalue)
        // var resElev = document.getElementById('cor_elev_recom').value
        
        document.getElementById("P_of_a_e").value = "7565";
        document.getElementById("Inst_fee").value = costvalue;
        document.getElementById("TOTAL").value = Big_tot * costvalue;
        var x = (Big_tot * costvalue)
        console.log(x)

    }
    if(radioValue == "12345"){
        var VR = radioValue
        var costvalue = VR * 1.13
        //console.log(costvalue)
      
        document.getElementById("P_of_a_e").value = "12345";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
    if(radioValue == "15400"){
        var VR = radioValue
        var costvalue = VR * 1.16
        //console.log(costvalue)
        
        
        document.getElementById("P_of_a_e").value = "15400";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
         

        });
    });
}; 



//Click Hybrid
$(function(){

    // //Hybrid
    
    // var HCD = document.getElementbyId("hyb_com_distinct")
    // var HF = document.getElementbyId("hyb_floor")
    // var HB = document.getElementbyId("hyb_base")
    // var HP = document.getElementbyId("hyb_park")
    // var HMPF = document.getElementbyId("hyb_max_ppl_floor")
    // var HMAT = document.getElementbyId("hyb_max_act_time")
    
    $("#hyb-form").hide();
    $('#building-choise').change(function(){
        if ($('#building-choise').val() ==='hybrid_1'){
            $('#hyb-form').show();
        }else{
            $('#hyb-form').hide()
        }
   });
});

//hybrid calculs


function HybCal() {

    var hyb_max_ppl_floor = parseInt(document.getElementById("hyb_max_ppl").value);
    var hyb_floor = parseInt(document.getElementById("hyb_floor1").value);
    var hyb_base = parseInt(document.getElementById("hyb_base1").value)

     var max_ppl_tot = Math.ceil(hyb_max_ppl_floor * (hyb_floor + hyb_base));
     console.log(max_ppl_tot)
     var hyb_elev_recom = Math.ceil(max_ppl_tot /1000);
     console.log(hyb_elev_recom)
     var hyb_col_elev_recom = Math.ceil((hyb_floor + hyb_base) / 20) ;
     console.log(hyb_col_elev_recom)
     var hyb_tot_elev = Math.ceil(hyb_elev_recom / hyb_col_elev_recom) ;
     console.log(hyb_tot_elev)
     var Big_tot = Math.ceil(hyb_tot_elev * hyb_col_elev_recom);
     console.log(Big_tot)
     document.getElementById('TOTAL').innerHTML = Big_tot
     
     if (Number.isNaN(max_ppl_tot) || max_ppl_tot == "Infinity" || max_ppl_tot == null) {

        max_ppl_to = 0;
 
    }

    document.getElementById('hyb_elev_recom').value = Big_tot
     
     $(document).ready(function(){
        $("input[type='radio']").on('change', function radio_button(){
            var radioValue = $("input[name='grade']:checked").val();
     
     if(radioValue == "7565" ){
        var VR = 7565
        var costvalue = VR * 1.1
        //console.log(costvalue)
        // var resElev = document.getElementById('cor_elev_recom').value
        
        document.getElementById("P_of_a_e").value = "7565";
        document.getElementById("Inst_fee").value = costvalue;
        document.getElementById("TOTAL").value = Big_tot * costvalue;
        var x = (Big_tot * costvalue)
        console.log(x)

    }
    if(radioValue == "12345"){
        var VR = radioValue
        var costvalue = VR * 1.13
        //console.log(costvalue)
      
        document.getElementById("P_of_a_e").value = "12345";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
    if(radioValue == "15400"){
        var VR = radioValue
        var costvalue = VR * 1.16
        //console.log(costvalue)
        
        
        document.getElementById("P_of_a_e").value = "15400";
        document.getElementById("Inst_fee").value = Math.round(costvalue*100)/100;
        document.getElementById("TOTAL").value = Math.round(Big_tot * (costvalue*100))/100;
        var x = (Big_tot * costvalue)
        console.log(x)
        

    }
         

        });
    });
};  


    $("input").on("keyup click", function (){
        var choiseValue =   $('#building-type option:selected').value;

        if(choiseValue=='res-form'){

            ResidentialCal();
        }
        if(choiseValue == "com-form"){

            ComCal()
        }
        if(choiseValue == "cor-form") {

            CorCal()
        }
        if(choiseValue == "hyb-form") {

            HybCal()
        }
    })
// document.getElementById('tot_elev').innerHTML = 
// document.getElementById('P_of_a_e').innerHTML = 
// document.getElementById('Inst_fee').innerHTML = 
// document.getElementById('TOTAL').innerHTML = 



//2e button

// console.log(RA)


 //calculs
// Standard: 10%
// Premium: 13% 12345$
// Excellum: 16% 15400$

// Commercial: 6 cages, Excellum
// (6 * 15400$) * 1.16 = 107184$

// Residential: 13 floors (2 ss), 320 appart.
// (320 / 11) / 6 = 4.84 = 5       (Math.ceil)
// (5 * 7565) * 1.10 = 41607.50$



//     var Building_type  = function() {
    
//     text("Residential")
//     text("Commercial")
//     text("Corporate")
//     text("Hybrid")
    
//     }


// text(Number of appartments)
// var x = document.getElementById("Building_type").val
// text(number of floors)
// <button onclick="getElementById('demo').innerHTML = Date()">Residential</button>



//         if(Residential) {
           
//            var moy_app_floors = (nb_app / nb_floors);
//            var nb_cages = Math.ceil(moy_app_floors /6);
//            var nb_column = Math.ceil(nb_floors / 20)         
//            console.log;
//         }

// <button onclick="myFunction()">Residential</button>

//         $.each(collection, function (indexInArray, valueOfElement) { 
             
//         });


// $(function() {
//    $('#row_dim').hide();
//    $('#type').change(function(){
//        if($('#type').val() == 'parcel') {
//            $('#row_dim').show();
//        } else {
//            $('#row_dim').hide();
//        }
//    });
// });


// document.getElementById("demo").value




// // Get the button, and when the user clicks on it, execute myFunction
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }