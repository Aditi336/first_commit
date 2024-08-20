import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Custom()
{
    const [show_cherry,setshow_cherry]=useState({display:"none"})
    const [show_candy,setshow_candy]=useState({display:"none"})
    const [show_sauce,setshow_sauce]=useState({display:"none"})
    const [show_sprinkles,setshow_sprinkles]=useState({display:"none"})
    const [show_choppednuts,setshow_choppednuts]=useState({display:"none"})
    const [show_crushcookie,setshow_crushcookie]=useState({display:"none"})
    const [show_fruits,setshow_fruits]=useState({display:"none"})
    const [show_icecream,setshow_icecream]=useState({display:"none"})

    

    

    

    const options_cherry=()=>{
        if( show_cherry.display==="none")
        {
        setshow_cherry(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_cherry.display==="flex")
        {
            setshow_cherry({display:"none"})
        }
    }
    const options_candy=()=>{
        if( show_candy.display==="none")
        {
        setshow_candy(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_candy.display==="flex")
        {
            setshow_candy({display:"none"})
        }
    }

    const options_sauce=()=>{
        if( show_sauce.display==="none")
        {
        setshow_sauce(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
     }
        else if(  show_sauce.display==="flex")
        {
            setshow_sauce({display:"none"})
        }
    }
    const options_sprinkle=()=>{
        if( show_sprinkles.display==="none")
        {
        setshow_sprinkles(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_sprinkles.display==="flex")
        {
            setshow_sprinkles({display:"none"})
        }
    }
    const options_choppednuts=()=>{
        if( show_choppednuts.display==="none")
        {
            setshow_choppednuts(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_choppednuts.display==="flex")
        {
            setshow_choppednuts({display:"none"})
        }
    }
    const options_crushcookie=()=>{
        if( show_crushcookie.display==="none")
        {
            setshow_crushcookie(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_crushcookie.display==="flex")
        {
            setshow_crushcookie({display:"none"})
        }
    }
    const options_fruits=()=>{
        if( show_fruits.display==="none")
        {
            setshow_fruits(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_fruits.display==="flex")
        {
            setshow_fruits({display:"none"})
        }
    }
    const options_icecream=()=>{
        if( show_icecream.display==="none")
        {
            setshow_icecream(
            (
                {display:"flex",
                flexDirection:"row",
                overflowX:"scroll",
                width:"700px"
                })
        )
    }
        else if(  show_icecream.display==="flex")
        {
            setshow_icecream({display:"none"})
        }
    }





    const [val,setval]=useState([])
    const [choice,setchoice]=useState([])

    const handleAdd=(pContent)=>{
        setval([...val,pContent])
        setchoice([...choice,pContent])
    }

    const handleDelete=(index)=>{
        setval(val.filter((_,i)=>i!==index))
        setchoice(choice.filter((_,i)=>i!==index))
    }

    console.log(val)
   
    const clearing = () => {
        alert("Your are clearing your icecream bowl")
        setval([]);
        setchoice([]);
    }
    const navigate=useNavigate()
    function place_order(){
        if(choice.length===0 && val.length===0)
        {alert("Bowl is empty")}
        else
        {navigate(`/orders/${val}`)}
    }

    
    return(
        <div id="making">
        <div id="navbar_maker">
            <div class="orders">
        <img class="basket" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Shopping_Basket_Flat_Icon_Vector.svg/1200px-Shopping_Basket_Flat_Icon_Vector.svg.png"></img>
        <p class="basket_text">your bag</p>
            </div>
        </div>
        <div>
            <p id="bowl_text">Your icream bowl:</p>
            <div id="bowl_img" >
            
            {choice.map((data,index)=>{
                
                return(
                    <div key={index}>
                    <input value={data} type="text" readOnly id="choices"></input>
                    <button onClick={()=>handleDelete(index)} id="clear_bowl">X</button>
                    </div>
                )
            })}
                           
            </div>
            <div id="clear_place">
            <button onClick={clearing} id="clearing_bowl">CLEAR</button>

            <button onClick={place_order}  id="bookings">PLACE ORDER</button>
            </div>
        </div>
        <div class="toppings">
            <ol>
            <li><button className="button" id="cherry" onClick={options_cherry}>CHERRY</button>
                <div class="cherry_options">
                    <ol id="c_p"  style={show_cherry}>
                        <li>
                            <img id="marsh" src="https://www.shutterstock.com/shutterstock/photos/2332887399/display_1500/stock-photo-bowl-of-tasty-maraschino-cherries-on-table-2332887399.jpg"></img>
                            <p onClick={()=>handleAdd("Maraschino cherries")} id="marsh_T">Maraschino cherries</p>
                        </li>
                        <li>
                        <img id="royal" src="https://media.gettyimages.com/id/88307888/photo/queen-anne-cherries.jpg?s=612x612&w=gi&k=20&c=t8CrCdlN5z_ppw-bWfejNE28CY4plSIT08Hg9M7lqy0="></img>
                         <p id="royal_T" onClick={()=>handleAdd("Royal Ann cherries")} >Royal Ann cherries</p>
                        </li>
                        <li>
                            <img id="rainier" src="https://media.gettyimages.com/id/89606396/photo/fresh-cherries-in-glass-bowl.jpg?s=612x612&w=gi&k=20&c=xJnYkOuhm3pP337MGXfuk-KldpUIA34ObyHk-3mnoQE="></img>
                            <p id="rainier_T" onClick={()=>handleAdd("Rainier cherries")}>Rainier cherries</p>    
                        </li>
                        <li>
                            <img id="black" src="https://media.istockphoto.com/id/1137525010/photo/white-plate-of-ripe-black-cherries-with-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=TLSQBemP1nAu0sTZfUFpL1NFEUAZNttdpTxYFQUm8f4="></img>
                            <p id="black_T" onClick={()=>handleAdd("Black cherries")}>Black cherries</p>    
                        </li>
                    </ol>
                </div>
            </li>
            <li><button id="candy" className="button" onClick={options_candy}>CANDY</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_candy}>
                        <li>
                            <img id="gummy_candies" src="https://media.istockphoto.com/id/171363813/photo/rainbow-colored-candy.jpg?s=612x612&w=is&k=20&c=wPyIgDLgZoZaB9JZcirCIBYmiFmHd0h29LWRNgpiwBY="></img>
                            <p id="gummy_T" onClick={()=>handleAdd("Gummy Candies")}>Gummy Candies</p>
                        </li>
                        <li>
                        <img id="crushed_candies" src="https://media.istockphoto.com/id/1031570676/photo/chocolate-dark-bitter-chocolate-chunks-chocolate-background.jpg?s=612x612&w=is&k=20&c=fNvj4lNVIjmowqkM_gPM4CSkIlhPSSsyaOlMBRvSWcc="></img>
                            <p id="crushed_T" onClick={()=>handleAdd("Crushed Candy Bars")}>Crushed Candy Bars</p>
                        </li>
                        <li>
                            <img id="hard_candies" src="https://media.istockphoto.com/id/472019405/photo/cup-of-christmas-candy.jpg?s=612x612&w=is&k=20&c=qfV9qHJFm0nrRhVertYTuzIGxVAqCLhltA8p5TB0A8g="></img>
                            <p id="hard_T" onClick={()=>handleAdd("Hard Christmas Candies")}>Hard Christmas Candies</p>    
                        </li>
                        <li>
                            <img id="popping_candies" src="https://media.istockphoto.com/id/1430092906/photo/six-different-flavors-of-popping-boba-pearls.jpg?s=612x612&w=is&k=20&c=lqNxeIpwxjL0-54rzDBt4aSSuL81LI8DozKh5XA2nkI="></img>
                            <p id="popping_T" onClick={()=>handleAdd("Popping Candy")}>Popping Candy</p>    
                        </li>
                        <li>
                            <img id="cocunut_candies" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwd4eIaVhzfRYINijxdDHxMDH95nbnBcivewEBO8rqw&s"></img>
                            <p id="cocunut_T" onClick={()=>handleAdd("Cocunut Haystacks")}>Cocunut Haystacks</p>    
                        </li>
                    </ol>
                </div>
            </li>
            <li><button id="caramel" className="button" onClick={options_sauce}>SAUCE</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_sauce}>
                        <li>
                            <img id="caramel_sauce" src="https://media.istockphoto.com/id/1076201944/photo/glass-jar-with-homemade-salted-caramel.jpg?s=612x612&w=is&k=20&c=JfNgvLdY4zLjkiEQaLEdhaNAJ7CN9P3udXETE8qNHVw="></img>
                            <p id="caramel_T" onClick={()=>handleAdd("Caramel Sauce")}>Caramel Sauce</p>
                        </li>
                        <li>
                        <img id="saltcaramel_sauce" src="https://media.istockphoto.com/id/1341239485/photo/glass-jar-with-tasty-delicious-salted-caramel.jpg?s=612x612&w=is&k=20&c=VkP_CPwiNUHt9_dqkXVdeLMluy2_-SxPz58uCFtvX1Y="></img>
                            <p id="saltcaramel_T" onClick={()=>handleAdd("Salted Caramel Sauce")}>Salted Caramel Sauce</p>
                        </li>
                        <li>
                            <img id="crushcaramel_sauce" src="https://www.shutterstock.com/shutterstock/photos/2270754175/display_1500/stock-photo-crushed-caramel-peanut-brittle-is-usually-used-for-topping-cakes-nougat-caramel-2270754175.jpg"></img>
                            <p id="crushcaramel_T" onClick={()=>handleAdd("Crushed Caramel Sauce")}>Crushed Caramel Sauce</p>    
                        </li>
                        <li>
                            <img id="strawberry_sauce" src="https://media.istockphoto.com/id/617384274/photo/homemade-raspberry-jam-in-a-saucepan.jpg?s=612x612&w=is&k=20&c=TrOP-gHY0RA6CobZXchFJe31AjG_LThh3B-YVdi17b4="></img>
                            <p id="strawberry_T"  onClick={()=>handleAdd("Strawberry Sauce")}>Strawberry Sauce</p>
                        </li>
                        <li>
                            <img id="chocolate_sauce" src="https://media.istockphoto.com/id/507158567/photo/sweet-dark-chocolate-sauce.jpg?s=612x612&w=is&k=20&c=BrZ7LQbT-Ar2VdMwEYnsmHI0zdu6JPRmilYIofUKiX8="></img>
                            <p id="strawberry_T" onClick={()=>handleAdd("Chocolate Sauce")}>Chocolate Sauce</p>
                        </li>
                        <li>
                            <img  id="blueberry_sauce" src="https://media.istockphoto.com/id/123095226/photo/blueberry-preserves.jpg?s=1024x1024&w=is&k=20&c=rz87WenyT79hIljE9lGFSwQfSm7bGHY1PELUZwDuoH0="/>
                            <p id="blueberry_T" onClick={()=>handleAdd("Blueberry Sauce")}>Blueberry Sauce</p>
                        </li>
                    </ol>
                </div>
            
            </li>
            <li><button id="sprinkles" className="button"  onClick={options_sprinkle}>SPRINKLES</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_sprinkles}>
                        <li>
                            <img id="chocosprink_sprinkler" src="https://media.istockphoto.com/id/1402900258/photo/chocolate-sprinkles.jpg?s=612x612&w=is&k=20&c=HMWYhjv8nHEqfLHWwh170KGL1SHvybQRsIhcO1SDAbE="></img>
                            <p id="chocosprink_T" onClick={()=>handleAdd("Chocolate Sprinkler")}>Chocolate Sprinkler</p>
                        </li>
                        <li>
                        <img id="rainsprink_sprinkler" src="https://media.istockphoto.com/id/1316500658/photo/big-clear-display-of-sprinkles-candy-party-cake-treats-cover-food-decorations-background.jpg?s=612x612&w=is&k=20&c=-ETuuc4kfXIFg9KwDSGAES2pS4QyhZjIEw9v8FOResU="></img>
                            <p id="rainsprink_T" onClick={()=>handleAdd("Rainbow Sprinkler")}>Rainbow Sprinkler</p>
                        </li>
                        <li>
                            <img id="rainballsprink_sprinkler" src="https://media.istockphoto.com/id/636617266/photo/sprinkle-sugar-candy.jpg?s=1024x1024&w=is&k=20&c=lJBNjq3wkfQNEDBSZfKwiu9KAG3ugOHFWyQyC97X_5Y="></img>
                            <p id="rainballsprink_T" onClick={()=>handleAdd("Rainbow Ball Sprinkler")}>Rainbow Ball Sprinkler</p>    
                        </li>
                        
                    </ol>
                </div>
            </li>
            <li><button id="chopped_nuts" className="button"  onClick={options_choppednuts}>CHOPPED NUTS</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_choppednuts}>
                        <li>
                            <img id="cashew_nuts" src="https://media.istockphoto.com/id/470795758/photo/bowl-of-halved-cashew-nuts-in-a-wooden-bowl.jpg?s=1024x1024&w=is&k=20&c=oKvvzFhwrNxF6_gCH-UBKyjudgbFh0OpHCd4G--LqyI="></img>
                            <p id="cashew_T"  onClick={()=>handleAdd("Chopped Cashew")}>Chopped Cashew</p>
                        </li>
                        <li>
                        <img id="almonds_nuts" src="https://media.istockphoto.com/id/932358344/photo/almonds-almond-nuts-in-a-glass-bowl-almond-isolated.jpg?s=1024x1024&w=is&k=20&c=EEB8LkX6Zx8itaNJF05a8FfiC3bzNw8Zy7szZ2bW6UA="></img>
                            <p id="almonds_T" onClick={()=>handleAdd("Chopped Almonds")}>Chopped Almonds</p>
                        </li>
                        <li>
                            <img id="pista_nuts" src="https://as1.ftcdn.net/v2/jpg/04/74/34/40/1000_F_474344016_XvWRvtJFCKUiMsXNOFfaJQZRGRUxO45j.jpg"></img>
                            <p id="pista_T" onClick={()=>handleAdd("Chopped Pista")}>Chopped Pista</p>    
                        </li>
                        <li>
                            <img id="walnut_nuts" src="https://media.istockphoto.com/id/171377204/photo/chopped-walnuts.jpg?s=1024x1024&w=is&k=20&c=8dTEkuh5tSvYu6iblsC_6zAzoM27KgzO7nWf_XFT4Sc="></img>
                            <p id="walnut_T" onClick={()=>handleAdd("Chopped Walnut")}>Chopped Walnut</p>    
                        </li>
                    </ol>
                </div>
            </li>
            <li><button id="crushed_cookies" className="button"  onClick={options_crushcookie}>CRUSHED COOKIES</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_crushcookie}>
                        <li>
                            <img id="chocochip_cookie" src="https://images.unsplash.com/photo-1625876981820-be17a6807189?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                            <p id="chocochip_T" onClick={()=>handleAdd("Chocolate Chip Cookies")}>Chocolate Chip Cookies</p>
                        </li>
                        <li>
                        <img id="shortbread_cookie" src="https://media.istockphoto.com/id/911290456/photo/sweet-shortbread-fingers.jpg?s=612x612&w=is&k=20&c=-xOdav5JahMU04zqT5QHyPzo8jgtgmsdPy3ved0YSDM="></img>
                            <p id="shortbread_T" onClick={()=>handleAdd("ShortBread Almonds")}>ShortBread Almonds</p>
                        </li>
                        <li>
                            <img id="graham_cookie" src="https://media.istockphoto.com/id/493247494/photo/graham-crackers.jpg?s=612x612&w=is&k=20&c=SwUKDY9F3yLSY2oQ9nWhinBY19P_LOY3dX0GgzDkO_g="></img>
                            <p id="graham_T" onClick={()=>handleAdd("Graham crackers")}> Graham crackers</p>    
                        </li>
                        
                    </ol>
            </div>
            </li>
            <li><button id="fruits" className="button"  onClick={options_fruits}>FRUITS</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_fruits}>
                        <li>
                            <img id="Berry_fruits" src="https://images.unsplash.com/photo-1622031178094-e6b18823c64a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlcnJpZXN8ZW58MHx8MHx8fDA%3D"></img>
                            <p id="Berry_T" onClick={()=>handleAdd("Berries")}>Berries</p>
                        </li>
                        <li>
                        <img id="Banana_fruits" src="https://media.istockphoto.com/id/1130304713/photo/bunch-of-bananas-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=19JkMfTx8WWvcNoF8FbOp8M3oSEp67ygS1j6DI0Bw7w="></img>
                            <p id="Banana_T" onClick={()=>handleAdd("Banana")}>Banana</p>
                        </li>
                        <li>
                            <img id="Mango_fruits" src="https://media.istockphoto.com/id/1152750103/photo/sliced-alphonso-mangoes.jpg?s=612x612&w=is&k=20&c=BGvnjuLGgs2sYIEvT4R8gPcd-p1HCQeaVhjnp2w5Rxw="></img>
                            <p id="Mango_T" onClick={()=>handleAdd("Mango")}>Mango</p>    
                        </li>
                        <li>
                            <img id="Kiwi_cookie" src="https://media.istockphoto.com/id/493890436/photo/kiwi-fruit-slices-on-wooden-table.jpg?s=2048x2048&w=is&k=20&c=s6544l1leMEv9cAzxR25swNOccOQLNrV-EPAONQUC7U="></img>
                            <p id="Kiwi_T" onClick={()=>handleAdd("Kiwi")}>Kiwi</p>    
                        </li>
                        
                    </ol>
            </div>
            </li>
            <li><button id="flavour" className="button"  onClick={options_icecream}>ICE CREAM</button>
            <div class="cherry_options">
                    <ol id="c_p"  style={show_icecream}>
                        <li>
                            <img id="chocolate_icecream" src="https://media.istockphoto.com/id/936155834/photo/belgian-chocolate-ice-creams.jpg?s=2048x2048&w=is&k=20&c=SG-23ddOJSsk_Q4zbg8tiaaheMBQVZ6KzC17lBzYDes="></img>
                            <p id="chocolate_T" onClick={()=>handleAdd("Chocolate Icecream")}>Chocolate Icecream</p>
                        </li>
                        <li>
                        <img id="strawberry_icecream" src="https://media.istockphoto.com/id/678771308/photo/strawberry-cream-ice-cream-in-white-bowl.jpg?s=2048x2048&w=is&k=20&c=psB5L6FHF1ph7nRYOYK6obN3qzrVEzkxWdKi5EkHmvw="></img>
                            <p id="strawberry_T" onClick={()=>handleAdd("Strawberry Icecream")}>Strawberry Icecream</p>
                        </li>
                        <li>
                            <img id="vanilla_icecream" src="https://media.istockphoto.com/id/684032230/photo/vanilla-ice-cream.jpg?s=2048x2048&w=is&k=20&c=nGpnOYZLKzvMcJWj5xJ3lhzQVmV-CAon89pnw3PpQgs="></img>
                            <p id="vanilla_T" onClick={()=>handleAdd("Vanilla Icecream")}>Vanilla Icecream</p>    
                        </li>
                        <li>
                            <img id="mintchoco_icecream" src="https://media.istockphoto.com/id/157607284/photo/mint-chocolate-ice-cream-sundae.jpg?s=2048x2048&w=is&k=20&c=ZPa3XFuG9-SxqWDQpVrJQIJL-3mmUhv7cJ7EIJbgwg0="></img>
                            <p id="mintchoco_T" onClick={()=>handleAdd("Mint Chocolate Icecream")}>Mint Chocolate Icecream</p>    
                        </li>
                        <li>
                            <img id="butter_icecream" src="https://media.istockphoto.com/id/898391052/photo/pumpkin-pie-ice-cream-gelato-with-cinnamon-stick.jpg?s=612x612&w=is&k=20&c=cGm0gdMTZhOkdfd_XU98PIRcKOsFvI4k3VcGjtvao6Q="></img>
                            <p id="butter_T" onClick={()=>handleAdd("Butter Scotch Icecream")}>Butter Scotch Icecream</p>    
                        </li>
                        <li>
                            <img id="blackberry_icecream" src="https://media.istockphoto.com/id/516731611/photo/ice-cream-sorbet-blackberry-in-the-ceramic-cup.jpg?s=2048x2048&w=is&k=20&c=W5LJ11iJ5Xv7HsqZc8oe23-p8PTIXyJv8rYdjD250s0="></img>
                            <p id="blackberry_T" onClick={()=>handleAdd("Blackberry Icecream")}>Blackberry Icecream</p>    
                        </li>
                    </ol>
            </div>
            
            </li>

            </ol>

        </div>
        </div>
    )
}