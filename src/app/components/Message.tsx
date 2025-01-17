
function Message({error}:{error:string}) {
    if(error){
        return (
            <p className="text-sm text-red-600  ">{error}</p>
        )
    }
  return null

  
}

export default Message
