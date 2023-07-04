({
    doInit : function(component, event, helper) {
        
        let ref = component.get('v.pageReference');    
        let param1 = ref.state.c__canard;
        let param2 = ref.state.c__poney;
        
        //Assigning the data back to an attribute
        component.set( 'v.param1', param1);
        component.set( 'v.param2', param2);
    },
    handleClick : function(component, event, helper){  
		component.find('auraTolwc_Popup').openPopup(); 
    }  
})