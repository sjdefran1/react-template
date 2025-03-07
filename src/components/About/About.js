import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { about } from '../../portfolio'
import './About.css'
import resume from '../../static/DeFrancisco_ResumeF22.pdf'
import avatar from '../../static/isu_logo.PNG'
import mePicture from '../../static/pics/steps-bw.jpg'
import pySVG from '../../static/pics/python-5.svg'

//      <img src={mePicture} alt='me' style={{zIndex:0}} /> 


const About = () => {
  const { name, role, description, social } = about
  

  return (
    
    <div className='about center'> 
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          {name && (
            <h1 className='about__role'>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}
          {role && <h2 className='about__role'>A {role}.</h2>}
          <Chip
            color = 'primary'
            label="Junior"
          />
          <Grid item xs={6} sm = {3}>
            <Avatar alt="Remy Sharp" src={pySVG}/>
          </Grid>
          <Grid item xs={6} sm = {3}>
            <Avatar alt="Remy Sharp" src={pySVG}/>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img className='me_header' src={mePicture} alt='me' width="750" height="500"/> 
        </Grid>
        
      </Grid>

      
      
      
      

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
