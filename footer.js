document.addEventListener("DOMContentLoaded", function() {

 
    const footer = `
        <footer>
            <div class="footer-div">
                <div>
                    <a href="contact.html" class="btn contact_btn"> Contact us </a>

                </div>
                <div class="copyright">
                    <p class="m-0">@ 2020 ROOM SEARCH PVT. LTD.</p>
                </div>
                <div class="socialmedia_link">
                    <a href="https://www.facebook.com/"> <img class="socialmedia-img" src="assests/images/facebook.png"
                            alt=""> </a>
                    <a href="https://www.instagram.com/"> <img class="socialmedia-img"
                            src="assests/images/instagram.png" alt=""> </a>
                    <a href="https://www.twitter.com/"> <img class="socialmedia-img" src="assests/images/twitter.png"
                            alt=""> </a>

                </div>

            </div>

        </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", footer);
});