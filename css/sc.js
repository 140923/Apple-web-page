
const handleMouseEvents = (buttonSelector, itemSelector) => {
        const button = document.querySelector(buttonSelector);
        const item = document.querySelector(itemSelector);
        let parent=document.querySelector("#nav-bar")
        // parent.addEventListener("mouseover", (e)=> {
        //     if (e.target===button){
        //         console.log(button);
        //         item.style.visibility="visible"
        //     }
        // })
        button.addEventListener("mouseover", () => {
            item.style.visibility = 'visible';
            // console.log(button);
        });
        button.addEventListener("mouseout", () => {
            setTimeout(() => {
                if (!button.matches(':hover') && !item.matches(':hover')) {
                    item.style.visibility = 'hidden';
                    // console.log(button.matches(':hover'));
                    // console.log(item.matches(':hover'));
                    // console.log(button);

                }
            }, 1000); 
        });

        item.addEventListener("mouseover", () => {
            item.style.visibility = 'visible'; 
            // console.log(item);

        });

        item.addEventListener("mouseout", () => {
           setTimeout(() => {
                if (!button.matches(':hover') && !item.matches(':hover')) {
                    item.style.visibility = 'hidden';
                    // console.log(button.matches(':hover'));
                    // console.log( item.matches(':hover'));
                    // console.log(item);

                }
            }, 1000);
        });  
          
        
    
        // // Hide the item when clicking outside of the button and item
        // document.addEventListener("click", (e) => {
        //     if (!button.contains(e.target) && !item.contains(e.target)) {
        //         item.style.visibility = 'hidden';
        //     }
        // });
    
        // // Ensure the item stays visible when clicking on the item itself
        // // item.addEventListener("click", (e) => {
        // //     e.stopPropagation(); // Prevent click event from bubbling up to the document
        // // });
}
  
handleMouseEvents('.Store', '.item-1');
handleMouseEvents('.Mac', '.item-2');
handleMouseEvents('.iPad', '.item-3');
handleMouseEvents('.iPhone', '.item-4');
handleMouseEvents('.Watch', '.item-5');
handleMouseEvents('.AirPods', '.item-6');
handleMouseEvents('.TV-Home', '.item-7');
handleMouseEvents('.Entertainment', '.item-8');
handleMouseEvents('.Accessories', '.item-9');
handleMouseEvents('.Support', '.item-10');
