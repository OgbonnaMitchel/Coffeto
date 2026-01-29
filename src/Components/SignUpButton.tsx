import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {
  return (
    <button className="bg-[#DDB66F] px-6 py-2 rounded-xl font-semibold text-xs text-[#492D26] border hover:bg-transparent hover:text-white border-[#DDB66F]">
        <Link to="/signup">Sign-Up</Link>
      </button>
  )
}

export default SignUpButton