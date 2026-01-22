import Rect from 'react'
import {useParams} from 'react-router-dom'
function User() {
  const {userid}=useParams();
  return (
    <div className="text-3xl font-bold underline bg-gray-600 text-white p-4">
      user:{userid}
    </div>
  )
}

export default User;