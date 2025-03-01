(function ($) {

    "use strict";


    $(function () {

        // $("#wizard").steps({
        //     headerTag: "h2",
        //     bodyTag: "section",
        //     transitionEffect: "slideLeft",
        //     onStepChanging: function (event, currentIndex, newIndex) {
        //         alert("stepchanging event");
        //         return true;
        //     }
    
        // });

        $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

        $(".select-search").select2({
            // placeholder: "Select a state",
            // allowClear: true
        });

        $("#tabs").tabs();

        // Getter
        var active = $(".selector").tabs("option", "active");

        // Setter
        $("#tabs").tabs("option", "active", 0);

    });

    $(function () {
        var $startDate = $('.start-date');
        var $endDate = $('.datepicker');

        $startDate.datepicker({
            autoHide: true,
        });
        $endDate.datepicker({
            autoHide: true,
            startDate: $startDate.datepicker('getDate'),
        });

        $startDate.on('change', function () {
            $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
        });
    });

    $(function () {
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('glyphicon-plus glyphicon-minus');

        }
        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);

    });

    $(document).ready(function () {
        $('.add-drive-lic').DataTable({
            "paging": false,
            searching: false,
            "info": false,
            "ordering": false,
        });

        $('.id-info-for-own-doc-tbl').DataTable({
            "paging": false,
            searching: false,
            "language": {
                "sProcessing": "جارٍ التحميل...",
                "sLengthMenu": "أظهر _MENU_ مدخلات",
                "sZeroRecords": "لم يعثر على أية سجلات",
                "sInfo": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "sInfoPostFix": "",
                "sSearch": "ابحث:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "الأول",
                    "sPrevious": "السابق",
                    "sNext": "التالي",
                    "sLast": "الأخير"
            }
        }
            // "info": false,
            // "ordering": false,
        });

        $('.id-info-for-own-setting-tbl').DataTable({
            "paging": false,
            "info": false,
            searching: true,
            "language": {
                "sProcessing": "جارٍ التحميل...",
                "sLengthMenu": "أظهر _MENU_ مدخلات",
                "sZeroRecords": "لم يعثر على أية سجلات",
                "sInfo": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "sInfoPostFix": "",
                "sSearch": "ابحث:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "الأول",
                    "sPrevious": "السابق",
                    "sNext": "التالي",
                    "sLast": "الأخير"
            }
        }
            // "info": false,
            // "ordering": false,
        });

        $('.id-info-for-vehicle-setting-tbl').DataTable({
            "paging": false,
            "info": false,
            searching: true,
            "language": {
                "sProcessing": "جارٍ التحميل...",
                "sLengthMenu": "أظهر _MENU_ مدخلات",
                "sZeroRecords": "لم يعثر على أية سجلات",
                "sInfo": "إظهار _START_ إلى _END_ من أصل _TOTAL_ مدخل",
                "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
                "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
                "sInfoPostFix": "",
                "sSearch": "ابحث:",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "الأول",
                    "sPrevious": "السابق",
                    "sNext": "التالي",
                    "sLast": "الأخير"
            }
        }
            // "info": false,
            // "ordering": false,
        });
    });

    

    $(function () {
        $("button.reset").click(function () {
            $(this).closest('#tabs-1').find("input[type=text]").val("");
            $(this).closest('#tabs-1').find("label.ui-checkboxradio-label").removeClass('ui-checkboxradio-checked , ui-state-active');


        });
    });

 
    $( function() {
      $( "#accordion-faq" ).accordion();
    } );


    $( function() {
            
        $('#type-doc-car').on('change', function () {
            if(this.value == "serial-num"){
               $('.div-serial-num').css('display','block');
               $('.div-card-num').css('display','none');
            }else{
                $('.div-serial-num').css('display','none');
                $('.div-card-num').css('display','block');
            }
            
        });

        $('input[type=radio][name=radio-card]').change(function() {
            if (this.value == 'card-doc') {
                $('.display-num-seq').css('display','block');
                $('.diplay-none-card').css('display','none');
               
            }
            else if (this.value == 'card-jomrk') {
                $('.display-num-seq').css('display','none');
                $('.diplay-none-card').css('display','block');
            }
        });

        $('input[type=radio][name=tameeni-new]').change(function() {
            if (this.value == 'new-insurance') {
                $('.manufacturing-year').css('display','none');
               
            }
            else if (this.value == 'transfer-of-ownership') {
                $('.manufacturing-year').css('display','block');
                
            }
        });

        $('input[type=radio][name=single-married]').change(function() {
            if (this.value == 'single') {
                $('.num-of-children-div').css('display','none');
               
            }
            else if (this.value == 'married') {
                $('.num-of-children-div').css('display','block');
                
            }
        });

        $('input[type=radio][name=single-married-new-driver]').change(function() {
            if (this.value == 'single') {
                $('.num-of-children-driv-div').css('display','none');
               
            }
            else if (this.value == 'married') {
                $('.num-of-children-driv-div').css('display','block');
                
            }
        });
      
    
            $("#cbox-owner-document-drive").click(function () {
                if ($(this).is(":checked")) {
                    $(".type-of-driving-license").css('display','block');
                   
                } else {
                    $(".type-of-driving-license").css('display','none');
                }
            });

            $("#cbox-additional-driver").click(function () {
                if ($(this).is(":checked")) {
                    $(".div-additional-driver").css('display','block');
                   
                } else {
                    $(".div-additional-driver").css('display','none');
                }
            });


            $('input[type=radio][name=modifications-vehicle]').change(function() {
                if (this.value == 'yse') {
                    $('.textareadiv').css('display','block');
                   
                }
                else if (this.value == 'no') {
                    $('.textareadiv').css('display','none');
                    
                }
            });
       


    });

})(window.jQuery);