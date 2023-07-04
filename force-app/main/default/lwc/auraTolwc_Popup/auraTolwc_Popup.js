import { LightningElement, api } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
//https://techdicer.com/navigate-to-aura-component-from-lwc/
//https://dfc-org-production.my.site.com/forums/?id=9062I000000BmnUQAS
//https://www.greytrix.com/blogs/salesforce/2022/02/16/how-to-invoke-an-lwc-component-function-from-aura-component/
export default class ModalPopupLWC  extends NavigationMixin(LightningElement) {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    isModalOpen = false;
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
        const navConfig = {
            type: "standard__component",
            attributes: {
                componentName: "c__TestAURALWC"
            },
            state: {
                c__canard: "Tsup",
                c__poney: "paz"
            }
        };
        this[NavigationMixin.Navigate](navConfig);
    }

    @api openPopup(){
        this.isModalOpen = true;
    }
}