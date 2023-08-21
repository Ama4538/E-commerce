import '../../styles/main.css';
import '../../styles/HomeSection.css';
import nextArrow from '../../assets/icons/nextArrow.svg';

const HomeSection = () => {
  const nextImg = () => {

  }

  return (
    <section>
      <div className='pictureContainer'>
        <div className="picture">
          <article className='picture-textWrapper'>
            <h2 className='title default-text large-font'>Find Your Fashion</h2>
            <h3 className='title default-text medium-font'> Captitvating and Subverting Expectations </h3>
          </article>
        </div>
        <div className="picture">
          <article className='picture-textWrapper'>
            <h2 className='title default-text large-font'>Take Less to Impress</h2>
            <h3 className='title default-text medium-font'> Life Changing, unique, pioneering </h3>
          </article>
        </div>
        <div className="picture">
          <article className='picture-textWrapper'>
            <h2 className='title default-text large-font'>A Glimpse into Modern</h2>
            <h3 className='title default-text medium-font'> The future is here, but are you? </h3>
          </article>
          <button className='button next'><img src={nextArrow} alt="Next arrow" /></button>
        </div>
      </div>
    </section>
  )
}

export default HomeSection