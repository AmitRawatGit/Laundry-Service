import "./index.css"
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

function LoginFooter(){
    return(
        <div>
            <div className="footer-div">
                <h2 Style="color:#5861AE;">Now Refer & Earn <span>&#8377;</span>500 for every referral*</h2>
                <p>*Terms and conditions will be applied</p>
            </div>
            <div className="footer-div-2">
                <div>
                    <h4 Style="font-size: 18px; color: #182838;">ABOUT US</h4>
                    <h4 Style="font-size: 15px;">Doorstep Wash & Dryclean Service</h4>
                </div>
                <div>
                    <p Style="font-size: 16px;">Home</p>
                    <p>Sign In</p>
                    <p>Register</p>
                </div>
                <div>
                    <p Style="font-size: 16px;">Pricing</p>
                </div>
                <div>
                    <p Style="font-size: 16px;">Career</p>
                    <p>Blogs</p>
                    <p>Create</p>
                </div>
                <div>
                    <p Style="font-size: 16px;">Contact</p>
                </div>
                <div>
                    <h4 Style="font-size: 16px;">SOCIAL MEDIA</h4>
                    <p>
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="Instagram"/>
                        <img src={linkedin} alt="LinkedIn"/>
                    </p>
                </div>
            </div>
            <div className="footer-div-3">2022 &copy; Laundry By Team 11</div>
        </div>
    )
}

export default LoginFooter;