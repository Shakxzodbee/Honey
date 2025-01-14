import './Info.css'
import FirstImg from '../../assets/FirstImg.png'
import SecondImg from '../../assets/SecondImg.png'
const Info = () => {
    return (
        <section>
            <div className="info">
                <div>
                    <img src={FirstImg} alt="" />
                </div>
                <div className='first-info-text'>
                    <h2>Honey created in the laps of nature</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="info">
                <div className='first-info-text'>
                    <h2>Does your honey taste bad? Try us!</h2>
                    <p>Honey is one of the prime ingredients in your everyday food schedule. As a brand, you need a marketing strategy that will help...</p>
                    <button>Learn More</button>
                </div>
                <div>
                    <img src={SecondImg} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Info;