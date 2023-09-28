import React, { useEffect } from 'react';
import './Portfolio.css'
import NeonText from '../Components/Neontext';
import lemurlogo from '../assets/Images/Lemur-1.png'


function Portfolio() {
    useEffect(() => {
        const slideNavs = document.querySelectorAll('.slide-nav');

        slideNavs.forEach(slideNav => {
            slideNav.addEventListener('click', handleClick);
        });

        return () => {
            slideNavs.forEach(slideNav => {
                slideNav.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const handleClick = e => {
        e.preventDefault();
        const current = document.querySelector('.flex--active').dataset.slide;
        const next = e.currentTarget.dataset.slide;

        if (current === next) {
            return false;
        } else {
            const slideNavs = document.querySelectorAll('.slide-nav');
            slideNavs.forEach(slideNav => slideNav.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const nextSlide = document.querySelector(
                `.slider__warpper .flex__container[data-slide='${next}']`
            );
            nextSlide.classList.add('flex--preStart');

            const currentSlide = document.querySelector('.flex--active');
            currentSlide.classList.add('animate--end');

            setTimeout(() => {
                nextSlide.classList.remove('animate--start', 'flex--preStart');
                nextSlide.classList.add('flex--active');

                currentSlide.classList.add('animate--start');
                currentSlide.classList.remove(
                    'animate--end',
                    'flex--active'
                );
            }, 800);
        }
    };

    return (
        <section className='Secback'>

            <NeonText type="neon-portfolio" text="LEMUR MEDIA STUDIO PORTFOLIO" data="LEMUR MEDIA STUDIO PORTFOLIO" />
            <div className="Content-Slider">
                <img src={lemurlogo} alt="lemur logo" className='img-portfolio' />
                <div className="slider__warpper">
                    <div className="flex__container flex--active" data-slide="1H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">SHINRA COMPANY</p>
                                <p className="text--normal">Using Midgar as its base of operations, this massive conglomerate maintains an ironclad grip on the world.
                                    Originally a small weapons manufacturer, the advent of mako energy has provided Shinra with unprecedented growth and profits.
                                    Currently, the company focuses on mako energy, arms development, urban planning, space and aeronautics, and food and pharmaceutical production</p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated" src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675551658/Final%20Fantasy/shinra_company_xii4qq.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="2H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">TURKS</p>
                                <p className="text--normal">The Turks is the unofficial name of the Investigation Sector of the General Affairs Department of the Shinra Electric Power Company.
                                    They work inside the Public Security Division under Shinra executive Heidegger.
                                    A special Shinra task force often saddled with atypical assignments, such as scouting for SOLDIER recruits, escorting important individuals, spy work and assassination.
                                    The Turks keep to the company's ever-growing shadow, performing deeds best kept out of the public eye.
                                </p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated" src="https://gameranx.com/wp-content/uploads/2023/01/FlT6fahWYAIIinI-1024x576.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="3H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">SOLDIERS</p>
                                <p className="text--normal">SOLDIER is the elite fighting force of the Shinra Electric Power Company.
                                    Its members are advanced super-soldiers with superhuman strength, speed, and agility.
                                    Much stronger than the Shinra Peacekeeping Troops and the Turks, Shinra deploys SOLDIER for special missions that require the greatest use of strength.
                                    Those who pass SOLDIER's rigorous screening tests are bathed in mako to further enhance their physical capabilities.
                                    Units are assigned one of three ranks depending on aptitude, but even SOLDIERs in the lowest rank are not to be underestimated.
                                </p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675553128/Final%20Fantasy/Shinra_MP_cauc1x.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="4H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">MIDGAR</p>
                                <p className="text--normal">Powered by eight giant mako reactors that were erected by the Shinra Electric Power Company, Midgar is known as the city of mako.
                                    Rising 300 meters above ground level, the steel plates surrounding the Shinra Building offer comfortable residential districts for its well-heeled citizens.
                                    Below these plates, however, are the dark and derelict slums for the impoverished.</p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675553294/Final%20Fantasy/Midgar-construction_frjiwf.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="5H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">JUNON</p>
                                <p className="text--normal">Junon is a major city and military installation.
                                    The city's elevated airfield was built directly above the old town, blocking out the sun and polluting the surrounding seas.
                                    As a result, the once-thriving fishing industry has died out, but the economically deprived village soldiers on, dominated by its larger neighbor.
                                    Is the secondary headquarters for the Shinra Corporation and the central office for the Vice President, Rufus Shinra.
                                    Junon is heavily defended by retractable artillery batteries and its sizable Shinra garrison, as well as being the initial home of Shinra's major defense project, the Mako Cannon, a large long-range cannon powered by Huge Materia.
                                </p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675553654/Final%20Fantasy/Sister_Ray-Crisis_Core_mpumly.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="6H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">AVALANCHE</p>
                                <p className="text--normal">A group of planetologists working to protect the planet.
                                    As the organization grew, smaller cells began to splinter off.
                                    To distinguish themselves among the growing factions, it took the appelation "HQ".
                                    Despite the many groups' different approaches and ideologies, they still occasionally work together for their one shared purpose: the destruction of Shinra.</p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://live.staticflickr.com/65535/49811645401_f818a8a1ba_b.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="7H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">PROMISED LAND</p>
                                <p className="text--normal">The promised land is a quasi-mythical location believed to hold infinite amounts of mako deposits.
                                    The promised land is part of the Cetra legend, a race who traveled the planet, healing and cultivating it, and at the end of their journey would find the promised land, a land of supreme happiness.
                                    The Shinra Electric Power Company, having found a way to harness lifestream's power by condensing it into mako energy, became attracted to the Cetra legend.
                                    A land of such fertility, to Shinra, meant a land full of mako energy, where President Shinra envisioned to build a new city, the Neo Midgar.
                                    To find the mythical promised land, Shinra needed a Cetra.</p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated" src="https://www.gamespot.com/a/uploads/ignore_jpg_scale_super/1581/15811374/36652927%20city%20ancients.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="8H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">CETRA</p>
                                <p className="text--normal">The Cetra, also known as the Ancients, are a race of people from an ancient civilization, although few Ancients are actually depicted in the world.
                                    The Cetra look identical to regular humans, but are deeply spiritual in nature.
                                    According to Sephiroth, regular humans are former Cetra who forsook their migratory nature to form permanent settlements millennia ago.
                                    The Cetra's special trait, which appears to be genetically passed on through their family line, is to interact with the lifestream and the planet in what some call "talking to the planet".</p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675554308/Final%20Fantasy/Cetra_fuxfq7.webp" alt="" />
                        </div>
                    </div>
                    <div className="flex__container animate--start" data-slide="9H">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content">
                                <p className="text--sub">NORTH CRATER</p>
                                <p className="text--normal">The North Crater was created when the asteroid containing Jenova crashed into the planet over 2,000 years.
                                    Jenova began to destroy the planet's lifeforms until the Cetra sealed her within the crater.
                                    However, the wound to the planet caused the planet to send a mass of Spirit Energy to heal itself, causing the continent to be cold year-round.
                                    The planet placed its guardians, the Weapons, to lie in the crater in case another threat as great as Jenova would appear.
                                </p>
                            </div>
                        </div>
                        <div className="flex__item flex__item--right faded faded-left">
                            <img className="ImgAnimated"
                                src="https://res.cloudinary.com/dqhtvtptp/image/upload/v1675554861/Final%20Fantasy/Northern-Crater_qgkdwk.webp" alt="" />
                        </div>
                    </div>

                </div>
                <div className="slider__navi">
                    <figure href="#" className="slide-nav btn-image1 active" data-slide="1H"></figure>
                    <figure href="#" className="slide-nav btn-image2" data-slide="2H"></figure>
                    <figure href="#" className="slide-nav btn-image3" data-slide="3H"></figure>
                    <figure href="#" className="slide-nav btn-image4" data-slide="4H"></figure>
                    <figure href="#" className="slide-nav btn-image5" data-slide="5H"></figure>
                    <figure href="#" className="slide-nav btn-image6" data-slide="6H"></figure>
                    <figure href="#" className="slide-nav btn-image7" data-slide="7H"></figure>
                    <figure href="#" className="slide-nav btn-image8" data-slide="8H"></figure>
                    <figure href="#" className="slide-nav btn-image9" data-slide="9H"></figure>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;