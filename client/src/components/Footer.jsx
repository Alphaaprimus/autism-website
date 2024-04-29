import React from "react";
import Logo from "../images/autism.png"

const Footer = () => {
    return (
        // <footer>
        //     <img src={Logo} alt="" />
        //     <span>Made with 🐉<b>React.js</b>
        //     </span>
        // </footer>
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
    <img src={Logo} alt="" />
        <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>
        
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li><br></br>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li><br></br>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li><br></br>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li><br></br>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
        </ul>
    </div>

    <div className="col mb-3">
        <h2 className="nav-link">Subcribe for more updates</h2>
        <p class="nav-link">© 2024</p>
        
    </div>

</footer>
    )
}

export default Footer