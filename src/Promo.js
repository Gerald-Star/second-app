import PromoHeading from "./PromoHeading";
import SiderBar from "./SideBar";

//To render the discount in multiple places, using props
//establish a single source of truth using props on the parent component.

//create the single souce of truth data here on the poarent component.
const data = {
    heading: "99% off all items!",
    callToAction: "Everything must go!"
};


function Promo(){
    return (
        <div>
            <PromoHeading 
            heading = {data.heading}
            callToAction = {data.callToAction}
            />

            <SiderBar 
            heading = {data.heading}
            callToAction = {data.callToAction}
            
            />
        </div>
    )
};

export default Promo;
//this makes the promo component accessible