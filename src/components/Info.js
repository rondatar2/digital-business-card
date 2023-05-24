import Img from './img.jpg';

const Info = () => {
    return (
        <div id='info'>
            <img src={Img} alt='pictue' />
            <div>
                <h1>Ranulfo II R. Datar</h1>
                <h3>Frontend Developer</h3>
                <h4>rondatar.website</h4>
            </div>
            <div id='forButton'>
                <a target="_blank" href='mailto: rondatar3@gmail.com'><div id='email'><i className="fa fa-envelope"></i>Email</div></a>
                <a target="_blank" href='https://www.linkedin.com/in/ranulfo-ii-datar-bab743243/'><div id='linkedin'><i class="fa-brands fa-linkedin"></i>Linkedin</div></a>
            </div>
        </div>
    )
}

export default Info;