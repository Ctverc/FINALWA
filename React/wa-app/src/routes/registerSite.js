import React, {Component} from 'react'

class registerSite extends Component
{
  state={
    text: ""
  }
  handleAdd= async e =>
  {
    await this.setState({
    text: e.target.value
    })
  }
  handleSubmit= e =>
    {
      e.prevemtDefault();
      console.log(this.state.text);
      let formData = new FormData
      formData.append("text",this.state.text);
      const url = "http://localhost:80/FINALWA"
      axios.post(url,formData)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    }

  render()
  {
    return(
      <div className='reg'>
        <input
        onChange={this.handleAdd}
        type ="text" 
        id="text" 
        placeholder='enter text'/>
        <br/>
        <button 
        onClick={this.handleSubmit}
        id="submit"> Send</button>

    </div>
    );
  }
}



export default registerSite