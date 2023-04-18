import "../CSS/Form.css";

function Form() {
  return (
    <>
      <div className="form">
        <label>First Name</label>
        <input type="text" placeholder="Required" required />
        <label>Last Name</label>
        <input type="text" placeholder="Required" />
        <label>Email Address</label>
        <input type="email" placeholder="Required" />
        <label>Phone Number</label>
        <input type="number" placeholder="Required" />
       
        <label>Select a Service you are inquiring about</label>
        <select>
          <option value="">Required</option>
          <option value="">Upgrade-Current-Website</option>
          <option value="">Need-New-Website</option>
          <option value="">Managment-App-Demo</option>
          <option value="">Other-Details-in-Messages</option>
          <option value="">Digital-Marketing</option>
        </select>
        <label>Message</label>
        <input type="textbox" className="textbox" placeholder="Optional"/>
        

        <button className="submit">Submit</button>
      </div>
    </>
  );
}

export default Form;
