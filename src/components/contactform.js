import "./contactform.css"
function ContactF (){
    return(
<div className="form-container">
    <h1>send a message to us</h1>
    <form>
    <input type="text" placeholder="name"/>
    <input type="text" placeholder="email"/>
    <input type="text" placeholder="subject"/>
    <textarea placeholder="message" rows={4}></textarea>
<button>submit</button>
    </form>
</div>
    )
}
export default ContactF;