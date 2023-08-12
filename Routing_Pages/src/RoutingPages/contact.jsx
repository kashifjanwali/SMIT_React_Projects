export default function Contact() {
    return <>
        <h3>Contact Me</h3>
        <label htmlFor="email">Enter your email</label>
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="msg">Enter Your message</label>
        <br />
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
        <br />
        <input type="submit" value="Send" />
    </>
}