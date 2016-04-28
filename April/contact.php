<div class="container content contact">
    <!-- <div class="row">
        <div class="twelve">
            <h3>Contact Me</h3>
        </div>
    </div> -->
    <div class="row">
        <div class="six columns left">
            <div class="rowa">
                <ul>
                    <a href="mailto:howard.yunghao.jiang@gmail.com">
                        <li>
                            <div class="rotate email">
                                Email
                            </div>
                        </li>
                    </a>
                    <a target="_blank" href="https://github.com/HowiJ">
                        <li>
                            <div class="rotate github">
                                Github
                            </div>
                        </li>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/howard-jiang-06103954">
                        <li>
                            <div class="rotate linkedin">
                                LinkedIn
                            </div>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="six columns">
            <form action="./php/process.php" method="post">
                <div class="twelve columns">
                    <h4>
                        Send <span>a message</span>
                    </h4>
                </div>
                <label for="name">
                    <div class="two columns">
                        <p>Name: </p>
                    </div>
                    <div class="ten columns">
                        <input type="text" name="name" required>
                    </div>
                </label>
                <label for="name">
                    <div class="two columns">
                        <p>Email: </p>
                    </div>
                    <div class="ten columns">
                        <input type="text" name="email" required>
                    </div>
                </label>
                <label for="name">
                    <p>Message: </p>
                    <textarea name="message" required></textarea>
                </label>
                <input type="submit" value="Send">
            </form>
        </div>
    </div>
</div>
