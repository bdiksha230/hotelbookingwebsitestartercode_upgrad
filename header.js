document.addEventListener("DOMContentLoaded", function () {
    const header = ` 
    <header>
            <div class="header">
                <div class="logo-wrap">
                    <a href="index.html">
                        <img class="logo" src="assests/images/logo.png" alt="logo">
                    </a>
                </div>
                <div class="login_btn">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn bg-white login-btn" data-toggle="modal" data-target="#login-modal">
                        Login
                    </button>


                </div>
                <!-- Modal -->
                <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>

                                    <div class="mb-3 row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text"   class="form-control" id="username"
                                                value=" " required>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="password" required>
                                        </div>
                                    </div>                                     

                                    <button type="submit" class="btn btn-primary" onclick="login()">Login</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", header);
});