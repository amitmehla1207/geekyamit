import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'

const SocialLinks = () => {
  return (
   <>
    <div className="social-links text-center">
          <a href="https://twitter.com/amitmehla1207" target="_blank" className="twitter"><BsTwitter/></a>
          <a href="https://facebook.com/amitmehla1207" target="_blank" className="facebook"><BsFacebook/></a>
          <a href="https://instagram.com/amitmehla1207" target="_blank" className="instagram"><BsInstagram/></a>
          <a href="https://github.com/amitmehla1207" target="_blank" className="github"><BsGithub/></a>
          <a href="https://linkedin.com/amitmehla1207" target="_blank" className="linkedin"><BsLinkedin/></a>
        </div></>
  )
}

export default SocialLinks