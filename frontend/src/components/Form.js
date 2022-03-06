import Button from "./Button";

const Form = (props) =>{
 
   return(
       <div>
        <form>
            <input type="text" value={props.num} onChange={props.handleChange}/>
            <Button onClick={props.handleSubmit}/>          
        </form>
        </div> 
  );
}

export default Form;