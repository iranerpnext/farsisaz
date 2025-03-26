function setPersianDatePicker(formm,engField,perField,withTime){
    perField.$input.attr("value",perField.value);
    var setting;
    if(!perField.value){
    if(withTime){
        setting = {format: 'YYYY-MM-DD HH:mm:ss',initialValue:false,autoClose: true,calendar:{persian: {locale: 'fa'}},toolbox:{calendarSwitch:{enabled: false}}
        ,timePicker: {enabled: true}
        ,onSelect: function (unix) {
            perField.set_value(perField.$input.val());
            engField.set_value(frappe.datetime.get_datetime_as_string(to.getState().selected.dateObject.State.gDate));
            }
        }
    }else{
        setting = {format: 'YYYY-MM-DD',initialValue:false,autoClose: true,calendar:{persian: {locale: 'fa'}},toolbox:{calendarSwitch:{enabled: false}}
        ,onSelect: function (unix) {
            perField.set_value(perField.$input.val());
            engField.set_value(frappe.datetime.obj_to_str(to.getState().selected.dateObject.State.gDate));
            }
        }
    }
}
    else{
        if(withTime){
            setting = {format: 'YYYY-MM-DD HH:mm:ss',initialValueType: 'persian',autoClose: true,calendar:{persian: {locale: 'fa'}},toolbox:{calendarSwitch:{enabled: false}}
            ,timePicker: {enabled: true}
            ,onSelect: function (unix) {
                perField.set_value(perField.$input.val());
                engField.set_value(frappe.datetime.get_datetime_as_string(to.getState().selected.dateObject.State.gDate));
                }
            }
        }else{
            setting = {format: 'YYYY-MM-DD',initialValueType: 'persian',autoClose: true,calendar:{persian: {locale: 'fa'}},toolbox:{calendarSwitch:{enabled: false}}
            ,onSelect: function (unix) {
                perField.set_value(perField.$input.val());
                engField.set_value(frappe.datetime.obj_to_str(to.getState().selected.dateObject.State.gDate));
                }
            }
        }
    
    }
    var to = perField.$input.persianDatepicker(setting);
   
   frappe.ui.form.on(formm, engField.df.fieldname, function(frm) {
        to.setDate(new Date(engField.datepicker.selectedDates).getTime());
        perField.set_value(perField.$input.val());

    }); 
}