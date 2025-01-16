
function Message({error}:{error:string}) {
    if(error){
        return (
            <p className="text-sm text-red-600 absolute top-1  right-0 ">{error}</p>
        )
    }
  return null

  
}

export default Message
