import { guestsInPark } from "./guestsInPark.js"
import {servicesOffered } from "./servicesOffered.js"
// import { whereIsGuest, whereInPark } from "./whereIsGuest.js"
import { parkAreas } from "./parkAreas.js"



const mainContainer = document.querySelector("#content")

const applicationHTML = `
<article class = "logo">
<h1><left><img src="https://img1.picmix.com/output/stamp/normal/3/3/8/5/255833_51911.gif" alt="Logo"style="width: auto; height: auto;max-width: 320px;max-height: 300px"></img></left></h1>
<div class = "name">
<h1>Cider Falls Park<h1>
</div>
</article>

<article class = "allTheDeets">
<article class ="services">
<aside>
    <h2>Services Offered</h2>
    <p>
    ${servicesOffered()}   
    </p>
    </aside>
</article>
<article class="parks">
    <h2>Park Areas</h2>
    <section class = "eachPark">
    <table>
        <td><tr>${parkAreas()}</tr></td>
    </table>
</section>
</article>
<article class="guests">
    <aside>
    <h2>Guests In Park</h2>
    ${guestsInPark()}
    </aside>
</article>
</article>`



mainContainer.innerHTML = applicationHTML
/* <section class="detail--column list services__services">
<section class="detail--row list parks__parkAreas">
<section class="detail--column list guests__visitors"> */