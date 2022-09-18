import React from 'react'
import { useSelector } from 'react-redux'
import Section from '../components/Section'
import '../styles/home.css'

const Home = () => {
    const restaurant = useSelector(state => state.restaurant)
    const hotel = useSelector(state => state.hotel)
    const gym = useSelector(state => state.gym)
    return (
        <div className='home'>
            <header className='home-cover'>
                <img id={'cover'} src="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_1280.jpg" alt="homeimage" />
                <div className='home-cover-info'>
                    <h1>Authentic Experiences in Gabes</h1>
                    <h3>Enjoy memorable moments with local people</h3>
                </div>
                {/* <img className='down-icon' src="/assets/icons/down-icon.png" alt="" /> */}
            </header>
            <div className='sections-conatiner'>
                <div className='section-parent'>
                    <h1>Nous Meilleurs Restaurants</h1>
                    <Section element={restaurant} />
                </div>
                <hr/>
                <div className='section-parent'>
                    <h1>Nous Meilleurs Hotels</h1>
                    <Section element={hotel} />
                </div>
                <hr/>
                <div className='section-parent'>
                    <h1>Nous Meilleurs Salles de Sport</h1>
                    <Section element={gym} />
                </div>
            </div>
        </div>

    )
}

export default Home